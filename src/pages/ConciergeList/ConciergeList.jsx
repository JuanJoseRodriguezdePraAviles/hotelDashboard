import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../../components/Filter/Filter";
import { List } from "../../components/List/List";
import { ConciergeListWrapper, EmployeeBtn, Filters } from "./ConciergeListStyled";
import { deleteEmployee, fetchEmployees } from "../../redux/slices/EmployeeSlice";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const ConciergeList = () => {
    const dispatch = useDispatch();

    const employees = useSelector((state) => state.employees.employees);
    const status = useSelector((state) => state.employees.status);
    const error = useSelector((state) => state.employees.error);

    const [selectedEmployees, setSelectedEmployees] = useState([]);


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchEmployees());
        }
    }, [dispatch, status]);

    const handleCheckboxChange = (employeeId, isChecked) => {
        setSelectedEmployees((prevSelected) => {
            if (isChecked) {
                return [...prevSelected, employeeId];
            } else {
                return prevSelected.filter((id) => id !== employeeId);
            }
        });
    }

    const handleDelete = (employeeId) => {
        setSelectedEmployees((prevSelected) => prevSelected.filter((id) => id !== employeeId));
        dispatch(deleteEmployee({ id: employeeId }));
        
        
    }

    const isSingleSelection = selectedEmployees.length === 1;

    return (
        <ConciergeListWrapper>
            {status === 'loading' && <button>Loading Employees...</button>}
            {status === 'failed' && <button>Failed to load employees</button>}
            <Filters>
                <Filter name="All Employee" color="#135846"></Filter>
                <Filter name="Active Employee" color="#6E6E6E"></Filter>
                <Filter name="Inactive Employee" color="#6E6E6E"></Filter>
            </Filters>
            <Link to="/NewEmployee">
                <EmployeeBtn>New Employee</EmployeeBtn>
            </Link>
            {isSingleSelection ?
                <>
                    <Link to={`/EditEmployee/${selectedEmployees[0]}`}>
                        <EmployeeBtn>Edit Employee</EmployeeBtn>
                    </Link>
                    <EmployeeBtn onClick={() => handleDelete(selectedEmployees[0])}>Delete Employee</EmployeeBtn>
                </>
                :
                <>
                    <EmployeeBtn disabled>Edit Employee</EmployeeBtn>
                    <EmployeeBtn disabled>Delete Employee</EmployeeBtn>
                </>
            }
            <List type="employee" list={employees} onCheckboxChange={handleCheckboxChange} selected={selectedEmployees}/>
        </ConciergeListWrapper>
    );
}