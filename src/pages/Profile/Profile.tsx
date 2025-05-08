import React from "react";
import { Email, EmailContainer, EmailInput, ProfileTitle, ProfileWrapper, Username } from "./ProfileStyled";
import { useAppSelector } from "../../redux/hooks";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import { updateEmail } from "../../redux/slices/AuthSlice";
import { useAppDispatch } from "../../redux/hooks";


export const Profile = () => {
    const username = useAppSelector((state) => state.auth.username);
    const email = useAppSelector((state) => state.auth.username);
    const [emailInput, setEmailInput] = useState(localStorage.getItem('email') || email);
    const [isEditEmail, setIsEditEmail] = useState(false);
    const dispatch = useAppDispatch();

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmailInput(e.target.value);
    }

    const handleEmail = () => {
        if(isEditEmail){
            dispatch(updateEmail(emailInput));
            localStorage.setItem("email", emailInput);
        }
        setIsEditEmail(!isEditEmail);
    }

    return (
        <ProfileWrapper>
            <ProfileTitle>User Profile</ProfileTitle>
            <Username>Username: {username ? username : localStorage.username}</Username>
            {!isEditEmail ?
                <Email>Email: {localStorage.username ? localStorage.username : email} <MdEdit onClick={handleEmail} /></Email>
                :
                <EmailContainer>
                    <EmailInput value={emailInput}
                                onChange={handleEmailChange}>
                    </EmailInput>
                    <MdEdit color="#000000" onClick={handleEmail} />
                </EmailContainer>
            }
        </ProfileWrapper>
    )
}