import { useState } from "react"
import { DateInput, FieldText, Label, NewRoomTitle, NewRoomWrapper, SubmitBtn, ValidationError } from "./NewRoomStyled";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addRoom } from "../../redux/slices/RoomSlice";

export const NewRoom = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        room_id: '',
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

        dispatch(addRoom(formData));

        navigate("/rooms");
    }

    return (
        <NewRoomWrapper>
            <NewRoomTitle>New room</NewRoomTitle>
            <Label>Room ID</Label>
            <FieldText name="room_id" value={formData.room_id} onChange={handleChange} />
            {errors.client_id &&
                <ValidationError>
                    {errors.room_id}
                </ValidationError>
            }
            <Label>Room Type</Label>
            <FieldText name="room_type" value={formData.room_type} onChange={handleChange} />
            {errors.room_type &&
                <ValidationError>
                    {errors.room_type}
                </ValidationError>
            }
            <Label>Room Floor</Label>
            <FieldText name="room_floor" value={formData.room_floor} onChange={handleChange} />
            {errors.room_floor &&
                <ValidationError>
                    {errors.room_floor}
                </ValidationError>
            }
            <Label>Status:</Label>
            <FieldText name="status" value={formData.status} onChange={handleChange} />
            {errors.status &&
                <ValidationError>
                    {errors.status}
                </ValidationError>
            }
            <Label>Description:</Label>
            <FieldText name="description" value={formData.description} onChange={handleChange} />
            {errors.description &&
                <ValidationError>
                    {errors.description}
                </ValidationError>
            }
            <Label>Price: </Label>
            <FieldText type="number" name="price" value={formData.price} onChange={handleChange} />
            {errors.price &&
                <ValidationError>
                    {errors.price}
                </ValidationError>
            }
            <Label>Discount: </Label>
            <FieldText type="number" name="discount" value={formData.discount} onChange={handleChange} />
            {errors.discount &&
                <ValidationError>
                    {errors.discount}
                </ValidationError>
            }
            <Label>Cancellation Policy:</Label>
            <FieldText name="cancellation_policy" value={formData.cancellation_policy} onChange={handleChange} />
            {errors.cancellation_policy &&
                <ValidationError>
                    {errors.cancellation_policy}
                </ValidationError>
            }
            <SubmitBtn onClick={handleSubmit}>Submit</SubmitBtn>
        </NewRoomWrapper>
    )
}