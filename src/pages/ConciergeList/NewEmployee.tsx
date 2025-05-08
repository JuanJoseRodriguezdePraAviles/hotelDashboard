import React from "react";
import { useState } from "react"
import { DateInput, FieldText, Label, NewEmployeeTitle, NewEmployeeWrapper, SubmitBtn, ValidationError } from "./NewEmployeeStyled";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { Employee } from "../../redux/slices/EmployeeSlice";
import { createEmployee } from "../../redux/thunks/EmployeeThunk";
import { FieldLabelContainer, Fields, FieldWrapper } from "../Bookings/NewBookingStyled";

export const NewEmployee = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<Employee>({
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Partial<Record<keyof Employee, string>> = {};

        const skipFalsyCheck: (keyof Employee)[] = ["status"];

        (Object.keys(formData) as(keyof Employee)[]).forEach((key) => {
            if (!skipFalsyCheck.includes(key) && !formData[key]) {
                newErrors[key] = `Field ${key} cannot be empty`;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const formattedData = { ...formData };

        dispatch(createEmployee(formattedData as Employee));

        navigate("/conciergeList", { state: { created: true } });
    }

    return (
        <NewEmployeeWrapper>
            <NewEmployeeTitle>New employee</NewEmployeeTitle>
            <Fields>
                <FieldWrapper>
                    {errors._id &&
                        <ValidationError>
                            {errors._id}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Employee ID</Label>
                        <FieldText name="id" value={formData._id} onChange={handleChange} />
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
                    {errors.password &&
                        <ValidationError>
                            {errors.password}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Employee Password</Label>
                        <FieldText name="password" value={formData.password} onChange={handleChange} required />
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
                        <DateInput type="date" name="registration_date" value={formData.registration_date instanceof Date? formData.registration_date?.toISOString().split("T")[0]:""} onChange={handleChange} required />
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
        </NewEmployeeWrapper>
    )
}