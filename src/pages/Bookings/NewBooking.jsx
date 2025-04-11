import { useState } from "react"
import { DateInput, FieldLabelContainer, Fields, FieldText, FieldWrapper, Label, NewBookingTitle, NewBookingWrapper, SubmitBtn, ValidationError } from "./NewBookingStyled";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addBooking } from "../../redux/slices/BookingSlice";

export const NewBooking = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const getFormattedToday = () => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const year = today.getFullYear();
        return `${month}/${day}/${year}`;
    }
    const [formData, setFormData] = useState({
        booking_id: '',
        client_id: '',
        client_name: '',
        client_email: '',
        client_phone: '',
        order_date: getFormattedToday(),
        check_in_date: '',
        check_out_date: '',
        special_request: '',
        room_id: '',
        room_type: '',
        status: 'booked'
    });


    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, type } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const newErrors = {};

        Object.keys(formData).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = `Field ${key} cannot be empty`;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const formattedData = { ...formData };

        if (formattedData.check_in_date) {
            const [year, month, day] = formattedData.check_in_date.split("-");
            formattedData.check_in_date = `${month}/${day}/${year}`;
        }

        if (formattedData.check_out_date) {
            const [year, month, day] = formattedData.check_out_date.split("-");
            formattedData.check_out_date = `${month}/${day}/${year}`;
        }

        dispatch(addBooking(formattedData));

        navigate("/bookings", { state: { created: true } });
    }

    return (
        <NewBookingWrapper>
            <NewBookingTitle>New booking form</NewBookingTitle>
            <Fields>
                <FieldWrapper>
                    {errors.booking_id &&
                        <ValidationError>
                            {errors.booking_id}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Booking ID:</Label>
                        <FieldText name="booking_id" value={formData.booking_id} onChange={handleChange} />
                    </FieldLabelContainer>

                </FieldWrapper>
                <FieldWrapper>
                    {errors.client_id &&
                        <ValidationError>
                            {errors.client_id}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Client ID:</Label>
                        <FieldText name="client_id" value={formData.client_id} onChange={handleChange} />
                    </FieldLabelContainer>
                </FieldWrapper>

                <FieldWrapper>
                    {errors.client_name &&
                        <ValidationError>
                            {errors.client_name}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Client Name:</Label>
                        <FieldText name="client_name" value={formData.client_name} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>

                <FieldWrapper>
                    {errors.client_email &&
                        <ValidationError>
                            {errors.client_email}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Client Email:</Label>
                        <FieldText name="client_email" value={formData.client_email} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>

                <FieldWrapper>
                    {errors.client_name &&
                        <ValidationError>
                            {errors.client_name}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Client Phone:</Label>
                        <FieldText name="client_phone" value={formData.client_phone} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>

                <FieldWrapper>
                    {errors.check_in_date &&
                        <ValidationError>
                            {errors.check_in_date}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Check In Date:</Label>
                        <DateInput type="date" name="check_in_date" value={formData.check_in_date} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>

                <FieldWrapper>
                    {errors.check_out_date &&
                        <ValidationError>
                            {errors.check_out_date}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Check Out Date:</Label>
                        <DateInput type="date" name="check_out_date" value={formData.check_out_date} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>

                <FieldWrapper>
                    {errors.special_request &&
                        <ValidationError>
                            {errors.special_request}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Special Request:</Label>
                        <FieldText name="special_request" value={formData.special_request} onChange={handleChange} />
                    </FieldLabelContainer>
                </FieldWrapper>

                <FieldWrapper>
                    {errors.room_id &&
                        <ValidationError>
                            {errors.room_id}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Room ID:</Label>
                        <FieldText name="room_id" value={formData.room_id} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>

                <FieldWrapper>
                    {errors.room_type &&
                        <ValidationError>
                            {errors.room_type}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Room Type:</Label>
                        <FieldText name="room_type" value={formData.room_type} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>
            </Fields>
            <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
        </NewBookingWrapper>
    )
}