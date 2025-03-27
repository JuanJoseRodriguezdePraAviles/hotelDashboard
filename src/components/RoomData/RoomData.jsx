import { UserAvatarSquared } from "../UserAvatarSquared/UserAvatarSquared";
import { DataWrapper, Identifier, RoomDataContainer, Username } from "./RoomDataStyled";

export const RoomData = ({ identifier, name }) => {
    return (
        <>
            <RoomDataContainer>
                <UserAvatarSquared size="wide" />
                <DataWrapper>
                <Identifier>{identifier}</Identifier>
                    <Username>{name}</Username>
                </DataWrapper>
            </RoomDataContainer>
        </>
    );
}