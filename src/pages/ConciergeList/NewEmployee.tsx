import React from "react";
import { useState } from "react"
import { DateInput, FieldText, Label, NewEmployeeTitle, NewEmployeeWrapper, SubmitBtn, ValidationError } from "./NewEmployeeStyled";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addEmployee } from "../../redux/slices/EmployeeSlice";
import { FieldLabelContainer, Fields, FieldWrapper } from "../Bookings/NewBookingStyled";

export const NewEmployee = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    interface FormData {
        id: string,
        name: string,
        email: string,
        job_functions: string,
        registration_date: string,
        phone: string,
        schelude: string,
        status: boolean
    }

    const [formData, setFormData] = useState<FormData>({
        id: '',
        name: '',
        email: '',
        job_functions: '',
        registration_date: '',
        phone: '',
        schelude: '',
        status: false
    });

    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        Object.keys(formData).forEach((key) => {
            if (formData[key] === '' ||
                formData[key] === null ||
                formData[key] === undefined ||
                (Array.isArray(formData[key] && formData[key].length === 0))
            ) {
                newErrors[key] = `Field ${key} cannot be empty`;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        dispatch(addEmployee(formData));

        navigate("/conciergeList", { state: { created: true } });
    }

    return (
        <NewEmployeeWrapper>
            <NewEmployeeTitle>New employee</NewEmployeeTitle>
            <Fields>
                <FieldWrapper>
                    {errors.id &&
                        <ValidationError>
                            {errors.id}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Employee ID</Label>
                        <FieldText name="id" value={formData.id} onChange={handleChange} />
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
                        <DateInput type="date" name="registration_date" value={formData.registration_date} onChange={handleChange} required />
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