import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchGuests = createAsyncThunk(
    'guests/fetchGuests',
    async () => {
        await delay(200);
        const response = await fetch("../../public/Guests.json");
        const data = await response.json();
        return data;
    }
);

const guestsSlice = createSlice({
    name: "guests",
    initialState: {
        guests: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addGuest: (state, action) => {
            state.guests.push(action.payload)
        },
        editGuest: (state, action) => {
            const { id, updateGuest } = action.payload;
            const index = state.guests.findIndex((guest) => guest.client_id === Number(id));
            
            if (index !== -1) {
                state.guests[index] = { ...state.guests[index], ...updateGuest };
            }
        },
        deleteGuest: (state, action) => {
            const { id } = action.payload;
            state.guests = state.guests.filter((guest) => guest.client_id !== Number(id));
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGuests.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchGuests.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.guests = action.payload;
            })
            .addCase(fetchGuests.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { addGuest, editGuest, deleteGuest } = guestsSlice.actions;
export const { actions, reducer } = guestsSlice;
export default reducer;