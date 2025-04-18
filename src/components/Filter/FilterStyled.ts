import styled from "styled-components";

interface FilterContainerProps {
    color?: string
    active?: boolean;
}

export const FilterContainer = styled.div<FilterContainerProps>`
    width: 8rem;
    height: 3rem;
    display: flex;
    flex-direction: row;
    background: ${({ active }) => (active? '#FFFFFF' : '#F8F8F8')};
    opacity: 1;
    padding: 1rem;
    color: ${({ active }) => (active? '#135846' : '#000000')};
    border-bottom: 2px solid ${({ active }) => (active? '#135846' : '#000000')};
    cursor: pointer;
    align-items: center;
    justify-content: center;
`;