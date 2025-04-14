import { useEffect, useState } from "react"
import { FieldText, Label, EditRoomTitle, EditRoomWrapper, SubmitBtn, ValidationError } from "./EditRoomStyled";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { editRoom } from "../../redux/slices/RoomSlice";
import { FieldLabelContainer, Fields, FieldWrapper } from "../Bookings/NewBookingStyled";

export const EditRoom = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { roomId } = useParams();

    const room = useSelector((state) => state.rooms.rooms.find((room) => room.room_id === Number(roomId)));

    const [formData, setFormData] = useState({
        room_id: '',
        room_name: '',
        room_type: '',
        room_floor: '',
        status: '',
        description: '',
        photos: [],
        offer: false,
        price: 0,
        discount: 0,
        cancellation_policy: ''
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
        if (room) {
            setFormData({
                room_id: room.room_id,
                room_name: room.room_name,
                room_type: room.room_type,
                room_floor: room.room_floor,
                status: room.status,
                description: room.description,
                photos: Array.isArray(room.photos) ? room.photos : [],
                offer: room.offer,
                price: room.price,
                discount: room.discount,
                cancellation_policy: room.cancellation_policy
            });
        }
    }, [room]);

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
        dispatch(editRoom({ id: roomId, updateRoom: formData }));

        navigate("/roomList");
    }

    return (
        <EditRoomWrapper>
            <EditRoomTitle>Edit room</EditRoomTitle>
            <Fields>
                <FieldWrapper>
                    {errors.room_id &&
                        <ValidationError>
                            {errors.room_id}
                        </ValidationError>
                    }
                    <FieldLabelContainer>
                        <Label>Room ID</Label>
                        <FieldText name="room_id" value={formData.room_id} onChange={handleChange} readonly='readonly' />
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
                        <Label>Room Type</Label>
                        <FieldText name="room_type" value={formData.room_type} onChange={handleChange} required />
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
                        <FieldText name="status" value={formData.status} onChange={handleChange} required />
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
                        <FieldText name="photos" value={formData.photos.join(',')} onChange={(e) => setFormData({ ...formData, photos: e.target.value.split(',').map(url => url.trim()) })} required />
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
                        <FieldText type="number" name="price" value={formData.price} onChange={handleChange} required />
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
                        <FieldText type="number" name="discount" value={formData.discount} onChange={handleChange} required />
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