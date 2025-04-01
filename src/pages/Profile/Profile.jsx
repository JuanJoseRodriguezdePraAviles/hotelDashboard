import { Email, EmailContainer, EmailInput, ProfileTitle, ProfileWrapper, Username } from "./ProfileStyled";
import { useSelector } from "react-redux";
import { MdEdit } from "react-icons/md";
import { useState } from "react";
import { updateEmail } from "../../redux/slices/AuthSlice";
import { useDispatch } from "react-redux";


export const Profile = () => {
    const username = useSelector((state) => state.auth.username);
    const email = useSelector((state) => state.auth.email);
    const [emailInput, setEmailInput] = useState(localStorage.getItem('email') || email);
    const [isEditEmail, setIsEditEmail] = useState(false);
    const dispatch = useDispatch();

    const handleEmailChange = (e) => {
        setEmailInput(e.target.value);
    }

    const handleEmail = () => {
        if(isEditEmail){
            dispatch(updateEmail({email: emailInput}));
            localStorage.setItem("email", emailInput);
        }
        setIsEditEmail(!isEditEmail);
    }

    return (
        <ProfileWrapper>
            <ProfileTitle>User Profile</ProfileTitle>
            <Username>Username: {username ? username : localStorage.username}</Username>
            {!isEditEmail ?
                <Email>Email: {localStorage.email ? localStorage.email : email} <MdEdit onClick={handleEmail} /></Email>
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