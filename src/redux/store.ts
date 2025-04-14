import { configureStore } from '@reduxjs/toolkit';
import bookingsReducer from './slices/BookingSlice';
import guestsReducer from './slices/GuestSlice';
import roomsReducer from './slices/RoomSlice';
import employeesReducer from './slices/EmployeeSlice';
import authReducer from './slices/AuthSlice';
import reviewsReducer from './slices/ReviewSlice';

export const store = configureStore({
    reducer: {
        auth: authReducer,
        bookings: bookingsReducer,
        guests: guestsReducer,
        rooms: roomsReducer,
        employees: employeesReducer,
        reviews: reviewsReducer
    }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;