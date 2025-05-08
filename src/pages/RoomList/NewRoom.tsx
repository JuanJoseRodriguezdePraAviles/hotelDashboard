import React from "react";
import { useState } from "react"
import { DateInput, FieldText, Label, NewRoomTitle, NewRoomWrapper, SubmitBtn, ValidationError } from "./NewRoomStyled";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Room } from "../../redux/slices/RoomSlice";
import { createRoom } from "../../redux/thunks/RoomThunk";
import { FieldLabelContainer, FieldOption, Fields, FieldSelect, FieldWrapper } from "../Bookings/NewBookingStyled";
import { RoomType } from "../../interfaces/RoomType";
import { RoomStatus } from "../../interfaces/RoomStatus";

export const NewRoom = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const [formData, setFormData] = useState<Room>({
        room_name: '',
        room_type: RoomType.SingleBed,
        room_floor: '',
        status: RoomStatus.Booked,
        description: '',
        photos: [],
        offer: false,
        price: 0,
        discount: 0,
        cancellation_policy: ''
    });


    const [errors, setErrors] = useState<Partial<Record<keyof Room, string>>>({});

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const newErrors: Partial<Record<keyof Room, string>> = {};

        const skipFalsyCheck: (keyof Room)[] = ["offer"];

        Object.keys(formData).forEach((key) => {
            const typedKey = key as keyof Room;
            if (!skipFalsyCheck.includes(typedKey) && !formData[typedKey]) {
                newErrors[typedKey] = `Field ${key} cannot be empty`;
            }
        });

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }
        const formattedData = { ...formData };

        dispatch(createRoom(formattedData as Room));

        navigate("/roomList", { state: { created: true } });
    }

    return (
        <NewRoomWrapper>
            <NewRoomTitle>New room</NewRoomTitle>
            <Fields>
                <FieldWrapper>
                    {errors._id &&
                        <ValidationError>
                            {errors._id}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Room ID</Label>
                        <FieldText name="room_id" value={formData._id} onChange={handleChange} />
                    </FieldLabelContainer>
                </FieldWrapper>
                <FieldWrapper>
                    {errors.room_name &&
                        <ValidationError>
                            {errors.room_name}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Room Name</Label>
                        <FieldText name="room_name" value={formData.room_name} onChange={handleChange} required />
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
                <FieldWrapper>
                    {errors.room_floor &&
                        <ValidationError>
                            {errors.room_floor}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Room Floor</Label>
                        <FieldText name="room_floor" value={formData.room_floor} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>
                <FieldWrapper>
                    {errors.status &&
                        <ValidationError>
                            {errors.status}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Status:</Label>
                        <FieldSelect name="status" value={formData.status} onChange={handleChange} required>
                            <FieldOption value={RoomStatus.Booked}>{RoomStatus.Booked}</FieldOption>
                            <FieldOption value={RoomStatus.Available}>{RoomStatus.Available}</FieldOption>
                        </FieldSelect>
                    </FieldLabelContainer>
                </FieldWrapper>
                <FieldWrapper>
                    {errors.description &&
                        <ValidationError>
                            {errors.description}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Description:</Label>
                        <FieldText name="description" value={formData.description} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>

                <FieldWrapper>
                    {errors.photos &&
                        <ValidationError>
                            {errors.photos}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Photos (comma-sepparated URLs):</Label>
                        <FieldText name="photos" value={formData.photos??[].join(',')} onChange={(e) => setFormData({ ...formData, photos: e.target.value.split(',').map(url => url.trim()) })} required />
                    </FieldLabelContainer>
                </FieldWrapper>
                <FieldWrapper>
                    {errors.price &&
                        <ValidationError>
                            {errors.price}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Price: </Label>
                        <FieldText type="number" name="price" value={formData.price} onChange={(e) => 
                            setFormData({
                                ...formData,
                                price: Number(e.target.value)
                            })
                         }
                        required />
                    </FieldLabelContainer>
                </FieldWrapper>
                <FieldWrapper>
                    {errors.discount &&
                        <ValidationError>
                            {errors.discount}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Discount: </Label>
                        <FieldText type="number" name="discount" value={formData.discount} onChange={(e) => 
                            setFormData({
                                ...formData,
                                discount: Number(e.target.value)
                            })} required />
                    </FieldLabelContainer>
                </FieldWrapper>
                <FieldWrapper>
                    {errors.cancellation_policy &&
                        <ValidationError>
                            {errors.cancellation_policy}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Cancellation Policy:</Label>
                        <FieldText name="cancellation_policy" value={formData.cancellation_policy} onChange={handleChange} required />
                    </FieldLabelContainer>
                </FieldWrapper>
            </Fields>
            <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
        </NewRoomWrapper>
    )
}