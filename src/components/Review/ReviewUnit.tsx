
import React from "react";
import CustomerData from "../CustomerData/CustomerData";
import { ReviewContainer, Description, Subject } from "./ReviewUnitStyled";
import { Review } from "../../redux/slices/ReviewSlice";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface ReviewUnitProps extends Review {
    onArchive?: () => void;
}

export const ReviewUnit: React.FC<ReviewUnitProps> = ({ email, subject, comment, customer_name, phone, customer_id, onArchive}) => {
    return (
        <>
            <ReviewContainer>
                <Subject>{subject}</Subject>
                <Description>
                    {comment}
                </Description>
                <CustomerData client_name={customer_name} client_email={email} client_phone={phone} client_id={customer_id.toString()}  />
                <IoIosCloseCircleOutline color="red" size="2rem" onClick={onArchive} style={{ cursor: "pointer" }}/>
            </ReviewContainer>
        </>
    );
}

export default ReviewUnit;