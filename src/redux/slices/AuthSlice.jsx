import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
        updateEmail: (state, action) => {
            if(action?.payload?.email) {
                state.email = action.payload.email;
            }
        }
    }
});

export const { login, logout, updateEmail } = authSlice.actions;
export default authSlice.reducer;