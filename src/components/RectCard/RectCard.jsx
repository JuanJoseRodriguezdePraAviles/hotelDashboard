import { CardWrapper, DataWrapper, Number, NumberUnit } from "./RectCardStyled";

export const RectCard = ({ number, description, icon}) => {
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