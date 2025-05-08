import { createAsyncThunk } from "@reduxjs/toolkit";
import { Guest } from "../slices/GuestSlice";

export const fetchGuests = createAsyncThunk<Guest[]>(
    'guests/fetchGuests',
    async () => {
        const response = await fetch("../../public/Guests.json");
        const data = await response.json();
        return data;
    }
);