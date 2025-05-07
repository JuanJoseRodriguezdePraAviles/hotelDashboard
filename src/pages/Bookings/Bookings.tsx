import React from "react";
import { Filter } from "../../components/Filter/Filter";
import { List } from "../../components/List/List";

import { BookingBtn, BookingsWrapper, CloseBtn, Filters, Loading, ModalContainer, ModalTextContainer, Notification } from "./BookingsStyled";
import { fetchBookings } from '../../redux/slices/BookingSlice';
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { Link } from "react-router-dom";
import { deleteBooking } from "../../redux/slices/BookingSlice";
import { useLocation } from "react-router-dom";
import { Status } from "../../interfaces/Status";
import { BookingStatus } from "../../interfaces/BookingStatus";

export const Bookings = () => {
    const dispatch = useAppDispatch();

    const bookings = useAppSelector((state) => state.bookings.bookings);
    const status = useAppSelector((state) => state.bookings.status);
    const error = useAppSelector((state) => state.bookings.error);

    const location = useLocation();
    const [showNotificationCreated, setShowNotificationCreated] = useState(false);
    const [showNotificationEdited, setShowNotificationEdited] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All Guest");

    const [selectedBookings, setSelectedBookings] = useState<string[]>([]);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleShowNotes = (notes: string) => {
        setModalContent(notes);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setModalContent('');
    }

    useEffect(() => {
        if (status === Status.Loading) {
            dispatch(fetchBookings());
        }
    }, [dispatch, status]);

    useEffect(() => {
        if (location.state?.created) {

            setShowNotificationCreated(true);
            setTimeout(() => {
                setShowNotificationCreated(false);
            }, 3000);
        }
        if (location.state?.edited) {
            setShowNotificationEdited(true);
            setTimeout(() => {
                setShowNotificationEdited(false);
            }, 3000);
        }
    }, [location])

    const handleCheckboxChange = (bookingId?: string, isChecked?: boolean) => {
        setSelectedBookings((prevSelected) => {
            if (isChecked && bookingId) {
                return [...prevSelected, bookingId];
            } else if (!isChecked && bookingId) {
                return prevSelected.filter((id) => id !== bookingId);
            }
            return prevSelected;
        });
    }

    const handleDelete = (bookingId: string) => {
        setSelectedBookings((prevSelected) => prevSelected.filter((id) => id !== bookingId));
        dispatch(deleteBooking(bookingId));
    }

    const isSingleSelection = selectedBookings.length === 1;

    return (
        <>
            <div>
                {showNotificationCreated && (
                    <Notification>Booking created!</Notification>
                )}
                {showNotificationEdited && (
                    <Notification>Booking edited!</Notification>
                )}

                <div>
                    <BookingsWrapper>
                        {status === Status.Loading && <Loading>Loading Bookings...</Loading>}
                        {status === Status.Failed && <button>Failed to load bookings</button>}
                        <Filters>
                            {[
                                { name: "All Guest", color: "#6E6E6E" },
                                { name: "Pending", color: "#6E6E6E" },
                                { name: "Booked", color: "#6E6E6E" },
                                { name: "Cancelled", color: "#6E6E6E" },
                                { name: "Refund", color: "#6E6E6E" },
                            ].map((filter) => (
                                <Filter
                                    key={filter.name}
                                    name={filter.name}
                                    color={filter.color}
                                    onClick={() => setActiveFilter(filter.name)}
                                    active={activeFilter === filter.name}
                                />
                            ))}
                        </Filters>

                        <Link to="/NewBooking">
                            <BookingBtn>New Booking</BookingBtn>
                        </Link>
                        {isSingleSelection ?
                            <>
                                <Link to={`/EditBooking/${selectedBookings[0]}`}>
                                    <BookingBtn>Edit Booking</BookingBtn>
                                </Link>
                                <BookingBtn onClick={() => handleDelete(selectedBookings[0])}>Delete Booking</BookingBtn>
                                <Link to={`/GuestDetails/${selectedBookings[0]}`}>
                                    <BookingBtn>Booking Details</BookingBtn>
                                </Link>
                            </>
                            :
                            <>
                                <BookingBtn disabled>Edit Booking</BookingBtn>
                                <BookingBtn disabled>Delete Booking</BookingBtn>
                                <BookingBtn disabled>Booking Details</BookingBtn>
                            </>
                        }
                        <List type="guest" list={bookings} fieldsName={["Guest", "Order Date", "Check In", "Check Out", "Special Request", "Room Type", "Status"]}
                            onCheckboxChange={handleCheckboxChange} selected={selectedBookings} onShowNotes={handleShowNotes} />
                    </BookingsWrapper>

                    {showModal && (
                        <ModalContainer>
                            <ModalTextContainer>
                                <h2>Special Request</h2>
                                <p>{modalContent || "No notes available"}</p>
                                <CloseBtn onClick={handleCloseModal}>Close</CloseBtn>
                            </ModalTextContainer>
                        </ModalContainer>
                    )}
                </div>
            </div>
        </>
    );
}