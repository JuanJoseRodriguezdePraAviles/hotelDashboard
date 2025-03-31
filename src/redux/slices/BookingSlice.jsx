import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchBookings = createAsyncThunk(
    'bookings/fetchBookings',
    async () => {
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
    reducers: {},
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

export const { actions, reducer } = bookingsSlice;
export default reducer;