import { Filter } from "../../components/Filter/Filter";
import { List } from "../../components/List/List";

import { BookingBtn, BookingsWrapper, CloseBtn, Filters, Loading, ModalContainer, ModalTextContainer, Notification } from "./BookingsStyled";
import { fetchBookings } from '../../redux/slices/BookingSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBooking } from "../../redux/slices/BookingSlice";
import { useLocation } from "react-router-dom";

export const Bookings = () => {
    const dispatch = useDispatch();

    const bookings = useSelector((state) => state.bookings.bookings);
    const status = useSelector((state) => state.bookings.status);
    const error = useSelector((state) => state.bookings.error);

    const location = useLocation();
    const [showNotificationCreated, setShowNotificationCreated] = useState(false);
    const [showNotificationEdited, setShowNotificationEdited] = useState(false);

    const [selectedBookings, setSelectedBookings] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const handleShowNotes = (notes) => {
        setModalContent(notes);
        setShowModal(true);
    }

    const handleCloseModal = () => {
        setShowModal(false);
        setModalContent('');
    }

    useEffect(() => {
        if (status === 'idle') {
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

    const handleCheckboxChange = (bookingId, isChecked) => {
        setSelectedBookings((prevSelected) => {
            if (isChecked) {
                return [...prevSelected, bookingId];
            } else {
                return prevSelected.filter((id) => id !== bookingId);
            }
        });
    }

    const handleDelete = (bookingId) => {
        setSelectedBookings((prevSelected) => prevSelected.filter((id) => id !== bookingId));
        dispatch(deleteBooking({ id: bookingId }));


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
                        {status === 'loading' && <Loading>Loading Bookings...</Loading>}
                        {status === 'failed' && <button>Failed to load bookings</button>}
                        <Filters>
                            <Filter name="All Guest" color="#135846"></Filter>
                            <Filter name="Pending" color="#6E6E6E"></Filter>
                            <Filter name="Booked" color="#6E6E6E"></Filter>
                            <Filter name="Cancelled" color="#6E6E6E"></Filter>
                            <Filter name="Refund" color="#6E6E6E"></Filter>
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
                        <List type="guest" list={bookings} fieldsName={["Guest", "Order Date", "Check In", "Check Out", "Special Request", "Room Type", "Status"]} onCheckboxChange={handleCheckboxChange} selected={selectedBookings} onShowNotes={handleShowNotes} />
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