import React from 'react';
import RoomBookingCard from '../RoomBookingCard/RoomBookingCard';
import { Rooms, ViewMore } from './RoomListStyled';

export const RoomList = () => {
    return (
        <Rooms>
            <RoomBookingCard title="Queen Bed" roomNumber="A-12324" guest="James Sukardi" time="12" daysColor="#135846" days="3"></RoomBookingCard>
            <RoomBookingCard title="Deluxe Room" roomNumber="B-1324" guest="Angela Moss" time="12" daysColor="#E23428" days="16, 17, 18"></RoomBookingCard>
            <RoomBookingCard title="King Big" roomNumber="C-2445" guest="Geovanny" time="12" daysColor="#FB9F44" days="20"></RoomBookingCard>
            <ViewMore>View More</ViewMore>
        </Rooms>
    );
}

export default RoomList;