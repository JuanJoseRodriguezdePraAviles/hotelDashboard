import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { ErrorMessage, LoginBtn, LoginTitle, LoginWrapper, PasswordInput, UserInput } from "./LoginStyled";
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { loginThunk } from '../../redux/thunks/LoginThunk';

export const Login = () => {
    const dispatch = useAppDispatch();
    const { login: contextLogin } = useAuth();
    const [username, setUsername] = useState("test@example.com");
    const [password, setPassword] = useState("test1234");
    const [error, setError] = useState("");

    const handleLogin = async () => {
        const resultAction = await dispatch(loginThunk({ username: username, password: password }));
        if (loginThunk.rejected.match(resultAction)) {
            setError(resultAction.payload as string || "Login failed");
        } else {
            const data = resultAction.payload as { token: string };
            localStorage.setItem("authToken", data.token);
            localStorage.setItem("login", "true");
            contextLogin(data.token, username);
        }
    }
    return (
        <LoginWrapper>
            <LoginTitle>Hotel Miranda Dashboard</LoginTitle>
            {error !== '' ? <ErrorMessage>{error}</ErrorMessage> : <></>}
            <UserInput value={username} cy-id="user-input"
                onChange={(e) => setUsername(e.target.value)} />
            <PasswordInput value={password} cy-id="password-input"
                onChange={(e) => setPassword(e.target.value)} />
            <LoginBtn onClick={handleLogin} cy-id="btn-login">Login</LoginBtn>
        </LoginWrapper>
    );
}