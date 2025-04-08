import { useDispatch, useSelector } from "react-redux";
import Review from "../Review/Review";
import { Reviews, ReviewsContainer, Title } from "./LatestReviewStyled";
import { useEffect } from "react";
import { fetchReviews } from "../../redux/slices/ReviewSlice";

export const LatestReview = () => {
    const dispatch = useDispatch();

    const reviews = useSelector((state) => state.reviews.reviews);
    const status = useSelector((state) => state.reviews.status);
    const error = useSelector((state) => state.reviews.error);

    useEffect(() => {
            if (status === 'idle') {
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
                        return <Review subject={review.subject} description={review.comment} client={review.customer_name} email={review.email} phone={review.phone} />
                    })}
                </ReviewsContainer>
            </Reviews>
        </>
    );
}

export default LatestReview;

