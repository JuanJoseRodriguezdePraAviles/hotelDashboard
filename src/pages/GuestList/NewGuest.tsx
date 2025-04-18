import React from "react";
import { useState } from "react"
import { DateInput, FieldText, Label, NewGuestTitle, NewGuestWrapper, SubmitBtn, ValidationError } from "./NewGuestStyled";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addGuest } from "../../redux/slices/GuestSlice";
import { FieldLabelContainer, FieldOption, Fields, FieldSelect, FieldWrapper } from "../Bookings/NewBookingStyled";
import { BookingStatus } from "../../interfaces/BookingStatus";
import { RoomType } from "../../interfaces/RoomType";
import { RoomStatus } from "../../interfaces/RoomStatus";

export const NewGuest = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const getFormattedToday = () => {
        const today = new Date();
        const month = String(today.getMonth() + 1).padStart(2, '0');
        const day = String(today.getDate()).padStart(2, '0');
        const year = today.getFullYear();
        return `${month}/${day}/${year}`;
    }

    interface FormData {
        client_id: string,
        client_name: string,
        client_email: string,
        client_phone: string,
        check_in_date: string,
        check_out_date: string,
        special_request: string,
        room_id: string,
        room_type: RoomType,
        status: RoomStatus
    }

    const [formData, setFormData] = useState({
        client_id: '',
        client_name: '',
        client_email: '',
        client_phone: '',
        order_date: getFormattedToday(),
        check_in_date: '',
        check_out_date: '',
        special_request: '',
        room_id: '',
        room_type: RoomType.SingleBed,
        status: BookingStatus.InProgress
    });

    const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const newErrors: Partial<Record<keyof FormData, string>> = {};

        (Object.keys(formData) as (keyof FormData)[]).forEach((key) => {
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

        dispatch(addGuest(formattedData));

        navigate("/guestList", { state: { created: true } });
    }

    return (
        <NewGuestWrapper>
            <NewGuestTitle>New Guest</NewGuestTitle>
            <Fields>
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
                    {errors.client_name &&
                        <ValidationError>
                            {errors.client_name}
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
        </NewGuestWrapper>
    )
}