import React from "react";
import { UserAvatarSquared } from "../UserAvatarSquared/UserAvatarSquared";
import { Email } from "./CustomerDataStyled";
import { PhoneNumber } from "./CustomerDataStyled";
import { Username } from "./CustomerDataStyled";
import { DataWrapper } from "./CustomerDataStyled";
import { CustomerDataContainer, Identifier } from "./CustomerDataStyled";

export const CustomerData = ({client, email, phone, identifier}) => {
    return (
        <>
            <CustomerDataContainer>
                <UserAvatarSquared/>
                <DataWrapper>
                    <Username>{client}</Username>
                    <Email>{email}</Email>
                    <PhoneNumber>{phone}</PhoneNumber>
                    <Identifier>{identifier}</Identifier>
                </DataWrapper>
            </CustomerDataContainer>
        </>
    );
}

export default CustomerData;