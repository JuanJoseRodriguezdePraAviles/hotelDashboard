import { NavBtns, PageBtn, PageText, RedIndicator, SideMenuWrapper, SubtitleWeb, TitleWeb, WebIcon, WebIconContainer, WebTitleContainer } from "./SideMenuStyled";
import { TbLayoutDashboard } from "react-icons/tb";
import { SlKey } from "react-icons/sl";
import { PiCalendarCheckLight } from "react-icons/pi";
import { FaRegUser } from "react-icons/fa";
import { HiOutlinePuzzle } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";

export const SideMenu = ({ collapsed }) => {
    const location = useLocation().pathname;

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
                                <PageBtn active={location === "/"}>{location === "/" && <RedIndicator/>}{<TbLayoutDashboard size={location === "/"? "2rem":"1.5rem"}/>} <PageText>{!collapsed && "Dashboard"}</PageText></PageBtn>
                            </Link>
                            <Link to="/roomList">
                                <PageBtn active={location === "/roomList"}>{location === "/roomList" && <RedIndicator/>}{<SlKey size={location === "/roomList"? "2rem":"1.5rem"}/>}<PageText>{!collapsed && "Room"}</PageText></PageBtn>
                            </Link>
                            <Link to="/bookings">
                                <PageBtn active={location === "/bookings"}>{location === "/bookings" && <RedIndicator/>}{<PiCalendarCheckLight size={location === "/bookings"? "2rem":"1.5rem"}/>}<PageText>{!collapsed && "Bookings"}</PageText></PageBtn>
                            </Link>
                            <Link to="/guestList">
                                <PageBtn active={location === "/guestList"}>{location === "/guestList" && <RedIndicator/>}{<FaRegUser size={location === "/guestList"? "2rem":"1.5rem"}/>}<PageText>{!collapsed && "Guest"}</PageText></PageBtn>
                            </Link>
                            <Link to="/conciergeList">
                                <PageBtn active={location === "/conciergeList"}>{location === "/conciergeList" && <RedIndicator/>}{<HiOutlinePuzzle size={location === "/conciergeList"? "2rem":"1.5rem"}/>}<PageText>{!collapsed && "Concierge"}</PageText></PageBtn>
                            </Link>
                        </NavBtns>
                    </>)}

            </SideMenuWrapper>
        </>
    );
}