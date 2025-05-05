import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { RoomType } from '../../interfaces/RoomType';
import { RoomStatus } from '../../interfaces/RoomStatus';
import { Amenities } from '../../interfaces/Amenities';
import { BookingStatus } from '../../interfaces/BookingStatus';
import { Status } from '../../interfaces/Status';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface Booking {
    booking_id: string,
    room_id: string,
    room_name: string,
    room_description: string,
    room_type: RoomType,
    room_price: number,
    room_status?: RoomStatus,
    room_amenities?: Amenities[],
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

export const fetchBookings = createAsyncThunk<Booking[]>(
    'bookings/fetchBookings',
    async () => {
        const response = await fetch("http://localhost:3001/api/v1/bookings", {
            method: "GET",
            credentials: "include",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!response.ok) {
            throw new Error("Failed to fetch bookings");
        }

        const data = await response.json();
        return data;
    }
);

const bookingsSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {
        addBooking: (state, action) => {
            state.bookings.push(action.payload)
        },
        editBooking: (state, action) => {
            const { id, updateBooking } = action.payload;
            const index = state.bookings.findIndex((booking) => booking.booking_id.toString() === id);
            
            if (index !== -1) {
                state.bookings[index] = { ...state.bookings[index], ...updateBooking };
            }
        },
        deleteBooking: (state, action) => {
            const { id } = action.payload;
            state.bookings = state.bookings.filter((booking) => booking.booking_id !== id);
        }
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
            });
    }
});

export const { addBooking, editBooking, deleteBooking } = bookingsSlice.actions;
export const { actions, reducer } = bookingsSlice;
export default reducer;