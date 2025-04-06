import { useEffect, useState } from "react"
import { DateInput, FieldText, Label, EditBookingTitle, EditBookingWrapper, SubmitBtn, ValidationError } from "./EditBookingStyled";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editBooking } from "../../redux/slices/BookingSlice";

export const EditBooking = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { bookingId } = useParams();

    const booking = useSelector((state) => state.bookings.bookings.find((booking) => booking.booking_id === Number(bookingId)));

    const [formData, setFormData] = useState({
        client_id: '',
        client_name: '',
        client_email: '',
        client_phone: '',
        check_in_date: '',
        check_out_date: '',
        special_request: '',
        room_id: '',
        room_type: '',
        status: 'booked'
    });

    const [errors, setErrors] = useState({});

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth()+1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    useEffect(() => {
        if (booking) {


            setFormData({
                client_id: booking.client_id,
                client_name: booking.client_name,
                client_email: booking.client_email,
                client_phone: booking.client_phone,
                check_in_date: formatDate(booking.check_in_date),
                check_out_date: formatDate(booking.check_out_date),
                special_request: booking.special_request,
                room_id: booking.room_id,
                room_type: booking.room_type,
                status: booking.status
            });
        }
    }, [booking])

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
            if (!formData[key]) {
                newErrors[key] = `Field ${key} cannot be empty`;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        dispatch(editBooking({ id: bookingId, updateBooking: formData }));

        navigate("/bookings");
    }

    return (
        <EditBookingWrapper>
            <EditBookingTitle>Edit booking</EditBookingTitle>
            <Label>Client ID</Label>
            <FieldText name="client_id" value={formData.client_id} onChange={handleChange} />
            {errors.client_id &&
                <ValidationError>
                    {errors.client_id}
                </ValidationError>
            }
            <Label>Client Name</Label>
            <FieldText name="client_name" value={formData.client_name} onChange={handleChange} required/>
            {errors.client_name &&
                <ValidationError>
                    {errors.client_name}
                </ValidationError>
            }
            <Label>Client Email</Label>
            <FieldText name="client_email" value={formData.client_email} onChange={handleChange} required/>
            {errors.client_email &&
                <ValidationError>
                    {errors.client_email}
                </ValidationError>
            }
            <Label>Client Phone</Label>
            <FieldText name="client_phone" value={formData.client_phone} onChange={handleChange} required/>
            {errors.client_name &&
                <ValidationError>
                    {errors.client_name}
                </ValidationError>
            }
            <Label>Check In Date</Label>
            <DateInput type="date" name="check_in_date" value={formData.check_in_date} onChange={handleChange} required/>
            {errors.check_in_date &&
                <ValidationError>
                    {errors.check_in_date}
                </ValidationError>
            }
            <Label>Check Out Date</Label>
            <DateInput type="date" name="check_out_date" value={formData.check_out_date} onChange={handleChange} required/>
            {errors.check_out_date &&
                <ValidationError>
                    {errors.check_out_date}
                </ValidationError>
            }
            <Label>Special Request</Label>
            <FieldText name="special_request" value={formData.special_request} onChange={handleChange} required/>
            {errors.special_request &&
                <ValidationError>
                    {errors.special_request}
                </ValidationError>
            }
            <Label>Room ID</Label>
            <FieldText name="room_id" value={formData.room_id} onChange={handleChange} required/>
            {errors.room_id &&
                <ValidationError>
                    {errors.room_id}
                </ValidationError>
            }
            <Label>Room Type</Label>
            <FieldText name="room_type" value={formData.room_type} onChange={handleChange} required/>
            {errors.room_type &&
                <ValidationError>
                    {errors.room_type}
                </ValidationError>
            }
            <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
        </EditBookingWrapper>
    )
}