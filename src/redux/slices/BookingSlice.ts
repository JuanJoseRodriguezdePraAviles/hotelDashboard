import { createSlice, createAsyncThunk, PayloadAction, isRejectedWithValue } from '@reduxjs/toolkit';
import { RoomType } from '../../interfaces/RoomType';
import { RoomStatus } from '../../interfaces/RoomStatus';
import { Amenities } from '../../interfaces/Amenities';
import { BookingStatus } from '../../interfaces/BookingStatus';
import { Status } from '../../interfaces/Status';
import { createBooking, deleteBooking, fetchBookings, updateBooking } from '../thunks/BookingThunk';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface Booking {
    _id?: string,
    room_id: string,
    client_id: string,
    client_name?: string,
    client_email?: string,
    client_phone?: string,
    order_date?: Date,
    check_in_date?: Date,
    check_out_date?: Date,
    status?: BookingStatus,
    special_request?: string
}

export interface BookingsState {
    bookings: Booking[],
    status: Status,
    error: string | undefined
}

const initialState: BookingsState = {
    bookings: [],
    status: Status.Loading,
    error: ""
}

const bookingsSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookings.pending, (state) => {
                state.status = Status.Loading;
            })
            .addCase(fetchBookings.fulfilled, (state, action) => {
                state.status = Status.Suceeded;
                state.bookings = action.payload;
            })
            .addCase(fetchBookings.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.error.message;
            })
            .addCase(createBooking.fulfilled, (state, action) => {
                state.bookings.push(action.payload);
            })
            .addCase(createBooking.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.error.message;
            })
            .addCase(updateBooking.fulfilled, (state, action) => {
                const index = state.bookings.findIndex(b => b._id === action.payload._id);
                if (index !== -1) {
                    state.bookings[index] = action.payload;
                }
            })
            .addCase(updateBooking.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.payload;
            })
            .addCase(deleteBooking.fulfilled, (state, action) => {
                state.bookings = state.bookings.filter(booking => booking._id !== action.payload);
            })
            .addCase(deleteBooking.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.payload;
            });
    }
});
export const { actions, reducer } = bookingsSlice;
export default reducer;