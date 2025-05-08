import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../redux/store";
import { ReviewUnit } from "../Review/ReviewUnit";
import { Reviews, ReviewsContainer, Title } from "./LatestReviewStyled";
import { fetchReviews } from "../../redux/thunks/ReviewThunk";
import { Status } from "../../interfaces/Status";

export const LatestReview: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();

    const reviews = useSelector((state: RootState) => state.reviews.reviews);
    const status = useSelector((state: RootState) => state.reviews.status);
    const error = useSelector((state: RootState) => state.reviews.error);

    const [reviewsList, setReviewList] = useState(reviews);

    useEffect(() => {
        if (status === Status.Loading) {
            dispatch(fetchReviews());
        }
    }, [dispatch, status]);

    useEffect(() => {
        setReviewList(reviews);
    }, [reviews]);
    return (
        <>
            <Reviews>
                <Title>
                    Latest Review by Customers
                </Title>
                <ReviewsContainer>
                    {reviewsList.filter((review) => !review.archived)
                        .slice(0,3).map((review) => {
                        return <ReviewUnit key={review._id? review._id : ''}
                        {...review}
                        onArchive={() => setReviewList((prev) =>
                            prev.map((r) => r._id === review._id ? { ...r, archived: true} : r))
                        } />
                    })}
                </ReviewsContainer>
            </Reviews>
        </>
    );
}

export default LatestReview;

