import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../../components/Filter/Filter";
import LatestReview from "../../components/LatestReview/LatestReview";
import { List } from "../../components/List/List";
import { Filters, ReviewsWrapper } from "./ReviewsStyled";

export const ReviewsList = () => {
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
        <ReviewsWrapper>
            <LatestReview />
            <Filters>
                <Filter name="All Customer Reviews" color="#135846"></Filter>
                <Filter name="Published" color="#6E6E6E"></Filter>
                <Filter name="Archived" color="#6E6E6E"></Filter>
            </Filters>
            <List type="review" list={reviews}/>
        </ReviewsWrapper>
    );
}