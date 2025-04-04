import { useDispatch, useSelector } from "react-redux";
import { Filter } from "../../components/Filter/Filter";
import { List } from "../../components/List/List";
import { CloseBtn, Filters, GuestBtn, GuestListWrapper, ModalContainer, ModalTextContainer } from "./GuestListStyled";
import { useEffect, useState } from "react";
import { deleteGuest, fetchGuests } from "../../redux/slices/GuestSlice";
import { Link } from "react-router-dom";

export const GuestList = () => {
    const dispatch = useDispatch();

    const guests = useSelector((state) => state.guests.guests);
    const status = useSelector((state) => state.guests.status);
    const error = useSelector((state) => state.guests.error);

    const [selectedGuests, setSelectedGuests] = useState([]);
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
            dispatch(fetchGuests());
        }
    }, [dispatch, status]);

    const handleCheckboxChange = (guestId, isChecked) => {
        setSelectedGuests((prevSelected) => {
            if (isChecked) {
                return [...prevSelected, guestId];
            } else {
                return prevSelected.filter((id) => id !== guestId);
            }
        });
    }

    const handleDelete = (guestId) => {
        setSelectedGuests((prevSelected) => prevSelected.filter((id) => id !== guestId));
        dispatch(deleteGuest({ id: guestId }));
    }

    const isSingleSelection = selectedGuests.length === 1;

    return (
        <>
            <GuestListWrapper>
                <Filters>
                    <Filter name="All Guest" color="#135846"></Filter>
                    <Filter name="Pending" color="#6E6E6E"></Filter>
                    <Filter name="Booked" color="#6E6E6E"></Filter>
                    <Filter name="Cancelled" color="#6E6E6E"></Filter>
                    <Filter name="Refund" color="#6E6E6E"></Filter>
                </Filters>
                <Link to="/NewGuest">
                    <GuestBtn>New Guest</GuestBtn>
                </Link>
                {isSingleSelection ?
                    <>
                        <Link to={`/EditGuest/${selectedGuests[0]}`}>
                            <GuestBtn>Edit Guest</GuestBtn>
                        </Link>
                        <GuestBtn onClick={() => handleDelete(selectedGuests[0])}>Delete Guest</GuestBtn>
                    </>
                    :
                    <>
                        <GuestBtn disabled>Edit Guest</GuestBtn>
                        <GuestBtn disabled>Delete Guest</GuestBtn>
                    </>
                }

                <List type="guest" list={guests} onCheckboxChange={handleCheckboxChange} selected={selectedGuests} onShowNotes={handleShowNotes}/>
            </GuestListWrapper>
            {
                showModal && (
                    <ModalContainer>
                        <ModalTextContainer>
                            <h2>Special Request</h2>
                            <p>{modalContent || "No notes available"}</p>
                            <CloseBtn onClick={handleCloseModal}>Close</CloseBtn>
                        </ModalTextContainer>
                    </ModalContainer>
                )
            }
        </>
    );
}