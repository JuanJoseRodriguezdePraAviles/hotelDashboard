import { Filter } from "../../components/Filter/Filter";
import { List } from "../../components/List/List";
import { Filters } from "../../components/List/ListStyled";
import { BookingsWrapper } from "./BookingsStyled";
import { fetchBookings } from '../../redux/slices/BookingSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";

export const Bookings = () => {
    const dispatch = useDispatch();

    const bookings = useSelector((state) => state.bookings.bookings);
    const status = useSelector((state) => state.bookings.status);
    const error = useSelector((state) => state.bookings.error);
    
    useEffect(() => {
        if (status === 'idle') {
            dispatch(fetchBookings());
        }
    }, [dispatch, status]);

    if(status === 'loading'){

    }

    if(status === 'failed') {
        
    }
    
    return (
        <BookingsWrapper>
            <Filters>
                <Filter name="All Guest" color="#135846"></Filter>
                <Filter name="Pending" color="#6E6E6E"></Filter>
                <Filter name="Booked" color="#6E6E6E"></Filter>
                <Filter name="Cancelled" color="#6E6E6E"></Filter>
                <Filter name="Refund" color="#6E6E6E"></Filter>
            </Filters>
            <List type="guest" list={bookings}/>
        </BookingsWrapper>
    );
}