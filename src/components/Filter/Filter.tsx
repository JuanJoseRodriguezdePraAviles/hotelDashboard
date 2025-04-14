import React from "react";
import { FilterContainer } from "./FilterStyled";

export const Filter = ({name, color}) => {
    return (
        <FilterContainer color={color}>{name}</FilterContainer>
    );
}