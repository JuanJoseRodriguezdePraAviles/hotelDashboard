import React from "react";
import { LuBedDouble, LuCalendarCheck } from "react-icons/lu";
import SquaredSmall from '../components/SquaredSmall';
import RectCard from '../components/RectCard';
import styled from "styled-components";
import { BsBoxArrowInRight, BsBoxArrowInLeft } from "react-icons/bs";

const DashboardWrapper = styled.div`
    display: flex;
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
            <RectCard number="8,461" description="New Booking">
                <SquaredSmall bgColor="#FFEDEC">
                    <LuBedDouble color="#E23428" size="2rem" />
                </SquaredSmall>
            </RectCard>
            <RectCard number="963" description="Scheluded Room">
                <SquaredSmall bgColor="#E23428">
                    <LuCalendarCheck color="#FFFFFF" size="2rem" />
                </SquaredSmall>
            </RectCard>
            <RectCard number="753" description="Check In">
                <SquaredSmall bgColor="#FFEDEC">
                    <BsBoxArrowInRight color="#E23428" size="2rem" />
                </SquaredSmall>
            </RectCard>
            <RectCard number="516" description="Check Out">
                <SquaredSmall bgColor="#FFEDEC">
                    <BsBoxArrowInLeft color="#E23428" size="2rem" />
                </SquaredSmall>
            </RectCard>
        </DashboardWrapper>
    );
}

export default Dashboard;