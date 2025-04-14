import styled from "styled-components";

export const ProfileWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 85%;
    width: 100%;
    padding-bottom: auto;
    background: var(--unnamed-color-f8f8f8) 0% 0% no-repeat padding-box;
    background:rgb(255, 255, 255) 0% 0% no-repeat padding-box;
    opacity: 1;
    margin: 0;
    padding: 0;
`;

export const ProfileTitle = styled.h1`
    width: 100%;
    color: #000000;
`;

export const Username = styled.p`
    width: 50%;
    color: #000000;
`;

export const Email = styled.p`
    width: 50%;
    color: #000000;
`;

export const EmailInput = styled.input`
    width: 50%;
    color:rgb(0, 0, 0);
    background: #FFFFFF;
`;

export const EmailContainer = styled.div`
    display: flex;
    flex-direction: row;
    text-align: center;
    padding-bottom: auto;
    background: var(--unnamed-color-f8f8f8) 0% 0% no-repeat padding-box;
    background: #F8F8F8 0% 0% no-repeat padding-box;
    opacity: 1;
    margin: 0;
    padding: 0;
`;

export const ErrorMessage = styled.p`
    width: 50%;
    color:rgb(255, 0, 0);
`;