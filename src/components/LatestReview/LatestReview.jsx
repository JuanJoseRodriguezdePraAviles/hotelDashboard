import Review from "../Review/Review";
import { Reviews, Title } from "./LatestReviewStyled";

export const LatestReview = () => {
    return (
        <>
            <Reviews>
                <Title>
                    Latest Review by Customers
                </Title>
                <Review />
            </Reviews>
        </>

    );
}

export default LatestReview;

