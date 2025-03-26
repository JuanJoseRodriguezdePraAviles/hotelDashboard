
import CustomerData from "../CustomerData/CustomerData";
import { ReviewContainer, Description, Subject } from "./ReviewStyled";

export const Review = ({ subject, description, client, email, phone}) => {
    return (
        <>
            <ReviewContainer>
                <Subject>{subject}</Subject>
                <Description>
                    {description}
                </Description>
                <CustomerData client={client} email={email} phone={phone} id="" />
            </ReviewContainer>
        </>

    );
}

export default Review;