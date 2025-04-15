import React from "react";
import { UserAvatarSquared } from "../../components/UserAvatarSquared/UserAvatarSquared";
import { DetailsHeader, CheckDatesContainer, DataContainer, DetailsContainer, FacilitiesContainer, FacilitiesTags, FacilityTag, GuestContainer, GuestDetailsWrapper, LabelField, NameContactContainer, RoomDescription, RoomName, RoomPhoto, RoomPhotoContainer, RoomStatusIcon, GuestName, GuestId, ContactContainer, PhoneBtn, MessageBtn, RoomPriceContainer, FacilitiesTitle, ValueField } from "./GuestDetailsStyled";
import { LuBedDouble } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { format, parse } from 'date-fns';

export const GuestDetails = () => {
    const { bookingId } = useParams();
    const booking = useAppSelector((state) => state.bookings.bookings.find((booking) => booking.booking_id === bookingId));

    const formatDate = (rawDate) => {
        const parsed = parse(rawDate, 'M/d/yyyy', new Date());

        return format(parsed, "MMM do yyyy hh:mmaa");
    }

    return (
        <GuestDetailsWrapper>
            <DetailsContainer>
                <GuestContainer>
                    <DetailsHeader>
                        <UserAvatarSquared size="largest"></UserAvatarSquared>
                        <NameContactContainer>
                            <GuestName>{booking?.client_name}</GuestName>
                            <BsThreeDotsVertical color="#000000" size="1.5rem" />
                            <GuestId>ID {booking?.client_id}</GuestId>
                            <ContactContainer>
                                <PhoneBtn><FaPhoneAlt color="#135846" /></PhoneBtn>
                                <MessageBtn>Send Message</MessageBtn>
                            </ContactContainer>
                        </NameContactContainer>
                    </DetailsHeader>
                    <CheckDatesContainer>
                        <DataContainer>
                            <LabelField>Check In</LabelField>
                            <ValueField>{formatDate(booking?.check_in_date)}</ValueField>
                        </DataContainer>
                        <DataContainer>
                            <LabelField>Checkout Out</LabelField>
                            <ValueField>{formatDate(booking?.check_out_date)}</ValueField>
                        </DataContainer>
                    </CheckDatesContainer>
                    <RoomPriceContainer>
                        <DataContainer>
                            <LabelField>Room Info</LabelField>
                            <ValueField>{booking?.room_name}</ValueField>
                        </DataContainer>
                        <DataContainer>
                            <LabelField>Price</LabelField>
                            <ValueField>{booking?.room_price}$ /night</ValueField>
                        </DataContainer>
                    </RoomPriceContainer>
                    <RoomDescription>{booking?.room_description}</RoomDescription>
                    <FacilitiesContainer>
                        <FacilitiesTitle>Facilities</FacilitiesTitle>
                        <FacilitiesTags>
                            {booking?.room_amenities?.map((amenity, index) => {
                                if (index < 3) {
                                    return <FacilityTag><LuBedDouble size="1.5rem" />{amenity}</FacilityTag>
                                } else {
                                    return <FacilityTag>{amenity}</FacilityTag>
                                }
                            })}
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