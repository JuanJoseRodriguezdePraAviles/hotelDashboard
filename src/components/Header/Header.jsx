import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaRegHeart, FaRegEnvelope } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { UserAvatarSquared } from "../UserAvatarSquared/UserAvatarSquared";
import { HeaderIconContainer, HeaderWrapper, LanguageSelector, PageTitle, SearchInput } from "./HeaderStyled";
import { IoMdLogOut } from "react-icons/io";
import { useAuth } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";

export const Header = ({ title }) => {

    const { logout } = useAuth();

    const handleLogout = () => {
        localStorage.login = false;
        localStorage.username = '';
        localStorage.email = '';
        logout();
    }

    let location = useLocation().pathname.substring(1);
    location = location.charAt(0).toUpperCase() + location.slice(1);
    if (location === '') {
        location = "Dashboard";
    }

    return (
        <>
            <HeaderWrapper>
                <HeaderIconContainer>
                    <HiOutlineBars3BottomLeft color="#000000" size="2rem" />
                </HeaderIconContainer>
                <PageTitle>{location}</PageTitle>
                <SearchInput />
                <HeaderIconContainer>
                    <FaRegHeart color="#135846" size="2rem" />
                </HeaderIconContainer>
                <HeaderIconContainer>
                    <FaRegEnvelope color="#135846" size="2rem" />
                </HeaderIconContainer>
                <HeaderIconContainer>
                    <AiOutlineBell color="#135846" size="2rem" />
                </HeaderIconContainer>
                <HeaderIconContainer>
                    <MdOutlineMessage color="#135846" size="2rem" />
                </HeaderIconContainer>
                <Link to="/profile">
                    <UserAvatarSquared />
                </Link>
                <LanguageSelector />
                <HeaderIconContainer>
                    <IoMdLogOut onClick={handleLogout} color="#135846" size="2rem" />
                </HeaderIconContainer>
            </HeaderWrapper>
        </>
    );
}