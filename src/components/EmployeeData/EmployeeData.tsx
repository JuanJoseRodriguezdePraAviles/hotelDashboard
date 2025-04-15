import React from "react";
import { UserAvatarSquared } from "../UserAvatarSquared/UserAvatarSquared";
import { DataWrapper, EmployeeDataContainer, Identifier, StartDate, Username } from "./EmployeeDataStyled";
import { Employee } from "../../redux/slices/EmployeeSlice";

export const EmployeeData: React.FC<Employee> = ({name, id, registration_date}) => {
    return (
        <>
            <EmployeeDataContainer>
                <UserAvatarSquared size="large"/>
                <DataWrapper>
                    <Username>{name}</Username>
                    <Identifier>{id}</Identifier>
                    <StartDate>{registration_date.toDateString()}</StartDate>
                </DataWrapper>
            </EmployeeDataContainer>
        </>
    );
}