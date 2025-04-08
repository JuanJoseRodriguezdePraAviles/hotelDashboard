import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));


export const fetchReviews = createAsyncThunk(
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
    initialState: {
        reviews: [],
        status: 'idle',
        error: null
    },
    reducers: {
        addReview: (state, action) => {
            state.reviews.push(action.payload)
        },
        editReview: (state, action) => {
            const { id, updateReview } = action.payload;
            const index = state.reviews.findIndex((review) => review.review_id === Number(id));
            
            if (index !== -1) {
                state.reviews[index] = { ...state.reviews[index], ...updateReview };
            }
        },
        deleteReview: (state, action) => {
            const { id } = action.payload;
            state.reviews = state.reviews.filter((review) => review.review_id !== Number(id));
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchReviews.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchReviews.fulfilled, (state, action) => {
                state.status = 'succeeded';
                state.reviews = action.payload;
            })
            .addCase(fetchReviews.rejected, (state, action) => {
                state.status = 'failed';
                state.error = action.error.message;
            });
    }
});

export const { addReview, editReview, deleteReview } = reviewsSlice.actions;
export const { actions, reducer } = reviewsSlice;
export default reducer;