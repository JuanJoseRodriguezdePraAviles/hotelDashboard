import { createSlice, createAsyncThunk, PayloadAction, isRejectedWithValue } from '@reduxjs/toolkit';
import { RoomType } from '../../interfaces/RoomType';
import { RoomStatus } from '../../interfaces/RoomStatus';
import { Amenities } from '../../interfaces/Amenities';
import { BookingStatus } from '../../interfaces/BookingStatus';
import { Status } from '../../interfaces/Status';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface Booking {
    _id: string,
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

export const fetchBookings = createAsyncThunk<Booking[]>(
    'bookings/fetchBookings',
    async () => {
        const token = localStorage.getItem("authToken");

        const response = await fetch("http://localhost:3001/api/v1/bookings", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if(!response.ok) {
            throw new Error("Failed to fetch bookings");
        }

        const data = await response.json();
        return data;
    }
);

export const createBooking = createAsyncThunk<Booking, Partial<Booking>>(
    'bookings/createBooking',
    async (newBooking, { rejectWithValue }) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch("http://localhost:3001/api/v1/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newBooking)
            });

            if(!response.ok) {
                throw new Error("Failed to create booking");
            }

            const data = await response.json();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateBooking = createAsyncThunk<
    Booking,
    { id: string; updatedBooking: Partial<Booking> },
    { rejectValue: string}
>(
    'bookings/editBooking',
    async ({ id, updatedBooking }, {rejectWithValue}) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch(`http://localhost:3001/api/v1/bookings/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedBooking)
            });

            if(!response.ok) {
                throw new Error('Failed to update booking');
            }

            const data = await response.json();
            return data;
        } catch(error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const bookingsSlice = createSlice({
    name: "bookings",
    initialState,
    reducers: {
        deleteBooking: (state, action) => {
            const { id } = action.payload;
            state.bookings = state.bookings.filter((booking) => booking._id !== id);
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
                if(index!==-1) {
                    state.bookings[index] = action.payload;
                }
            })
            .addCase(updateBooking.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.payload;
            });
    }
});

export const { deleteBooking } = bookingsSlice.actions;
export const { actions, reducer } = bookingsSlice;
export default reducer;