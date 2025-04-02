import { Filter } from "../../components/Filter/Filter";
import { List } from "../../components/List/List";
import { Filters } from "../../components/List/ListStyled";
import { BookingsWrapper, NewBookingBtn } from "./BookingsStyled";
import { fetchBookings } from '../../redux/slices/BookingSlice';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export const Bookings = () => {
    const dispatch = useDispatch();

    const bookings = useSelector((state) => state.bookings.bookings);
    const status = useSelector((state) => state.bookings.status);
    const error = useSelector((state) => state.bookings.error);

    const [state, setState] = useState(status);

    
    useEffect(() => {
        setState(status);
        if (status === 'idle') {
            dispatch(fetchBookings());
        }
    }, [dispatch, status]);
    
    return (
        <BookingsWrapper>
            {state==='loading' && <button>Loading Bookings...</button>}
            {state==='failed' && <button>Failed to load bookings</button>}
            <Filters>
                <Filter name="All Guest" color="#135846"></Filter>
                <Filter name="Pending" color="#6E6E6E"></Filter>
                <Filter name="Booked" color="#6E6E6E"></Filter>
                <Filter name="Cancelled" color="#6E6E6E"></Filter>
                <Filter name="Refund" color="#6E6E6E"></Filter>
            </Filters>
            <Link to="/NewBooking">
                <NewBookingBtn>New Booking</NewBookingBtn>
            </Link>
            <List type="guest" list={bookings}/>
        </BookingsWrapper>
    );
}