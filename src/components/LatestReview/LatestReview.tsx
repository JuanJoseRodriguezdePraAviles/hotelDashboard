import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import Review from "../Review/Review";
import { Reviews, ReviewsContainer, Title } from "./LatestReviewStyled";
import { useEffect } from "react";
import { fetchReviews } from "../../redux/slices/ReviewSlice";
import { Status } from "../../interfaces/Status";

export const LatestReview: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const reviews = useSelector((state: RootState) => state.reviews.reviews);
    const status = useSelector((state: RootState) => state.reviews.status);
    const error = useSelector((state: RootState) => state.reviews.error);

    useEffect(() => {
        if (status === Status.Loading) {
            dispatch(fetchReviews(0));
        }
    }, [dispatch, status]);
    return (
        <>
            <Reviews>
                <Title>
                    Latest Review by Customers
                </Title>
                <ReviewsContainer>
                    {reviews.map((review) => {
                        return <Review subject={review.subject} description={review.comment} client={review.customer_name} email='' phone={review.phone} />
                    })}
                </ReviewsContainer>
            </Reviews>
        </>
    );
}

export default LatestReview;

