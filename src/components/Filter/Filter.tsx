import React from "react";
import { FilterContainer } from "./FilterStyled";

interface FilterProps {
    name: string,
    color: string
}

export const Filter: React.FC<FilterProps> = ({name, color}) => {
    return (
        <FilterContainer color={color}>{name}</FilterContainer>
    );
}