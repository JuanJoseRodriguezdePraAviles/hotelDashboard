import React from "react";
import { UserAvatarSquared } from "../UserAvatarSquared/UserAvatarSquared";
import { Email } from "./CustomerDataStyled";
import { PhoneNumber } from "./CustomerDataStyled";
import { Username } from "./CustomerDataStyled";
import { DataWrapper } from "./CustomerDataStyled";
import { CustomerDataContainer, Identifier } from "./CustomerDataStyled";
import { Guest } from "../../redux/slices/GuestSlice";

export const CustomerData: React.FC<Guest> = ({client_id, client_email, client_phone, client_name}) => {
    return (
        <>
            <CustomerDataContainer>
                <UserAvatarSquared/>
                <DataWrapper>
                    <Username>{client_name}</Username>
                    <Email>{client_email}</Email>
                    <PhoneNumber>{client_phone}</PhoneNumber>
                    <Identifier>{client_id}</Identifier>
                </DataWrapper>
            </CustomerDataContainer>
        </>
    );
}

export default CustomerData;