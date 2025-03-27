import { Filter } from "../../components/Filter/Filter";
import LatestReview from "../../components/LatestReview/LatestReview";
import { List } from "../../components/List/List";
import { Filters } from "../../components/List/ListStyled";
import { ReviewsWrapper } from "./ReviewsStyled";

export const ReviewsList = () => {
    return (
        <ReviewsWrapper>
            <LatestReview />
            <Filters>
                <Filter name="All Customer Reviews" color="#135846"></Filter>
                <Filter name="Published" color="#6E6E6E"></Filter>
                <Filter name="Archived" color="#6E6E6E"></Filter>
            </Filters>
            <List type="review" />
        </ReviewsWrapper>
    );
}