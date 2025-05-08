import React from "react";
import { useEffect, useState } from "react"
import { FieldText, Label, EditEmployeeTitle, EditEmployeeWrapper, SubmitBtn, ValidationError } from "./EditEmployeeStyled";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Employee } from "../../redux/slices/EmployeeSlice";
import { updateEmployee } from "../../redux/thunks/EmployeeThunk";
import { DateInput } from "./NewEmployeeStyled";
import { FieldLabelContainer, Fields, FieldWrapper } from "../Bookings/NewBookingStyled";

export const EditEmployee = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { employeeId } = useParams();

    const employee = useAppSelector((state) => state.employees.employees.find((employee) => employee?._id?.toString() === employeeId));

    const [formData, setFormData] = useState<Employee>({
        _id: '',
        name: '',
        email: '',
        password: '',
        job_functions: '',
        registration_date: new Date(),
        phone: '',
        schelude: '',
        status: false
    });

    const [errors, setErrors] = useState<Partial<Record<keyof Employee, string>>>({});

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    useEffect(() => {
        if (employee) {
            setFormData({
                _id: employee._id,
                name: employee.name,
                email: employee.email ?? "",
                password: employee.password,
                job_functions: employee.job_functions ?? "",
                registration_date: employee.registration_date,
                phone: employee.phone ?? "",
                schelude: employee.schelude ?? "",
                status: employee.status || false
            });
        }
    }, [employee]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newErrors: Partial<Record<keyof Employee, string>> = {};

        const skipFalsyCheck: (keyof Employee)[] = ["status"];

        (Object.keys(formData) as (keyof Employee)[]).forEach((key) => {
            const typedKey = key as keyof Employee;
            if (!skipFalsyCheck.includes(key) && !formData[typedKey]) {
                newErrors[typedKey] = `Field ${key} cannot be empty`;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        const formattedData = { ...formData };

        if (!employeeId) {
            console.error("ID is undefined");
            return;
        }
        dispatch(updateEmployee({ id: employeeId, updatedEmployee: formData }));

        navigate("/conciergeList", { state: { edited: true } });
    }

    return (
        <EditEmployeeWrapper>
            <EditEmployeeTitle>Edit employee</EditEmployeeTitle>
            <Fields>
                <FieldWrapper>
                    {errors._id &&
                        <ValidationError>
                            {errors._id}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Employee ID</Label>
                        <FieldText name="id" value={formData._id} onChange={handleChange} readOnly />
                    </FieldLabelContainer>
                </FieldWrapper>
                <FieldWrapper>
                    {errors.name &&
                        <ValidationError>
                            {errors.name}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Employee Name</Label>
                        <FieldText name="name" value={formData.name} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>
                <FieldWrapper>
                    {errors.email &&
                        <ValidationError>
                            {errors.email}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Employee Email</Label>
                        <FieldText name="email" value={formData.email} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>
                <FieldWrapper>
                    {errors.job_functions &&
                        <ValidationError>
                            {errors.job_functions}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Job Functions</Label>
                        <FieldText name="job_functions" value={formData.job_functions} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>
                <FieldWrapper>
                    {errors.registration_date &&
                        <ValidationError>
                            {errors.registration_date}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Registration Date</Label>
                        <DateInput type="date" name="registration_date" value={formData.registration_date instanceof Date ? formData.registration_date?.toISOString().split("T")[0] : ""} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>
                <FieldWrapper>
                    {errors.phone &&
                        <ValidationError>
                            {errors.phone}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Phone</Label>
                        <FieldText name="phone" value={formData.phone} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>
                <FieldWrapper>
                    {errors.schelude &&
                        <ValidationError>
                            {errors.schelude}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Schelude</Label>
                        <FieldText name="schelude" value={formData.schelude} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>
            </Fields>
            <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
        </EditEmployeeWrapper>
    )
}