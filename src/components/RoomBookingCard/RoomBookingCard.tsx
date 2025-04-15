
import React from 'react';
import SquaredCalendar from '../SquaredCalendar/SquaredCalendar';
import RoomPhoto from '../RoomPhoto/RoomPhoto';
import CircleSmall from '../CircleSmall/CircleSmall';
import { CardWrapper, DataWrapper, Days, GuestContainer, GuestWrapper, TimeCount, Title } from './RoomBookingCardStyled';
import { Guest } from '../../redux/slices/GuestSlice';

interface RoomBookingCardProps {
    title: string,
    roomNumber: string,
    guest: string,
    time: string,
    daysColor: string,
    days: string

}

export const RoomBookingCard: React.FC<RoomBookingCardProps> = ({ title, roomNumber, guest, time, daysColor, days }) => {
    return (
        <>
            <CardWrapper>
                <RoomPhoto></RoomPhoto>
                <DataWrapper>
                    <Title>{title} {roomNumber}</Title>
                    <GuestWrapper>
                        <CircleSmall></CircleSmall>
                        <GuestContainer>{guest}</GuestContainer>
                        <TimeCount>{time}min ago</TimeCount>
                    </GuestWrapper>
                </DataWrapper>
                <SquaredCalendar bgColor={daysColor}>
                    <Days>
                        {days}
                    </Days>
                </SquaredCalendar>
            </CardWrapper>
        </>
    );
}

export default RoomBookingCard;