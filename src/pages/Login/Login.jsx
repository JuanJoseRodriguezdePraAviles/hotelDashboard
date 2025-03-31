import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ErrorMessage, LoginBtn, LoginTitle, LoginWrapper, PasswordInput, UserInput } from "./LoginStyled";

export const Login = () => {
    const { login } = useAuth();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleLogin = () => {
        if (username === 'admin' && password === 'admin') {
            login();
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