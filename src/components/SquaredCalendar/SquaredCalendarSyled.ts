import styled from "styled-components";

interface DayWrapperProps {
    $bg?: string;
}

export const DayWrapper = styled.div<DayWrapperProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 3rem;
    border-radius: 12px;
    background-color: ${(props) => props.$bg || "#C5C5C5" };
    padding:0.5rem;
    margin-left:auto;
    
`;