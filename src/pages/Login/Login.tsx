import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ErrorMessage, LoginBtn, LoginTitle, LoginWrapper, PasswordInput, UserInput } from "./LoginStyled";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { login } from '../../redux/slices/AuthSlice';

export const Login = () => {
    const dispatch = useAppDispatch();
    const { login: contextLogin } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const email = useAppSelector((state) => state.auth.email);

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            localStorage.login = true;
            localStorage.username = username;
            localStorage.email = email? email : 'admin@gmail.com';
            contextLogin();
            dispatch(login({username: 'admin', email: 'admin@gmail.com'}));
        } else {
            setError('Wrong user or password');
        }
    }
    return (
        <LoginWrapper>
            <LoginTitle>Hotel Miranda Dashboard</LoginTitle>
            {error !==''? <ErrorMessage>{error}</ErrorMessage>:<></>}
            <UserInput value={username} cy-id="user-input"
                        onChange={(e) => setUsername(e.target.value)}/>
            <PasswordInput value={password} cy-id="password-input"
                        onChange={(e) => setPassword(e.target.value)}/>
            <LoginBtn onClick={handleLogin} cy-id="btn-login">Login</LoginBtn>
        </LoginWrapper>
    );
}