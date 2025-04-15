import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Filter } from "../../components/Filter/Filter";
import { List } from "../../components/List/List";
import { Filters, RoomBtn, RoomListWrapper } from "./RoomListStyled";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteRoom, fetchRooms } from "../../redux/slices/RoomSlice";
import { Status } from "../../interfaces/Status";

export const RoomList = () => {
    const dispatch = useAppDispatch();

    const rooms = useAppSelector((state) => state.rooms.rooms);
    const status = useAppSelector((state) => state.rooms.status);
    const error = useAppSelector((state) => state.rooms.error);

    const [selectedRooms, setSelectedRooms] = useState<string[]>([]);
    const [showNotificationCreated, setShowNotificationCreated] = useState(false);
    const [showNotificationEdited, setShowNotificationEdited] = useState(false);

    useEffect(() => {
        if (status === Status.Loading) {
            dispatch(fetchRooms());
        }
    }, [dispatch, status]);

    const handleCheckboxChange = (roomId, isChecked) => {
        setSelectedRooms((prevSelected) => {
            if (isChecked) {
                return [...prevSelected, roomId];
            } else {
                return prevSelected.filter((id) => id !== roomId);
            }
        });
    }

    const handleDelete = (roomId) => {
        setSelectedRooms((prevSelected) => prevSelected.filter((id) => id !== roomId));
        dispatch(deleteRoom({ id: roomId }));
    }

    const isSingleSelection = selectedRooms.length === 1;
    
    return (
        <RoomListWrapper>
            {status === Status.Loading && <button>Loading Rooms...</button>}
            {status === Status.Failed && <button>Failed to load rooms</button>}
            <Filters>
                <Filter name="All Rooms" color="#135846"></Filter>
                <Filter name="Available Room" color="#6E6E6E"></Filter>
                <Filter name="Booked Room" color="#6E6E6E"></Filter>
            </Filters>
            <Link to="/NewRoom">
                <RoomBtn>New Room</RoomBtn>
            </Link>
            {isSingleSelection ?
                <>
                    <Link to={`/EditRoom/${selectedRooms[0]}`}>
                        <RoomBtn>Edit Room</RoomBtn>
                    </Link>
                    <RoomBtn onClick={() => handleDelete(selectedRooms[0])}>Delete Room</RoomBtn>
                </>
                :
                <>
                    <RoomBtn disabled>Edit Room</RoomBtn>
                    <RoomBtn disabled>Delete Room</RoomBtn>
                </>
            }
            <List type="room" list={rooms} fieldsName={["Room Name", "Bed Type", "Room Floor", "Facilities", "Rate", "Status"]} onCheckboxChange={handleCheckboxChange} selected={selectedRooms}/>
        </RoomListWrapper>
    );
}