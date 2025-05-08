import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Status } from '../../interfaces/Status';
import { fetchReviews, updateReview } from '../thunks/ReviewThunk';

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
    status: Status.Loading,
    error: ""
}

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
                if (index !== -1) {
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