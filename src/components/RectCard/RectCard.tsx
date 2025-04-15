import React, { ReactNode } from "react";
import { CardWrapper, DataWrapper, Number, NumberUnit } from "./RectCardStyled";

interface RectCardProps {
    number: string,
    description: string,
    icon: ReactNode
}

export const RectCard: React.FC<RectCardProps> = ({ number, description, icon}) => {
    return (
        <>
            <CardWrapper>
                {icon}
                <DataWrapper>
                    <Number>{number}</Number>
                    <NumberUnit>{description}</NumberUnit>
                </DataWrapper>
            </CardWrapper>
        </>
    );
}