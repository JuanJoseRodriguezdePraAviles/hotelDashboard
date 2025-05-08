import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loginThunk } from '../thunks/LoginThunk';
import { buildErrorMessage } from 'vite';

export interface initialStateInterface {
    isAuthenticated: boolean,
    username: string,
    error?: string
}

const initialState: initialStateInterface = {
    isAuthenticated: false,
    username: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        logout: (state) => {
            state.isAuthenticated = false,
                state.username = ''
        },
        updateEmail: (state, action: PayloadAction<string>) => {
            if (action?.payload) {
                state.username = action.payload;
            }
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(loginThunk.fulfilled, (state, action) => {
                state.isAuthenticated = true;
                state.username = action.payload.username;
                state.error = undefined;
            })
            .addCase(loginThunk.rejected, (state, action) => {
                state.error = action.payload as string;
            });
    }
});

export const { logout, updateEmail } = authSlice.actions;
export default authSlice.reducer;