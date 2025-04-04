import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from './slices/BookingSlice';
import guestsReducer from './slices/GuestSlice';
import roomsReducer from './slices/RoomSlice';
import employeesReducer from './slices/EmployeeSlice';
import authReducer from './slices/AuthSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        bookings: bookingsReducer,
        guests: guestsReducer,
        rooms: roomsReducer,
        employees: employeesReducer
    }
});