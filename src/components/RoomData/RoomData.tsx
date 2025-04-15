import React from "react";
import { UserAvatarSquared } from "../UserAvatarSquared/UserAvatarSquared";
import { DataWrapper, Identifier, RoomDataContainer, Username } from "./RoomDataStyled";
import { Room } from "../../redux/slices/RoomSlice";

export const RoomData: React.FC<Room> = ({ room_id, room_name }) => {
    return (
        <>
            <RoomDataContainer>
                <UserAvatarSquared size="wide" />
                <DataWrapper>
                <Identifier>{room_id}</Identifier>
                    <Username>{room_name}</Username>
                </DataWrapper>
            </RoomDataContainer>
        </>
    );
}