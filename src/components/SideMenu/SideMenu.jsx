import { NavBtns, PageBtn, SideMenuWrapper, SubtitleWeb, TitleWeb, WebIcon, WebIconContainer, WebTitleContainer } from "./SideMenuStyled";
import { TbLayoutDashboard } from "react-icons/tb";
import { SlKey } from "react-icons/sl";
import { PiCalendarCheckLight } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlinePuzzle } from "react-icons/hi";
import { Link } from "react-router-dom";

export const SideMenu = ({ collapsed }) => {
    return (
        <>
            <SideMenuWrapper collapsed={collapsed}>
                {!collapsed && (
                    <>
                        <WebIconContainer>
                            <WebIcon src="/src/assets/hotel.svg" />
                            {!collapsed && (
                                <WebTitleContainer>
                                    <TitleWeb>travl</TitleWeb>
                                    <SubtitleWeb>Hotel Admin Dashboard</SubtitleWeb>
                                </WebTitleContainer>
                            )}
                        </WebIconContainer>
                        <NavBtns>
                            <Link to="/">
                                <PageBtn>{<TbLayoutDashboard />} {!collapsed && "Dashboard"}</PageBtn>
                            </Link>
                            <Link to="/roomList">
                                <PageBtn>{<SlKey />}{!collapsed && "Room"}</PageBtn>
                            </Link>
                            <Link to="/bookings">
                                <PageBtn>{<PiCalendarCheckLight />}{!collapsed && "Bookings"}</PageBtn>
                            </Link>
                            <Link to="/guestList">
                                <PageBtn>{<FaRegUser />}{!collapsed && "Guest"}</PageBtn>
                            </Link>
                            <Link to="/conciergeList">
                                <PageBtn>{<HiOutlinePuzzle />}{!collapsed && "Concierge"}</PageBtn>
                            </Link>
                        </NavBtns>
                    </>)}

            </SideMenuWrapper>
        </>
    );
}