import { createAsyncThunk } from "@reduxjs/toolkit";
import { Booking } from "../slices/BookingSlice";

export const fetchBookings = createAsyncThunk<Booking[]>(
    'bookings/fetchBookings',
    async () => {
        const token = localStorage.getItem("authToken");

        const response = await fetch("http://localhost:3001/api/v1/bookings", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch bookings");
        }

        const data = await response.json();
        return data;
    }
);

export const createBooking = createAsyncThunk<Booking, Partial<Booking>>(
    'bookings/createBooking',
    async (newBooking, { rejectWithValue }) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch("http://localhost:3001/api/v1/bookings", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify(newBooking)
            });

            if (!response.ok) {
                throw new Error("Failed to create booking");
            }

            const data = await response.json();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const updateBooking = createAsyncThunk<
    Booking,
    { id: string; updatedBooking: Partial<Booking> },
    { rejectValue: string }
>(
    'bookings/editBooking',
    async ({ id, updatedBooking }, { rejectWithValue }) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch(`http://localhost:3001/api/v1/bookings/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedBooking)
            });

            const data = await response.json();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);

export const deleteBooking = createAsyncThunk<
    string,
    string,
    { rejectValue: string }
>(
    'bookings/deleteBooking',
    async (id, { rejectWithValue }) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch(`http://localhost:3001/api/v1/bookings/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error('Failed to delete booking');
            }
            return id;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);