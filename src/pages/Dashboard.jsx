import React from "react";
import { LuBedDouble, LuCalendarCheck } from "react-icons/lu";
import SquaredSmall from '../components/SquaredSmall';
import {RectCard} from '../components/RectCard/RectCard';
import styled from "styled-components";
import { BsBoxArrowInRight, BsBoxArrowInLeft } from "react-icons/bs";
import RoomList from '../components/RoomList';

const DashboardWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: 100%;
    height: 100%;
    background: var(--unnamed-color-f8f8f8) 0% 0% no-repeat padding-box;
    background: #F8F8F8 0% 0% no-repeat padding-box;
    opacity: 1;
`;

function Dashboard() {
    return (
        <DashboardWrapper>
            <RectCard number="8,461" description="New Booking" icon={<LuBedDouble size="2rem"/>} />
            <RectCard number="963" description="Scheluded Room" icon={<LuCalendarCheck size="2rem"/>} />
            <RectCard number="753" description="Check In" icon={<BsBoxArrowInRight size="2rem"/>} />
            <RectCard number="516" description="Check Out" icon={<BsBoxArrowInLeft size="2rem"/>} />
            <RoomList />
        </DashboardWrapper>
    );
}

export default Dashboard;