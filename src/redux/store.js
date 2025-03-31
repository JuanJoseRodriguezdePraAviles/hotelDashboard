import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from './slices/BookingSlice';
import authReducer from './slices/AuthSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        bookings: bookingsReducer
    }
});