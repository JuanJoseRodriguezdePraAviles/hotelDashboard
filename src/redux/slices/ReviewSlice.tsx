import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import { Status } from '../../interfaces/Status';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export interface Review {
    id: Number,
    date: Date,
    customer_name: String,
    phone: String,
    subject: String,
    comment: String,
    archived: Boolean
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

export const fetchReviews = createAsyncThunk<Review[], number>(
    'reviews/fetchReviews',
    async () => {
        await delay(200);
        const response = await fetch("../../public/Reviews.json");
        const data = await response.json();
        return data;
    }
);

const reviewsSlice = createSlice({
    name: "reviews",
    initialState,
    reducers: {
        addReview: (state, action) => {
            state.reviews.push(action.payload)
        },
        editReview: (state, action) => {
            const { id, updateReview } = action.payload;
            const index = state.reviews.findIndex((review) => review.id === Number(id));
            
            if (index !== -1) {
                state.reviews[index] = { ...state.reviews[index], ...updateReview };
            }
        },
        deleteReview: (state, action) => {
            const { id } = action.payload;
            state.reviews = state.reviews.filter((review) => review.id !== Number(id));
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
            });
    }
});

export const { addReview, editReview, deleteReview } = reviewsSlice.actions;
export const { actions, reducer } = reviewsSlice;
export default reducer;