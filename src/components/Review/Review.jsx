import CustomerData from "../CustomerData/CustomerData";
import { ReviewContainer, Description } from "./ReviewStyled";

export const Review = () => {
    return (
        <>
            <ReviewContainer>
                <Description>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
                </Description>
                <CustomerData />
            </ReviewContainer>
        </>

    );
}

export default Review;