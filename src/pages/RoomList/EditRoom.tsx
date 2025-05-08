import React from "react";
import { useEffect, useState } from "react"
import { FieldText, Label, EditRoomTitle, EditRoomWrapper, SubmitBtn, ValidationError } from "./EditRoomStyled";
import { useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Room } from "../../redux/slices/RoomSlice";
import { updateRoom } from "../../redux/thunks/RoomThunk";
import { FieldLabelContainer, FieldOption, Fields, FieldSelect, FieldWrapper } from "../Bookings/NewBookingStyled";
import { RoomType } from "../../interfaces/RoomType";
import { RoomStatus } from "../../interfaces/RoomStatus";

export const EditRoom = () => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { roomId } = useParams();

    const room = useAppSelector((state) => state.rooms.rooms.find((room) => room?._id?.toString() === roomId));


    const [formData, setFormData] = useState<Room>({
        _id: '',
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

    useEffect(() => {
        if (room) {
            setFormData({
                _id: room._id,
                room_name: room.room_name,
                room_type: room.room_type ?? RoomType.SingleBed,
                room_floor: room.room_floor ?? "",
                status: room.status ?? RoomStatus.Booked,
                description: room.description ?? "",
                photos: Array.isArray(room.photos) ? room.photos : [],
                offer: room.offer ?? false,
                price: room.price ?? 0,
                discount: room.discount ?? 0,
                cancellation_policy: room.cancellation_policy ?? ""
            });
        }
    }, [room]);

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

        if (!roomId) {
            console.error("Room ID is undefined");
            return;
        }
        dispatch(updateRoom({ id: roomId, updatedRoom: formattedData }));

        navigate("/roomList");
    }

    return (
        <EditRoomWrapper>
            <EditRoomTitle>Edit room</EditRoomTitle>
            <Fields>
                <FieldWrapper>
                    {errors._id &&
                        <ValidationError>
                            {errors._id}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Room ID</Label>
                        <FieldText name="room_id" value={formData._id} onChange={handleChange} readOnly />
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
                        <FieldText name="photos" value={formData.photos?.join(',')} onChange={(e) => setFormData({ ...formData, photos: e.target.value.split(',').map(url => url.trim()) })} required />
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
                         } required />
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
        </EditRoomWrapper>
    )
}