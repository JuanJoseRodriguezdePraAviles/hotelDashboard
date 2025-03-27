import { Filter } from "../../components/Filter/Filter";
import { List } from "../../components/List/List";
import { Filters } from "../../components/List/ListStyled";
import { RoomListWrapper } from "./RoomListStyled";

export const RoomList = () => {
    return (
        <RoomListWrapper>
            <Filters>
                <Filter name="All Rooms" color="#135846"></Filter>
                <Filter name="Available Room" color="#6E6E6E"></Filter>
                <Filter name="Booked Room" color="#6E6E6E"></Filter>
            </Filters>
            <List type="room" />
        </RoomListWrapper>
    );
}