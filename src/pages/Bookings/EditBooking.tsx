import React from "react";
import { useEffect, useState } from "react"
import { DateInput, FieldText, Label, EditBookingTitle, EditBookingWrapper, SubmitBtn, ValidationError, FieldWrapper, Fields, FieldLabelContainer } from "./EditBookingStyled";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { editBooking } from "../../redux/slices/BookingSlice";
import { RoomStatus } from "../../interfaces/RoomStatus";
import { Status } from "../../interfaces/Status";
import { FieldOption, FieldSelect } from "./NewBookingStyled";
import { RoomType } from "../../interfaces/RoomType";

export const EditBooking = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { bookingId } = useParams();

    const { bookings, status } = useAppSelector((state) => state.bookings);

    if (status === Status.Loading) {
        return <p>Loading bookings</p>
    }

    const booking = useAppSelector((state) => state.bookings.bookings.find((booking) => booking.booking_id.toString() === bookingId));

    if (!booking) {
        return <p>Reserva no encontrada</p>
    }

    interface FormData {
        booking_id: string,
        client_id: string,
        client_name: string,
        client_email: string,
        client_phone: string,
        check_in_date: string,
        check_out_date: string,
        special_request: string,
        room_id: string,
        room_type: string,
        status: string
    }

    const [formData, setFormData] = useState<FormData>({
        booking_id: '',
        client_id: '',
        client_name: '',
        client_email: '',
        client_phone: '',
        check_in_date: '',
        check_out_date: '',
        special_request: '',
        room_id: '',
        room_type: '',
        status: RoomStatus.Booked
    });

    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, "0");
        const day = String(date.getDate()).padStart(2, "0");
        return `${year}-${month}-${day}`;
    }

    useEffect(() => {
        if (booking) {
            setFormData({
                booking_id: booking.booking_id,
                client_id: booking.client_id,
                client_name: booking.client_name ?? "",
                client_email: booking.client_email ?? "",
                client_phone: booking.client_phone ?? "",
                check_in_date: booking.check_in_date ? formatDate(booking.check_in_date.toString()) : '',
                check_out_date: booking.check_out_date ? formatDate(booking.check_out_date.toString()) : '',
                special_request: booking.special_request ?? "",
                room_id: booking.room_id ?? "",
                room_type: booking.room_type,
                status: booking.status ?? ""
            });
        }
    }, [booking])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newErrors: Partial<Record<keyof FormData, string>> = {};

        Object.keys(formData).forEach((key) => {
            const typedKey = key as keyof FormData;
            if (!formData[typedKey]) {
                newErrors[typedKey] = `Field ${key} cannot be empty`;
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

        dispatch(editBooking({ id: bookingId, updateBooking: formattedData }));

        navigate("/bookings", { state: { edited: true } });
    }

    return (
        <EditBookingWrapper>
            <EditBookingTitle>Edit booking form</EditBookingTitle>
            <Fields>
                <FieldWrapper>
                    {errors.booking_id &&
                        <ValidationError>
                            {errors.booking_id}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Booking ID</Label>
                        <FieldText name="booking_id" value={formData.booking_id} onChange={handleChange} readOnly />
                    </FieldLabelContainer>
                </FieldWrapper>
                <FieldWrapper>
                    {errors.client_id &&
                        <ValidationError>
                            {errors.client_id}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Client ID</Label>
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
                        <Label>Client Name</Label>
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
                        <Label>Client Email</Label>
                        <FieldText name="client_email" value={formData.client_email} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>
                <FieldWrapper>
                    {errors.client_phone &&
                        <ValidationError>
                            {errors.client_phone}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Client Phone</Label>
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
                        <Label>Check In Date</Label>
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
                        <Label>Check Out Date</Label>
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
                        <Label>Special Request</Label>
                        <FieldText name="special_request" value={formData.special_request} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>
                <FieldWrapper>
                    {errors.room_id &&
                        <ValidationError>
                            {errors.room_id}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Room ID</Label>
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
                        <FieldSelect name="room_type" value={formData.room_type} onChange={handleChange} required>
                            <FieldOption value={RoomType.DoubleBed}>{RoomType.DoubleBed}</FieldOption>
                            <FieldOption value={RoomType.DoubleSuperior}>{RoomType.DoubleSuperior}</FieldOption>
                            <FieldOption value={RoomType.SingleBed}>{RoomType.SingleBed}</FieldOption>
                            <FieldOption value={RoomType.Suite}>{RoomType.Suite}</FieldOption>
                        </FieldSelect>
                    </FieldLabelContainer>
                </FieldWrapper>



            </Fields>

            <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
        </EditBookingWrapper>
    )
}