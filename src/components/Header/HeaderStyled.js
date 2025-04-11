import styled from "styled-components";

export const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    background: #FFFFFF;
    box-shadow: 0px 3px 10px #00000005;
    opacity: 1;
    padding: 1rem;
    margin: 0;
    align-items: center;
    justify-content: space-between;
`;

export const PageTitle = styled.p`
    color: var(--unnamed-color-262626);
    text-align: left;
    font: normal normal 600 28px/42px Poppins;
    letter-spacing: 0px;
    color: #262626;
    opacity: 1;
`;

export const SearchInput = styled.input`
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    margin-left: auto;
    background: #FCFCFC;
    color: #000000;
    &:focus {
        outline: none;
    }
`;

export const LanguageSelector = styled.select`
    
`;

export const HeaderIconContainer = styled.div`
    padding: 1rem;
`;