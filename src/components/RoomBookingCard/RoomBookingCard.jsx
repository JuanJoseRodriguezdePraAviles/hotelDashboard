
import SquaredCalendar from '../SquaredCalendar/SquaredCalendar';
import RoomPhoto from '../RoomPhoto/RoomPhoto';
import CircleSmall from '../CircleSmall/CircleSmall';
import { CardWrapper, DataWrapper, Days, Guest, GuestWrapper, TimeCount, Title } from './RoomBookingCardStyled';

export const RoomBookingCard = ({ title, roomNumber, guest, time, daysColor, days }) => {
    return (
        <>
            <CardWrapper>
                <RoomPhoto></RoomPhoto>
                <DataWrapper>
                    <Title>{title} {roomNumber}</Title>
                    <GuestWrapper>
                        <CircleSmall></CircleSmall>
                        <Guest>{guest}</Guest>
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