import React from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { ReviewUnit } from "../Review/ReviewUnit";
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
            dispatch(fetchReviews());
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
                        return <ReviewUnit id={review.id} customer_id={review.customer_id} customer_name={review.customer_name} subject={review.subject} comment={review.comment} date={review.date} email='' phone={review.phone} archived={review.archived}/>
                    })}
                </ReviewsContainer>
            </Reviews>
        </>
    );
}

export default LatestReview;

