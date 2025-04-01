import React from "react";
import { LuBedDouble, LuCalendarCheck } from "react-icons/lu";
import { RectCard } from '../../components/RectCard/RectCard';
import { BsBoxArrowInRight, BsBoxArrowInLeft } from "react-icons/bs";
import LatestReview from '../../components/LatestReview/LatestReview';
import { DashboardWrapper } from "./DashboardStyled";

export const Dashboard = () => {
    return (
        <DashboardWrapper>
            <RectCard number="8,461" description="New Booking" icon={<LuBedDouble size="2rem" />} />
            <RectCard number="963" description="Scheluded Room" icon={<LuCalendarCheck size="2rem" />} />
            <RectCard number="753" description="Check In" icon={<BsBoxArrowInRight size="2rem" />} />
            <RectCard number="516" description="Check Out" icon={<BsBoxArrowInLeft size="2rem" />} />
            <LatestReview />
        </DashboardWrapper>
    );
}

export default Dashboard;