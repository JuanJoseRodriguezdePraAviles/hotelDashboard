import { UserAvatarSquared } from "../../components/UserAvatarSquared/UserAvatarSquared";
import { DetailsHeader, CheckDatesContainer, DataContainer, DetailsContainer, FacilitiesContainer, FacilitiesTags, FacilityTag, GuestContainer, GuestDetailsWrapper, LabelField, NameContactContainer, RoomDescription, RoomName, RoomPhoto, RoomPhotoContainer, RoomStatusIcon, GuestName, GuestId, ContactContainer, PhoneBtn, MessageBtn, RoomPriceContainer, FacilitiesTitle, ValueField } from "./GuestDetailsStyled";
import { LuBedDouble } from "react-icons/lu";
import { GoShieldCheck } from "react-icons/go";
import { IoWifi } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

export const GuestDetails = () => {
    return (
        <GuestDetailsWrapper>
            <DetailsContainer>
                <GuestContainer>
                    <DetailsHeader>
                        <UserAvatarSquared size="largest"></UserAvatarSquared>
                        <NameContactContainer>
                            <GuestName>Roberto Mansini</GuestName>
                            <BsThreeDotsVertical color="#000000" size="1.5rem" />
                            <GuestId>ID 1234124512551</GuestId>
                            <ContactContainer>
                                <PhoneBtn><FaPhoneAlt color="#135846"/></PhoneBtn>
                                <MessageBtn>Send Message</MessageBtn>
                            </ContactContainer>
                        </NameContactContainer>
                    </DetailsHeader>
                    <CheckDatesContainer>
                        <DataContainer>
                            <LabelField>Check In</LabelField>
                            <ValueField>October 30th, 2020 | 08:23 AM</ValueField>
                        </DataContainer>
                        <DataContainer>
                            <LabelField>Checkout Out</LabelField>
                            <ValueField>November 2th, 2020</ValueField>
                        </DataContainer>
                    </CheckDatesContainer>
                    <RoomPriceContainer>
                        <DataContainer>
                            <LabelField>Room Info</LabelField>
                            <ValueField>Deluxe Z - 002424</ValueField>
                        </DataContainer>
                        <DataContainer>
                            <LabelField>Price</LabelField>
                            <ValueField>$145 /night</ValueField>
                        </DataContainer>
                    </RoomPriceContainer>
                    <RoomDescription>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</RoomDescription>
                    <FacilitiesContainer>
                        <FacilitiesTitle>Facilities</FacilitiesTitle>
                        <FacilitiesTags>
                            <FacilityTag><LuBedDouble size="1.5rem"/> 3 Bed Space</FacilityTag>
                            <FacilityTag><GoShieldCheck size="1.5rem"/> 24Hours Guard</FacilityTag>
                            <FacilityTag><IoWifi size="1.5rem"/> Free Wifi</FacilityTag>
                            <FacilityTag>2 Bathroom</FacilityTag>
                            <FacilityTag>Air Conditioner</FacilityTag>
                            <FacilityTag>Television</FacilityTag>
                        </FacilitiesTags>
                    </FacilitiesContainer>
                </GuestContainer>
                <RoomPhotoContainer>
                    <RoomPhoto>
                        <RoomName>Bed Room</RoomName>
                        <RoomDescription></RoomDescription>
                    </RoomPhoto>
                    <RoomStatusIcon></RoomStatusIcon>
                </RoomPhotoContainer>
            </DetailsContainer>
        </GuestDetailsWrapper>
    );
}