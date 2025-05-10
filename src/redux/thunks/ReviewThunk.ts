import { createAsyncThunk } from "@reduxjs/toolkit";
import { Review } from "../slices/ReviewSlice";

const API_URL = import.meta.env.VITE_API_URL;

export const fetchReviews = createAsyncThunk<Review[]>(
    'bookings/fetchReviews',
    async () => {
        const token = localStorage.getItem("authToken");

        const response = await fetch(`${API_URL}/api/v1/reviews`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if (!response.ok) {
            throw new Error("Failed to fetch reviews");
        }

        const data = await response.json();
        return data;
    }
);

export const updateReview = createAsyncThunk<
    Review,
    { id: string; updatedReview: Partial<Review> },
    { rejectValue: string }
>(
    'reviews/editReview',
    async ({ id, updatedReview }, { rejectWithValue }) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch(`${API_URL}/api/v1/reviews/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedReview)
            });

            const data = await response.json();
            return data;
        } catch (error: any) {
            return rejectWithValue(error.message);
        }
    }
);