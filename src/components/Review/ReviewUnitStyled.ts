import styled from "styled-components";

export const ReviewContainer = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: left;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 1px solid #EBEBEB;
    border-radius: 20px;
    opacity: 1;
    padding: 1rem;
    margin:1rem;

    &:hover {
        box-shadow: 0px 16px 30px #00000014;
    }
`;

export const Subject = styled.p`
    text-align: left;
    font: normal normal normal 16px/28px Poppins;
    letter-spacing: 0px;
    color: #4E4E4E;
    opacity: 1;
`;

export const Description = styled.p`
    text-align: left;
    font: normal normal normal 16px/28px Poppins;
    letter-spacing: 0px;
    color: #4E4E4E;
    opacity: 1;
`;