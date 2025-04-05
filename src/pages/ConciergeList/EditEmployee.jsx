import { useEffect, useState } from "react"
import { FieldText, Label, EditEmployeeTitle, EditEmployeeWrapper, SubmitBtn, ValidationError } from "./EditEmployeeStyled";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editEmployee } from "../../redux/slices/EmployeeSlice";
import { DateInput } from "./NewEmployeeStyled";

export const EditEmployee = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { employeeId } = useParams();

    const employee = useSelector((state) => state.employees.employees.find((employee) => employee.id === Number(employeeId)));

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

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    useEffect(() => {
        if (employee) {
            setFormData({
                id: employee.id,
                name: employee.name,
                email: employee.email,
                job_functions: employee.job_functions,
                registration_date: employee.registration_date,
                phone: employee.phone,
                schelude: employee.schelude,
                status: employee.status
            });
        }
    }, [employee]);

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
                (Array.isArray(formData[key]) && formData[key].length === 0)
            ) {
                newErrors[key] = `Field ${key} cannot be empty`;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        dispatch(editEmployee({ id: employeeId, updateEmployee: formData }));

        navigate("/conciergeList");
    }

    return (
        <EditEmployeeWrapper>
            <EditEmployeeTitle>Edit employee</EditEmployeeTitle>
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
        </EditEmployeeWrapper>
    )
}