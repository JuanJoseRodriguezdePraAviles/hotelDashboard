import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 19.5%;
    display: flex;
    flex-direction: row;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px;
    margin: 1rem;
    padding: 1rem;

    &:hover {
        box-shadow: 0 6px 12px #d5d5d5;
        
        svg {
            color: #FFEDEC;
            background-color: #E23428;
        }

    }
    svg {
        color: #E23428;
        background-color: #FFEDEC;
        font-size: 3rem;
        padding: 1rem;
        border-radius: 1rem;
        width: 2rem;
    }
`;
export const DataWrapper = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 1rem;
`;
export const Number = styled.p`
    width: 3.5rem;
    height: 2.5rem;
    margin: 0;
    color: var(--unnamed-color-393939);
    text-align: left;
    font: normal normal 600 30px/46px Poppins;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
`;
export const NumberUnit = styled.p`
    width: 10rem;
    height: 1.1rem;
    margin: 0;
    color: var(--unnamed-color-787878);
    text-align: left;
    font: normal normal 300 14px/21px Poppins;
    letter-spacing: 0px;
    color: #787878;
`;