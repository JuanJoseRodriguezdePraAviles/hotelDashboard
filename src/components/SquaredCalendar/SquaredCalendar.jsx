import { DayWrapper } from "./SquaredCalendarSyled";

export const SquaredCalendar = ({bgColor, children}) => {
    return (
        <DayWrapper $bg={bgColor}>{children}</DayWrapper>
    );
}

export default SquaredCalendar;
