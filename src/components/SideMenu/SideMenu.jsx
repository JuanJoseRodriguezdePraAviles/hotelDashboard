import { NavBtns, PageBtn, SideMenuWrapper, SubtitleWeb, TitleWeb, WebIcon, WebIconContainer, WebTitleContainer } from "./SideMenuStyled";
import { TbLayoutDashboard } from "react-icons/tb";
import { SlKey } from "react-icons/sl";
import { PiCalendarCheckLight } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlinePuzzle } from "react-icons/hi";
import { Link } from "react-router-dom";

export const SideMenu = () => {
    return (
        <>
            <SideMenuWrapper>
                <WebIconContainer>
                    <WebIcon src="/src/assets/hotel.svg" />
                    <WebTitleContainer>
                        <TitleWeb>travl</TitleWeb>
                        <SubtitleWeb>Hotel Admin Dashboard</SubtitleWeb>
                    </WebTitleContainer>
                </WebIconContainer>
                <NavBtns>
                    <Link to="/">
                        <PageBtn><TbLayoutDashboard /> Dashboard</PageBtn>
                    </Link>
                    <Link to="/roomList">
                        <PageBtn><SlKey />Room</PageBtn>
                    </Link>
                    <Link to="/bookings">
                        <PageBtn><PiCalendarCheckLight />Bookings</PageBtn>
                    </Link>
                    <Link to="/guestList">
                        <PageBtn><FaRegUser />Guest</PageBtn>
                    </Link>
                    <Link to="/reviewsList">
                        <PageBtn><HiOutlinePuzzle />Concierge</PageBtn>
                    </Link>
                </NavBtns>
            </SideMenuWrapper>
        </>
    );
}