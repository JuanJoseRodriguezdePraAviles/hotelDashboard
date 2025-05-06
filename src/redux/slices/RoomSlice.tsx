import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RoomType } from '../../interfaces/RoomType';
import { RoomStatus } from '../../interfaces/RoomStatus';
import { Status } from '../../interfaces/Status';
import { Amenities } from '../../interfaces/Amenities';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export interface Room {
    _id: string,
    room_name: string,
    room_type?: RoomType,
    room_floor?: string,
    status?: RoomStatus,
    description?: string,
    photos?: [],
    offer?: boolean,
    price?: number,
    discount?: number,
    cancellation_policy?: string,
    room_amenities?: Amenities[]
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
        const token = localStorage.getItem("authToken");

        const response = await fetch("http://localhost:3001/api/v1/rooms", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.json();
        if(!Array.isArray(data)) {
            throw new Error("Rooms response is not an array");
        }
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
            const index = state.rooms.findIndex((room) => room._id.toString() === id);
            
            if (index !== -1) {
                state.rooms[index] = { ...state.rooms[index], ...updateRoom };
            }
        },
        deleteRoom: (state, action) => {
            const { id } = action.payload;
            state.rooms = state.rooms.filter((room) => room._id !== id);
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