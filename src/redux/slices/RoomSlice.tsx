import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RoomType } from '../../interfaces/RoomType';
import { RoomStatus } from '../../interfaces/RoomStatus';
import { Status } from '../../interfaces/Status';
import { Amenities } from '../../interfaces/Amenities';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

interface Room {
    room_id: Number,
    room_type: RoomType,
    room_floor: String,
    status: RoomStatus,
    description: String,
    photos: String,
    offer: Boolean,
    price: Number,
    discount: Number,
    cancellation_policy: String,
    room_amenities: Amenities[]
}

interface RoomsState {
    rooms: Room[],
    status: Status,
    error: string | undefined
}

const initialState: RoomsState = {
    rooms: [],
    status: Status.Loading,
    error: ""
}

export const fetchRooms = createAsyncThunk(
    'rooms/fetchRooms',
    async () => {
        await delay(200);
        const response = await fetch("../../public/Rooms.json");
        const data = await response.json();
        return data;
    }
);

const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {
        addRoom: (state, action) => {
            state.rooms.push(action.payload)
        },
        editRoom: (state, action) => {
            const { id, updateRoom } = action.payload;
            const index = state.rooms.findIndex((room) => room.room_id === Number(id));
            
            if (index !== -1) {
                state.rooms[index] = { ...state.rooms[index], ...updateRoom };
            }
        },
        deleteRoom: (state, action) => {
            const { id } = action.payload;
            state.rooms = state.rooms.filter((room) => room.room_id !== Number(id));
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchRooms.pending, (state) => {
                state.status = Status.Loading;
            })
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.status = Status.Suceeded;
                state.rooms = action.payload;
            })
            .addCase(fetchRooms.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.error.message;
            });
    }
});

export const { addRoom, editRoom, deleteRoom } = roomsSlice.actions;
export const { actions, reducer } = roomsSlice;
export default reducer;