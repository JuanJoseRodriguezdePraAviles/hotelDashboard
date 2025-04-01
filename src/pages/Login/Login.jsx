import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ErrorMessage, LoginBtn, LoginTitle, LoginWrapper, PasswordInput, UserInput } from "./LoginStyled";
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/slices/AuthSlice';

export const Login = () => {
    const dispatch = useDispatch();
    const { login: contextLogin } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const email = useSelector((state) => state.auth.email);

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
            {error && <ErrorMessage>{error}</ErrorMessage>}
            <UserInput value={username}
                        onChange={(e) => setUsername(e.target.value)}/>
            <PasswordInput value={password}
                        onChange={(e) => setPassword(e.target.value)}/>
            <LoginBtn onClick={handleLogin}>Login</LoginBtn>
        </LoginWrapper>
    );
}