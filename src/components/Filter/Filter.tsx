import React from "react";
import { FilterContainer } from "./FilterStyled";

interface FilterProps {
    name: string;
    color: string;
    active: boolean;
    onClick: () => void;
}

export const Filter: React.FC<FilterProps> = ({name, color, active, onClick}) => {
    return (
        <FilterContainer
            color={color}
            active={active}
            onClick={onClick}
        >
                {name}
        </FilterContainer>
    );
}