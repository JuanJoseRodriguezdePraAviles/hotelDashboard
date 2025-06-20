import React from "react";
import { useEffect, useState } from "react"
import { DateInput, FieldText, Label, EditGuestTitle, EditGuestWrapper, SubmitBtn, ValidationError } from "./EditGuestStyled";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { editGuest } from "../../redux/slices/GuestSlice";
import { FieldLabelContainer, FieldOption, Fields, FieldSelect, FieldWrapper } from "../Bookings/NewBookingStyled";
import { RoomType } from "../../interfaces/RoomType";
import { RoomStatus } from "../../interfaces/RoomStatus";
import { BookingStatus } from "../../interfaces/BookingStatus";

export const EditGuest = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { guestId } = useParams();

    const guest = useAppSelector((state) => state.guests.guests.find((guest) => guest.client_id.toString() === guestId));

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
        check_in_date: '',
        check_out_date: '',
        special_request: '',
        room_id: '',
        room_type: RoomType.SingleBed,
        status: BookingStatus.InProgress
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
        if (guest) {
            setFormData({
                client_id: guest.client_id,
                client_name: guest.client_name ?? "",
                client_email: guest.client_email ?? "",
                client_phone: guest.client_phone ?? "",
                check_in_date: guest.check_in_date ? formatDate(guest.check_in_date.toString()) : '',
                check_out_date: guest.check_out_date ? formatDate(guest.check_out_date.toString()) : '',
                special_request: guest.special_request ?? "",
                room_id: guest.room_id ?? "",
                room_type: guest.room_type ?? RoomType.SingleBed,
                status: guest.status ?? BookingStatus.InProgress
            });
        }
    }, [guest])

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

        dispatch(editGuest({ id: guestId, updateGuest: formattedData }));

        navigate("/guestList", { state: { edited: true } });
    }

    return (
        <EditGuestWrapper>
            <EditGuestTitle>Edit guest</EditGuestTitle>
            <Fields>
                <FieldWrapper>
                    {errors.client_id &&
                        <ValidationError>
                            {errors.client_id}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Client ID</Label>
                        <FieldText name="client_id" value={formData.client_id} onChange={handleChange} readOnly />
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
        </EditGuestWrapper>
    )
}