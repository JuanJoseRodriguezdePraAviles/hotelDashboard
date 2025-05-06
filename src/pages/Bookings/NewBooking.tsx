import React from "react";
import { useState, useEffect } from "react"
import { DateInput, FieldLabelContainer, FieldOption, Fields, FieldSelect, FieldText, FieldWrapper, Label, NewBookingTitle, NewBookingWrapper, SubmitBtn, ValidationError } from "./NewBookingStyled";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Booking, createBooking } from "../../redux/slices/BookingSlice";
import { BookingStatus } from "../../interfaces/BookingStatus";
import { fetchRooms } from "../../redux/slices/RoomSlice";

export const NewBooking = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const getFormattedToday = () => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const year = today.getFullYear();
        return `${month}/${day}/${year}`;
    }

    const [formData, setFormData] = useState<Booking>({
        _id: '',
        client_id: '',
        client_name: '',
        client_email: '',
        client_phone: '',
        order_date: new Date(),
        check_in_date: new Date(),
        check_out_date: new Date(),
        special_request: '',
        room_id: '',
        status: BookingStatus.InProgress
    });


    const [errors, setErrors] = useState<Partial<Record<keyof Booking, string>>>({});

    const { rooms } = useAppSelector((state) => state.rooms);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Partial<Record<keyof Booking, string>> = {};

        (Object.keys(formData) as (keyof Booking)[]).forEach((key) => {
            if (!formData[key]) {
                newErrors[key] = `Field ${key} cannot be empty`;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const formattedData = { ...formData };

        dispatch(createBooking(formattedData as Booking));

        navigate("/bookings", { state: { created: true } });
    }

    useEffect(() => {
        dispatch(fetchRooms());
    }, [dispatch]);

    return (
        <NewBookingWrapper>
            <NewBookingTitle>New booking form</NewBookingTitle>
            <Fields>
                <FieldWrapper>
                    {errors._id &&
                        <ValidationError>
                            {errors._id}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Booking ID:</Label>
                        <FieldText name="booking_id" value={formData._id} onChange={handleChange} />
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
                        <Label>Check Out Date:</Label>
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
        </NewBookingWrapper>
    )
}