
import React from "react";
import CustomerData from "../CustomerData/CustomerData";
import { ReviewContainer, Description, Subject } from "./ReviewUnitStyled";
import { Review } from "../../redux/slices/ReviewSlice";


export const ReviewUnit: React.FC<Review> = ({ email, subject, comment, customer_name, phone, customer_id}) => {
    return (
        <>
            <ReviewContainer>
                <Subject>{subject}</Subject>
                <Description>
                    {comment}
                </Description>
                <CustomerData client_name={customer_name} client_email={email} client_phone={phone} client_id={customer_id.toString()}  />
            </ReviewContainer>
        </>

    );
}

export default Review;