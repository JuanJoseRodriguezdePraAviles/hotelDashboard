import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Status } from '../../interfaces/Status';
import { BookingStatus } from '../../interfaces/BookingStatus';
import { RoomType } from '../../interfaces/RoomType';
import { RoomStatus } from '../../interfaces/RoomStatus';
import { Amenities } from '../../interfaces/Amenities';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export interface Guest {
    booking_id?: string,
    room_id?: string,
    room_name?: string,
    room_description?: string,
    room_type?: RoomType,
    room_price?: string,
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

interface GuestsState {
    guests: Guest[],
    status: Status,
    error: string | undefined
}

const initialState: GuestsState = {
    guests: [],
    status: Status.Loading,
    error: ""
}

export const fetchGuests = createAsyncThunk<Guest[]>(
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
    initialState,
    reducers: {
        addGuest: (state, action) => {
            state.guests.push(action.payload)
        },
        editGuest: (state, action) => {
            const { id, updateGuest } = action.payload;
            const index = state.guests.findIndex((guest) => guest.client_id === id);

            if (index !== -1) {
                state.guests[index] = { ...state.guests[index], ...updateGuest };
            }
        },
        deleteGuest: (state, action) => {
            const { id } = action.payload;
            state.guests = state.guests.filter((guest) => guest.client_id !== id);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchGuests.pending, (state) => {
                state.status = Status.Loading;
            })
            .addCase(fetchGuests.fulfilled, (state, action) => {
                state.status = Status.Suceeded;
                state.guests = action.payload;
            })
            .addCase(fetchGuests.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.error.message;
            });
    }
});

export const { addGuest, editGuest, deleteGuest } = guestsSlice.actions;
export const { actions, reducer } = guestsSlice;
export default reducer;