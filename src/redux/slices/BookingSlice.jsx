import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchBookings = createAsyncThunk(
    'bookings/fetchBookings',
    async () => {
        await delay(200);
        const response = await fetch("../../public/Bookings.json");
        const data = await response.json();
        return data;
    }
);

const bookingsSlice = createSlice({
    name: "bookings",
    initialState: {
        bookings: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addBooking: (state, action) => {
            state.bookings.push(action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchBookings.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchBookings.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.bookings = action.payload;
            })
            .addCase(fetchBookings.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { addBooking } = bookingsSlice.actions;
export const { actions, reducer } = bookingsSlice;
export default reducer;