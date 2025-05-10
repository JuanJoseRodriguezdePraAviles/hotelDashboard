import { createAsyncThunk } from "@reduxjs/toolkit";

interface AuthData {
    username: string;
    password: string;
}

const API_URL = import.meta.env.VITE_API_URL;

export const loginThunk = createAsyncThunk(
    'auth/login',
    async ({ username, password}: AuthData, thunkAPI) => {
        try {
            const response = await fetch(`${API_URL}/api/v1/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json'},
                body: JSON.stringify({ username, password }),
                credentials: 'include'
            });

            if (!response.ok) {
                throw new Error('Login failed');
            }
            
            const data = await response.json();
            return data;
        } catch (err) {
            if(err instanceof Error) {
                return thunkAPI.rejectWithValue(err.message);
            } else {
                return thunkAPI.rejectWithValue('Unknow error');
            }
            
        }
    }
);