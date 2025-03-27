import Review from "../Review/Review";
import { Reviews, ReviewsContainer, Title } from "./LatestReviewStyled";

export const LatestReview = () => {
    return (
        <>
            <Reviews>
                <Title>
                    Latest Review by Customers
                </Title>
                <ReviewsContainer>
                    <Review subject="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" client="Kusnaidi Anderson" email="kuson@gmail.com" phone="666777999" />
                    <Review subject="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" client="Bella Saphira" email="belra@gmail.com" phone="666888999" />
                    <Review subject="Lorem ipsum" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam" client="Thomas Al-Ghazali" email="tholi@gmail.com" phone="555777999" />
                </ReviewsContainer>
            </Reviews>
        </>

    );
}

export default LatestReview;

