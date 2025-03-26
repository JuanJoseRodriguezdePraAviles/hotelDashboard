import { Filter } from "../../components/Filter/Filter";
import { List } from "../../components/List/List";
import { Filters } from "../../components/List/ListStyled";
import { ConciergeListWrapper } from "./ConciergeListStyled";

export const ConciergeList = () => {
    return (
        <ConciergeListWrapper>
            <Filters>
                <Filter name="All Employee" color="#135846"></Filter>
                <Filter name="Active Employee" color="#6E6E6E"></Filter>
                <Filter name="Inactive Employee" color="#6E6E6E"></Filter>
            </Filters>
            <List type="employee"/>
        </ConciergeListWrapper>
    );
}