import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RoomType } from '../../interfaces/RoomType';
import { RoomStatus } from '../../interfaces/RoomStatus';
import { Status } from '../../interfaces/Status';
import { Amenities } from '../../interfaces/Amenities';


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

export const createRoom = createAsyncThunk<Room, Partial<Room>>(
    'rooms/createRoom',
    async (newRoom, { rejectWithValue }) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch("http://localhost:3001/api/v1/rooms", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newRoom)
            });

            if(!response.ok) {
                throw new Error("Failed to create room");
            }

            const data = await response.json();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateRoom = createAsyncThunk<
    Room,
    { id: string; updatedRoom: Partial<Room> },
    { rejectValue: string}
>(
    'rooms/editRoom',
    async ({ id, updatedRoom }, {rejectWithValue}) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch(`http://localhost:3001/api/v1/rooms/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedRoom)
            });

            const data = await response.json();
            return data;
        } catch(error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteRoom = createAsyncThunk<
    string,
    string,
    { rejectValue: string }
>(
    'bookings/deleteRoom',
    async (id, { rejectWithValue }) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch(`http://localhost:3001/api/v1/rooms/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if(!response.ok) {
                throw new Error('Failed to delete room');
            }
            return id;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)


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
                if(index!==-1) {
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