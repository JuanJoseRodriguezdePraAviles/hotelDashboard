import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaRegHeart, FaRegEnvelope } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { UserAvatarSquared } from "../UserAvatarSquared/UserAvatarSquared";
import { HeaderIconContainer, HeaderWrapper, LanguageSelector, PageTitle, SearchInput } from "./HeaderStyled";
import { IoMdLogOut } from "react-icons/io";
import { useAuth } from "../../context/AuthContext";

export const Header = ({ title }) => {

    const { logout } = useAuth();

    const handleLogout = () => {
        localStorage.login = false;
        logout();
    }

    return (
        <>
            <HeaderWrapper>
                <HeaderIconContainer>
                    <HiOutlineBars3BottomLeft color="#000000" size="2rem" />
                </HeaderIconContainer>
                <PageTitle>{title}</PageTitle>
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
                <UserAvatarSquared />
                <LanguageSelector />
                <HeaderIconContainer>
                    <IoMdLogOut onClick={handleLogout} color="#135846" size="2rem"/>
                </HeaderIconContainer>
            </HeaderWrapper>
        </>
    );
}