import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

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
    initialState: {
        rooms: [],
        status: 'idle',
        error: null
    },
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
                state.status = 'loading';
            })
            .addCase(fetchRooms.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.rooms = action.payload;
            })
            .addCase(fetchRooms.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { addRoom, editRoom, deleteRoom } = roomsSlice.actions;
export const { actions, reducer } = roomsSlice;
export default reducer;