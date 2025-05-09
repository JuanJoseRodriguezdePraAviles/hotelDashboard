import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Filter } from "../../components/Filter/Filter";
import { List } from "../../components/List/List";
import { ConciergeListWrapper, EmployeeBtn, Filters, Notification } from "./ConciergeListStyled";
import { deleteEmployee, fetchEmployees } from "../../redux/thunks/EmployeeThunk";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Status } from "../../interfaces/Status";
import { RoomStatus } from "../../interfaces/RoomStatus";

export const ConciergeList = () => {
    const dispatch = useAppDispatch();

    const employees = useAppSelector((state) => state.employees.employees);
    const status = useAppSelector((state) => state.employees.status);
    const error = useAppSelector((state) => state.employees.error);

    const location = useLocation();
    const [showNotificationCreated, setShowNotificationCreated] = useState(false);
    const [showNotificationEdited, setShowNotificationEdited] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All Employee");

    const filteredEmployees = employees.filter((employee) => {
        if (activeFilter === 'All Employee') return true;
        if (activeFilter === 'Active Employee') return employee.status === true;
        if (activeFilter === 'Inactive Employee') return employee.status === false;
        return true;
    });

    const [selectedEmployees, setSelectedEmployees] = useState<string[]>([]);


    useEffect(() => {
        if (status === Status.Loading) {
            dispatch(fetchEmployees());
        }
    }, [dispatch, status]);

    useEffect(() => {
        if (location.state?.created) {
            setShowNotificationCreated(true);
            setTimeout(() => {
                setShowNotificationCreated(false);
            }, 3000);
        }
        if (location.state?.edited) {
            setShowNotificationEdited(true);
            setTimeout(() => {
                setShowNotificationEdited(false);
            }, 3000);
        }
    }, [location]);

    const handleCheckboxChange = (employeeId?: string, isChecked?: boolean) => {
        if (employeeId === undefined || isChecked === undefined) return;

        setSelectedEmployees((prevSelected) => {
            if (isChecked) {
                return [...prevSelected, employeeId];
            } else {
                return prevSelected.filter((id) => id !== employeeId);
            }
        });
    }

    const handleDelete = (employeeId: string) => {
        setSelectedEmployees((prevSelected) => prevSelected.filter((id) => id !== employeeId));
        dispatch(deleteEmployee(employeeId));
    }

    const isSingleSelection = selectedEmployees.length === 1;

    return (
        <div>
            {showNotificationCreated && (
                <Notification>Employee Created!</Notification>
            )}
            {showNotificationEdited && (
                <Notification>Employee Edited!</Notification>
            )}

            <div>
                <ConciergeListWrapper>
                    {status === Status.Loading && <button>Loading Employees...</button>}
                    {status === Status.Failed && <button>Failed to load employees</button>}
                    <Filters>
                        {[
                            { name: "All Employee", color: "#6E6E6E" },
                            { name: "Active Employee", color: "#6E6E6E" },
                            { name: "Inactive Employee", color: "#6E6E6E" }
                        ].map((filter) => (
                            <Filter
                                key={filter.name}
                                name={filter.name}
                                color={filter.color}
                                onClick={() => setActiveFilter(filter.name)}
                                active={activeFilter === filter.name}
                            />
                        ))}
                    </Filters>
                    <List type="employee" list={filteredEmployees} fieldsName={["Name", "Email", "Job Desk", "Contact", "Status"]}
                        onCheckboxChange={handleCheckboxChange} selected={selectedEmployees} />
                </ConciergeListWrapper>
            </div>
        </div>

    );
}