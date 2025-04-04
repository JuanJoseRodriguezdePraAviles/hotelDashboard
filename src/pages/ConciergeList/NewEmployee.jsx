import { useState } from "react"
import { DateInput, FieldText, Label, NewEmployeeTitle, NewEmployeeWrapper, SubmitBtn, ValidationError } from "./NewEmployeeStyled";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addEmployee } from "../../redux/slices/EmployeeSlice";

export const NewEmployee = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        id: '',
        name: '',
        email: '',
        job_functions: '',
        registration_date: '',
        phone: '',
        schelude: '',
        status: false
    });

    const [errors, setErrors] = useState({});

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

        navigate("/conciergeList");
    }

    return (
        <NewEmployeeWrapper>
            <NewEmployeeTitle>New employee</NewEmployeeTitle>
            <Label>Employee ID</Label>
            <FieldText name="id" value={formData.id} onChange={handleChange} />
            {errors.id &&
                <ValidationError>
                    {errors.id}
                </ValidationError>
            }
            <Label>Employee Name</Label>
            <FieldText name="name" value={formData.name} onChange={handleChange} />
            {errors.name &&
                <ValidationError>
                    {errors.name}
                </ValidationError>
            }
            <Label>Employee Email</Label>
            <FieldText name="email" value={formData.email} onChange={handleChange} />
            {errors.email &&
                <ValidationError>
                    {errors.email}
                </ValidationError>
            }
            <Label>Job Functions</Label>
            <FieldText name="job_functions" value={formData.job_functions} onChange={handleChange} />
            {errors.job_functions &&
                <ValidationError>
                    {errors.job_functions}
                </ValidationError>
            }
            <Label>Registration Date</Label>
            <DateInput type="date" name="registration_date" value={formData.registration_date} onChange={handleChange} />
            {errors.registration_date &&
                <ValidationError>
                    {errors.registration_date}
                </ValidationError>
            }
            <Label>Phone</Label>
            <FieldText name="phone" value={formData.phone} onChange={handleChange} />
            {errors.phone &&
                <ValidationError>
                    {errors.phone}
                </ValidationError>
            }
            <Label>Schelude</Label>
            <FieldText name="schelude" value={formData.schelude} onChange={handleChange} />
            {errors.schelude &&
                <ValidationError>
                    {errors.schelude}
                </ValidationError>
            }
            <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
        </NewEmployeeWrapper>
    )
}