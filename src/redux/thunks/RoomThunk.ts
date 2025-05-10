import { createAsyncThunk } from "@reduxjs/toolkit";
import { Room } from "../slices/RoomSlice";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchRooms = createAsyncThunk(
    'rooms/fetchRooms',
    async () => {
        const token = localStorage.getItem("authToken");

        const response = await fetch(`${API_URL}/api/v1/rooms`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });
        const data = await response.json();
        if (!Array.isArray(data)) {
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
            const response = await fetch(`${API_URL}/api/v1/rooms`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newRoom)
            });

            if (!response.ok) {
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
    { rejectValue: string }
>(
    'rooms/editRoom',
    async ({ id, updatedRoom }, { rejectWithValue }) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch(`${API_URL}/api/v1/rooms/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedRoom)
            });

            const data = await response.json();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteRoom = createAsyncThunk<
    string,
    string,
    { rejectValue: string }
>(
    'rooms/deleteRoom',
    async (id, { rejectWithValue }) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch(`${API_URL}/api/v1/rooms/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to delete room');
            }
            return id;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
)
