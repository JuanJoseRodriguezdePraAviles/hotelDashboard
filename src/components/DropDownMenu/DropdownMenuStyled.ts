import styled from "styled-components";

export const Menu = styled.div`
    position: absolute;
    top: 60%;
    right: 0;
    background: white;
    border: 1px solid #ccc;
    box-shadow: 0px 4px 6px rgba(0,0,0,0.1);
    border-radius: 4px;
    z-index: 10;
`;

export const MenuItem = styled.p`
    cursor: pointer;
    text-align: left;
    font: normal normal 600 16px/1rem Poppins;
    letter-spacing: 0px;
    color: ${(props) => props.color || "#393939"};
    opacity: 1;
    height: auto;
    padding: 0 1rem;
`;