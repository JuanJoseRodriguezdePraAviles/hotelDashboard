import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RoomType } from '../../interfaces/RoomType';
import { RoomStatus } from '../../interfaces/RoomStatus';
import { Status } from '../../interfaces/Status';
import { Amenities } from '../../interfaces/Amenities';
import { createRoom, deleteRoom, fetchRooms, updateRoom } from '../thunks/RoomThunk';


export interface Room {
    _id?: string,
    room_name: string,
    room_type?: RoomType,
    room_floor?: string,
    status?: RoomStatus,
    description?: string,
    photos?: string[],
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

const roomsSlice = createSlice({
    name: "rooms",
    initialState,
    reducers: {

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
            })
            .addCase(createRoom.fulfilled, (state, action) => {
                state.rooms.push(action.payload);
            })
            .addCase(createRoom.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.error.message;
            })
            .addCase(updateRoom.fulfilled, (state, action) => {
                const index = state.rooms.findIndex(b => b._id === action.payload._id);
                if (index !== -1) {
                    state.rooms[index] = action.payload;
                }
            })
            .addCase(updateRoom.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.payload;
            })
            .addCase(deleteRoom.fulfilled, (state, action) => {
                state.rooms = state.rooms.filter(room => room._id !== action.payload);
            })
            .addCase(deleteRoom.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.payload;
            });
    }
});

export const { actions, reducer } = roomsSlice;
export default reducer;