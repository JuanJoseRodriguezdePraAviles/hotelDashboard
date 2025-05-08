import styled from "styled-components";

export const Menu = styled.div`
    position: absolute;
    background: white;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
    border-radius: 4px;
    z-index: 10;
`;

export const MenuItem = styled.div`
    padding: 8px 12px;
    cursor: pointer;
    &:hover {
        background: #f0f0f0;
    }
`;