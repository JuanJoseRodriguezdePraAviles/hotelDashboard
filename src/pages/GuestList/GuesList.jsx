import { Filter } from "../../components/Filter/Filter";
import { List } from "../../components/List/List";
import { Filters } from "../../components/List/ListStyled";
import { GuestListWrapper } from "./GuestListStyled";

export const GuestList = () => {
    return (
        <GuestListWrapper>
            <Filters>
                <Filter name="All Guest" color="#135846"></Filter>
                <Filter name="Pending" color="#6E6E6E"></Filter>
                <Filter name="Booked" color="#6E6E6E"></Filter>
                <Filter name="Cancelled" color="#6E6E6E"></Filter>
                <Filter name="Refund" color="#6E6E6E"></Filter>
            </Filters>
            <List type="guest"/>
        </GuestListWrapper>
    );
}