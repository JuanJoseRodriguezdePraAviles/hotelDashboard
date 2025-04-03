import { Filter } from "../../components/Filter/Filter";
import { List } from "../../components/List/List";
import { Filters } from "../../components/List/ListStyled";
import { BookingBtn, BookingsWrapper } from "./BookingsStyled";
import { fetchBookings } from '../../redux/slices/BookingSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteBooking } from "../../redux/slices/BookingSlice";

export const Bookings = () => {
    const dispatch = useDispatch();

    const bookings = useSelector((state) => state.bookings.bookings);
    const status = useSelector((state) => state.bookings.status);
    const error = useSelector((state) => state.bookings.error);

    const [selectedBookings, setSelectedBookings] = useState([]);


    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchBookings());
        }
    }, [dispatch, status]);

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
        <BookingsWrapper>
            {status === 'loading' && <button>Loading Bookings...</button>}
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
            <List type="guest" list={bookings} onCheckboxChange={handleCheckboxChange} selected={selectedBookings}/>
        </BookingsWrapper>
    );
}