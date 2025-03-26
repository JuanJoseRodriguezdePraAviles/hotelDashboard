import { Filter } from "../../components/Filter/Filter";
import { List } from "../../components/List/List";
import {GuestListFilters, GuestListWrapper } from "./GuestListStyled";

export const GuestList = () => {
    return (
        <GuestListWrapper>
            <GuestListFilters>
                <Filter name="All Guest" color="#135846"></Filter>
                <Filter name="Pending" color="#6E6E6E"></Filter>
                <Filter name="Booked" color="#6E6E6E"></Filter>
                <Filter name="Cancelled" color="#6E6E6E"></Filter>
                <Filter name="Refund" color="#6E6E6E"></Filter>
            </GuestListFilters>
            <List />
        </GuestListWrapper>
    );
}