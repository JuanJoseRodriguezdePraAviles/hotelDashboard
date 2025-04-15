import styled from "styled-components";

interface FilterContainerProps {
    color?: string
}

export const FilterContainer = styled.div<FilterContainerProps>`
    width: 8rem;
    height: 3rem;
    display: flex;
    flex-direction: row;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #F8F8F8 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 1rem;
    color: ${(props) => props.color || '#000000'};
    border-bottom: 2px solid ${(props)=> props.color};
`;