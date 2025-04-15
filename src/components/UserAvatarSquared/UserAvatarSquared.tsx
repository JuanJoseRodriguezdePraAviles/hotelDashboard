import React from "react";
import { AvatarWrapper } from "./UserAvatarSquaredStyled";

interface UserAvatarSquaredProps {
    size?: 'wide' | 'large' | 'largest';
}

export const UserAvatarSquared: React.FC<UserAvatarSquaredProps> = ({size}) => {
    return (
        <>
            <AvatarWrapper size={size}></AvatarWrapper>
        </>
    )
}