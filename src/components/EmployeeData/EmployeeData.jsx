import { UserAvatarSquared } from "../UserAvatarSquared/UserAvatarSquared";
import { DataWrapper, EmployeeDataContainer, Identifier, StartDate, Username } from "./EmployeeDataStyled";

export const EmployeeData = ({name, identifier, startDate}) => {
    return (
        <>
            <EmployeeDataContainer>
                <UserAvatarSquared size="large"/>
                <DataWrapper>
                    <Username>{name}</Username>
                    <Identifier>{identifier}</Identifier>
                    <StartDate>{startDate}</StartDate>
                </DataWrapper>
            </EmployeeDataContainer>
        </>
    );
}