import styled from "styled-components";

export const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: center;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 12px;
    margin: 1rem;
    padding: 1rem;
`;

export const DataWrapper = styled.div`
    width: 25rem;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 1rem;
`;

export const GuestWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: row;
    text-align: left;
    padding-top: 1rem;
`;

export const Title = styled.p`
    width: 100%;
    height: 2.5rem;
    margin: 0;
    color: var(--unnamed-color-393939);
    text-align: left;
    font: normal normal 600 30px/46px Poppins;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
`;

export const GuestContainer = styled.p`
    width: auto;
    height: 2.5rem;
    margin: 0;
    color: var(--unnamed-color-393939);
    text-align: left;
    font: normal normal medium 14px/21px Poppins;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
    margin-right: 0.5rem;
`;

export const TimeCount = styled.p`
    width: auto;
    height: 2.5rem;
    margin: 0;
    color: var(--unnamed-color-393939);
    text-align: left;
    font: normal normal medium 14px/21px Poppins;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
`;

export const Days = styled.p`
    width: auto;
    font-size: 1.5rem;
    color: var(--unnamed-color-ffffff);
    text-align: center;
    font: normal normal medium 20px/30px Poppins;
    letter-spacing: 0px;
    color: #FFFFFF;
    opacity: 1;
    white-space: nowrap;
    padding: 1rem;
`;