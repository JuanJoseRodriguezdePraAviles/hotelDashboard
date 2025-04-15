import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface initialStateInterface {
    isAuthenticated: boolean,
    username: string,
    email: string
}

const initialState: initialStateInterface = {
    isAuthenticated: false,
    username: '',
    email: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login: (state, action) => {
            state.isAuthenticated = true;
            state.username = action.payload.username;
            state.email = action.payload.email;
        },
        logout: (state) => {
            state.isAuthenticated = false,
            state.username = '',
            state.email = ''
        },
        updateEmail: (state, action: PayloadAction<string>) => {
            if(action?.payload) {
                state.email = action.payload;
            }
        }
    }
});

export const { login, logout, updateEmail } = authSlice.actions;
export default authSlice.reducer;