import { HiOutlineBars3BottomLeft } from "react-icons/hi2";
import { FaRegHeart, FaRegEnvelope } from "react-icons/fa";
import { AiOutlineBell } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";
import { UserAvatarSquared } from "../UserAvatarSquared/UserAvatarSquared";
import { HeaderIconContainer, HeaderWrapper, LanguageSelector, PageTitle, SearchInput } from "./HeaderStyled";

export const Header = ({ title }) => {
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
                
            </HeaderWrapper>
        </>
    );
}