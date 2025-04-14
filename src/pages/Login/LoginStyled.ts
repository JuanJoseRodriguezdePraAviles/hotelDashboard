import styled from "styled-components";

export const LoginWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    height: 100%;
    padding-bottom: auto;
    background: var(--unnamed-color-f8f8f8) 0% 0% no-repeat padding-box;
    background: #F8F8F8 0% 0% no-repeat padding-box;
    opacity: 1;
    margin: 0;
    padding: 0;
`;

export const LoginTitle = styled.h1`
    width: 50%;
    color: #000000;
`;

export const ErrorMessage = styled.p`
    width: 50%;
    color:rgb(255, 0, 0);
`;

export const UserInput = styled.input`
    width: 10%;
    height: 2rem;
    border-radius: 10% / 40%;
    background: #f2f2f2;
    margin: 0.5rem;
    color: #000000;
`;

export const PasswordInput = styled.input.attrs(props => ({
    type: "password"
}))`
    width: 10%;
    height: 2rem;
    border-radius: 10% / 40%;
    background: #f2f2f2;
    margin: 0.5rem;
    color: #000000;
`;

export const LoginBtn = styled.button`
    margin: 1rem;
    width: 5%;
`;