import styled from "styled-components";
import RoomBookingCard from './RoomBookingCard';

const Rooms = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px;
    margin: 1rem;
    padding: 1rem;
`;

const ViewMore = styled.p`
    font-size: 1.5rem;
    width: 100%;
    height: 2.5rem;
    margin: 0;
    color: var(--unnamed-color-135846);
    text-align: center;
    font: normal normal medium 16px/25px Poppins;
    letter-spacing: 0px;
    color: #135846;
    opacity: 1;
`;

function RoomList() {
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