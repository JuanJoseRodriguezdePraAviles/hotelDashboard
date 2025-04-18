import React from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { Filter } from "../../components/Filter/Filter";
import { List } from "../../components/List/List";
import { CloseBtn, Filters, GuestBtn, GuestListWrapper, ModalContainer, ModalTextContainer, Notification } from "./GuestListStyled";
import { useEffect, useState } from "react";
import { deleteGuest, fetchGuests } from "../../redux/slices/GuestSlice";
import { Link, useLocation } from "react-router-dom";
import { Status } from "../../interfaces/Status";

export const GuestList = () => {
    const dispatch = useAppDispatch();

    const guests = useAppSelector((state) => state.guests.guests);
    const status = useAppSelector((state) => state.guests.status);
    const error = useAppSelector((state) => state.guests.error);

    const location = useLocation();
    const [showNotificationCreated, setShowNotificationCreated] = useState(false);
    const [showNotificationEdited, setShowNotificationEdited] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All Guest");

    const [selectedGuests, setSelectedGuests] = useState<string[]>([]);
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
            dispatch(fetchGuests());
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
    }, [location]);

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
            <div>
                {showNotificationCreated && (
                    <Notification>Guest Created!</Notification>
                )}
                {showNotificationEdited && (
                    <Notification>Guest Edited!</Notification>
                )}

                <div>
                    <GuestListWrapper>
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

                        <List type="guest" list={guests} fieldsName={["Guest", "Order Date", "Check In", "Check Out", "Special Request", "Room Type", "Status"]} onCheckboxChange={handleCheckboxChange} selected={selectedGuests} onShowNotes={handleShowNotes} />
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
                </div>
            </div>

        </>
    );
}