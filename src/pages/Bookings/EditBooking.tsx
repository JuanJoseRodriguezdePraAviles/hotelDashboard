import React from "react";
import { useEffect, useState } from "react"
import { DateInput, FieldText, Label, EditBookingTitle, EditBookingWrapper, SubmitBtn, ValidationError, FieldWrapper, Fields, FieldLabelContainer } from "./EditBookingStyled";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Booking } from "../../redux/slices/BookingSlice";
import { updateBooking } from "../../redux/thunks/BookingThunk";
import { FieldOption, FieldSelect } from "./NewBookingStyled";
import { BookingStatus } from "../../interfaces/BookingStatus";
import { fetchRooms } from "../../redux/thunks/RoomThunk";

export const EditBooking = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { bookingId } = useParams();

    const booking = useAppSelector((state) => state.bookings.bookings.find((booking) => booking?._id?.toString() === bookingId));

    if (!booking) {
        return <p>Reserva no encontrada</p>
    }

    const [formData, setFormData] = useState<Booking>({
        _id: '',
        client_id: '',
        client_name: '',
        client_email: '',
        client_phone: '',
        check_in_date: new Date(),
        check_out_date: new Date(),
        special_request: '',
        room_id: '',
        status: BookingStatus.InProgress
    });

    const [errors, setErrors] = useState<Partial<Record<keyof Booking, string>>>({});

    const { rooms } = useAppSelector((state) => state.rooms);

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
                _id: booking._id,
                client_id: booking.client_id,
                client_name: booking.client_name ?? "",
                client_email: booking.client_email ?? "",
                client_phone: booking.client_phone ?? "",
                check_in_date: booking.check_in_date,
                check_out_date: booking.check_out_date,
                special_request: booking.special_request ?? "",
                room_id: booking.room_id ?? "",
                status: booking.status
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
        const newErrors: Partial<Record<keyof Booking, string>> = {};

        Object.keys(formData).forEach((key) => {
            const typedKey = key as keyof Booking;
            if (!formData[typedKey]) {
                newErrors[typedKey] = `Field ${key} cannot be empty`;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const formattedData = { ...formData };

        if (!bookingId) {
            console.error("Booking ID is undefined");
            return;
        }
        dispatch(updateBooking({ id: bookingId, updatedBooking: formattedData }));

        navigate("/bookings", { state: { edited: true } });
    }

    useEffect(() => {
            dispatch(fetchRooms());
    }, [dispatch]);

    return (
        <EditBookingWrapper>
            <EditBookingTitle>Edit booking form</EditBookingTitle>
            <Fields>
                <FieldWrapper>
                    {errors._id &&
                        <ValidationError>
                            {errors._id}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Booking ID</Label>
                        <FieldText name="_id" value={formData._id} onChange={handleChange} readOnly />
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
                        <DateInput type="date" name="check_in_date" value={formData.check_in_date instanceof Date? formData.check_in_date?.toISOString().split("T")[0] : ""} onChange={handleChange} required />
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
                        <DateInput type="date" name="check_out_date" value={formData.check_out_date instanceof Date? formData.check_out_date?.toISOString().split("T")[0] : ""} onChange={handleChange} required />
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
                        <Label>Room ID:</Label>
                        <FieldSelect name="room_id" value={formData.room_id} onChange={handleChange} required >
                            <FieldOption value="">Select a room</FieldOption>
                            {rooms.map((room) => (
                                <FieldOption key={room._id} value={room._id}>
                                    {room.room_name} ({room._id})
                                </FieldOption>
                            ))}
                        </FieldSelect>
                    </FieldLabelContainer>
                </FieldWrapper>
            </Fields>

            <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
        </EditBookingWrapper>
    )
}