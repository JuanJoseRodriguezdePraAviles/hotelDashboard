import React from "react";
import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaRegHeart, FaRegEnvelope } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { UserAvatarSquared } from "../UserAvatarSquared/UserAvatarSquared";
import { HeaderIconContainer, HeaderWrapper, LanguageSelector, PageTitle, SearchInput } from "./HeaderStyled";
import { IoMdLogOut } from "react-icons/io";
import { useAuth } from "../../context/AuthContext";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
    title: string,
    toggleMenu: () => void
}

export const Header: React.FC<HeaderProps> = ({ title, toggleMenu }) => {

    const { logout } = useAuth();

    const handleLogout = () => {
        localStorage.removeItem("authToken");
        localStorage.removeItem("login");
        localStorage.removeItem("username");
        localStorage.removeItem("email");
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
                <HeaderIconContainer onClick={toggleMenu}>
                    <HiOutlineBars3BottomLeft color="#000000" size="2rem" />
                </HeaderIconContainer>
                <PageTitle cy-id="page-title">{location}</PageTitle>
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
                    <IoMdLogOut onClick={handleLogout} color="#135846" size="2rem" cy-id="logout-icon"/>
                </HeaderIconContainer>
            </HeaderWrapper>
        </>
    );
}