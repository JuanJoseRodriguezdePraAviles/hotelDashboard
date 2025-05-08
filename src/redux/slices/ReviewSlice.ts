import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { Status } from '../../interfaces/Status';

interface Review {
    _id?: string,
    email: string,
    date: Date,
    customer_id: number
    customer_name: string,
    phone: string,
    subject: string,
    comment: string,
    archived: boolean
}

interface ReviewsState {
    reviews: Review[],
    status: Status,
    error: string | undefined
}

const initialState: ReviewsState = {
    reviews: [],
    status:Status.Loading,
    error: ""
}

export const fetchReviews = createAsyncThunk<Review[]>(
    'bookings/fetchReviews',
    async () => {
        const token = localStorage.getItem("authToken");

        const response = await fetch("http://localhost:3001/api/v1/reviews", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        });

        if(!response.ok) {
            throw new Error("Failed to fetch reviews");
        }

        const data = await response.json();
        return data;
    }
);

export const updateReview = createAsyncThunk<
    Review,
    { id: string; updatedReview: Partial<Review> },
    { rejectValue: string}
>(
    'reviews/editReview',
    async ({ id, updatedReview }, {rejectWithValue}) => {
        const token = localStorage.getItem("authToken");
        try {
            const response = await fetch(`http://localhost:3001/api/v1/reviews/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify(updatedReview)
            });

            const data = await response.json();
            return data;
        } catch(error: any) {
            return rejectWithValue(error.message);
        }
    }
);

const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        addReview: (state, action) => {
            state.reviews.push(action.payload)
        },
        deleteReview: (state, action) => {
            const { id } = action.payload;
            state.reviews = state.reviews.filter((review) => review._id !== id);
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.status = Status.Loading;
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.status = Status.Suceeded;
                state.reviews = action.payload;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.error.message;
            })
            .addCase(updateReview.fulfilled, (state, action) => {
                const index = state.reviews.findIndex(b => b._id === action.payload._id);
                if(index!==-1) {
                    state.reviews[index] = action.payload;
                }
            })
            .addCase(updateReview.rejected, (state, action) => {
                state.status = Status.Failed;
                state.error = action.payload;
            });
    }
});

export const { addReview, deleteReview } = reviewsSlice.actions;
export const { actions, reducer } = reviewsSlice;
export default reducer;
export type { Review }