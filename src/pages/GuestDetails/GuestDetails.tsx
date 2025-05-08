import React, { useEffect } from "react";
import { UserAvatarSquared } from "../../components/UserAvatarSquared/UserAvatarSquared";
import { DetailsHeader, CheckDatesContainer, DataContainer, DetailsContainer, FacilitiesContainer, FacilitiesTags, FacilityTag, GuestContainer, GuestDetailsWrapper, LabelField, NameContactContainer, RoomDescription, RoomName, RoomPhoto, RoomPhotoContainer, RoomStatusIcon, GuestName, GuestId, ContactContainer, PhoneBtn, MessageBtn, RoomPriceContainer, FacilitiesTitle, ValueField } from "./GuestDetailsStyled";
import { LuBedDouble } from "react-icons/lu";
import { FaPhoneAlt } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { format, parse } from 'date-fns';
import { AppDispatch } from "../../redux/store";
import { useDispatch } from "react-redux";
import { Status } from "../../interfaces/Status";
import { fetchRooms } from "../../redux/slices/RoomSlice";

export const GuestDetails = () => {
    const { bookingId } = useParams();
    const booking = useAppSelector((state) => state.bookings.bookings.find((booking) => booking?._id?.toString() === bookingId));
    const dispatch = useDispatch<AppDispatch>();
    const rooms = useAppSelector((state) => state.rooms.rooms);
    const roomStatus = useAppSelector((state) => state.rooms.status);
    const room = useAppSelector((state) =>
        state.rooms.rooms.find((room) => room?._id?.toString() === booking?.room_id?.toString())
    );

    const formatDate = (rawDate: string) => {
        const parsed = parse(rawDate, 'M/d/yyyy', new Date());

        return format(parsed, "MMM do yyyy hh:mmaa");
    }

    useEffect(() => {
        if(roomStatus === Status.Loading){
            dispatch(fetchRooms());
        }
    }, [dispatch, roomStatus]);

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
                            <ValueField>{booking?.check_in_date?.toString()}</ValueField>
                        </DataContainer>
                        <DataContainer>
                            <LabelField>Checkout Out</LabelField>
                            <ValueField>{booking?.check_out_date?.toString()}</ValueField>
                        </DataContainer>
                    </CheckDatesContainer>
                    <RoomPriceContainer>
                        <DataContainer>
                            <LabelField>Room Info</LabelField>
                            <ValueField>{room?.room_name}</ValueField>
                        </DataContainer>
                        <DataContainer>
                            <LabelField>Price</LabelField>
                            <ValueField>{room?.price}$ /night</ValueField>
                        </DataContainer>
                    </RoomPriceContainer>
                    <RoomDescription>{room?.description}</RoomDescription>
                    <FacilitiesContainer>
                        <FacilitiesTitle>Facilities</FacilitiesTitle>
                        <FacilitiesTags>
                            {room?.room_amenities?.map((amenity, index) => {
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