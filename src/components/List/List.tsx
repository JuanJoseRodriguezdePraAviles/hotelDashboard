import React from "react";
import CustomerData from "../CustomerData/CustomerData";
import { EmployeeData } from "../EmployeeData/EmployeeData";
import { RoomData } from "../RoomData/RoomData";
import { Checkbox, Header, FieldName, Table, FieldValue, FieldTextContainer, FieldText, RoomState, Stars, ViewNotesBtn, SpecialRequestContainer } from "./ListStyled";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { format, parse } from 'date-fns';
import { Guest } from "../../redux/slices/GuestSlice";
import { Employee } from "../../redux/slices/EmployeeSlice";
import { Room } from "../../redux/slices/RoomSlice";
import { Booking } from "../../redux/slices/BookingSlice";

type Item = Guest | Employee | Room | Booking;

type ListType = "guest" | "employee" | "room";

interface ListProps {
    type: ListType;
    list: Item[];
    fieldsName: string[];
    onCheckboxChange?: (id?: string, checked?: boolean) => void;
    selected: string[];
    onShowNotes?: (notes: string) => void;
}

export const List: React.FC<ListProps> = ({ type, list, fieldsName, onCheckboxChange, selected, onShowNotes }) => {

    const formatDate = (rawDate: string) => {
        const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        if (!dateRegex.test(rawDate)) {
            return rawDate;
        }
        const parsed = parse(rawDate, 'M/d/yyyy', new Date());

        return format(parsed, "MMM do yyyy hh:mmaa");
    }

    const renderRowFields = (item: Item) => {
        switch (type) {
            case 'guest':
                const guest = item as Guest;
                return (
                    <>
                        <FieldValue>
                            <CustomerData
                                client_name={guest.client_name}
                                client_email={guest.client_email}
                                client_phone={guest.client_phone}
                                client_id={guest.client_id}
                                _id={guest._id}
                                room_id={guest.room_id}
                                room_name={guest.room_name}
                                room_description={guest.room_description}
                                room_type={guest.room_type}
                                room_price={guest.room_price}
                                room_status={guest.room_status}
                                room_amenities={guest.room_amenities}
                                order_date={guest.order_date}
                                check_in_date={guest.check_in_date}
                                check_out_date={guest.check_out_date}
                                status={guest.status}
                                special_request={guest.special_request}
                            />
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{guest.order_date? new Date(guest.order_date).toLocaleDateString() : 'No date'}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{guest.check_in_date? new Date(guest.check_in_date).toLocaleDateString() : 'No date'}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{guest.check_out_date? new Date(guest.check_out_date).toLocaleDateString() : 'No date'}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <ViewNotesBtn onClick={() => guest.special_request && onShowNotes?(guest.special_request ?? ""): ""}>View Notes</ViewNotesBtn>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{guest.room_type}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <RoomState color="#FFEDEC">
                                <FieldText color="#E23428">{guest.status}</FieldText>
                            </RoomState>
                        </FieldValue>
                    </>
                );
            case 'employee':
                const employee = item as Employee;
                return (
                    <>
                        <FieldValue>
                            <EmployeeData name={employee.name} id={employee.id} registration_date={employee.registration_date} />
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{employee.name}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{employee.job_functions}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{employee.schelude}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText><MdOutlineLocalPhone />{employee.phone}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText color={employee.status ? "#5AD07A" : "#E23428"}>
                                {employee.status ?
                                    'Active' : 'Inactive'
                                }
                            </FieldText>
                        </FieldValue>
                    </>
                );
            case 'room':
                const room = item as Room;
                return (
                    <>
                        <FieldValue>
                            <RoomData room_name={room.room_name} room_id={room.room_id} />
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{room.room_type}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{room.room_floor}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{room.room_amenities}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{room.price}$ /night</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldTextContainer color={room.status === 'Available' ? "#5AD07A" : "#E23428"}>
                                <FieldText color="#FFFFFF">{room.status}</FieldText>
                            </FieldTextContainer>
                        </FieldValue>
                    </>
                );
            default:
                return null;
        }
    }

    const getItemId = (item: Item, type: ListType) => {
        switch (type) {
            case 'guest': return (item as Guest)._id;
            case 'employee': return (item as Employee).id;
            case 'room': return (item as Room)._id;
            default: return "-1";
        }
    }

    const emptyMessage = {
        guest: "No bookings found",
        employee: "No employees found",
        room: "No rooms found"
    }

    return (
    <>
        <Table>
            <Header>
                <tr>
                    <th>
                        <Checkbox />
                    </th>
                    {fieldsName.map((fieldName, i) => {
                        return (
                            <th key={i}>
                                <FieldName>{fieldName}</FieldName>
                            </th>
                        )
                    })}
                </tr>
            </Header>
            <tbody>
                {list.length === 0 ? (
                    <tr>
                        <td colSpan={9}>
                            <p>{emptyMessage[type]}</p>
                        </td>
                    </tr>
                ) : (
                    list.map((item) => {
                        const itemId = getItemId(item, type);
                        if (!itemId) return null;
                        return (
                            <tr key={itemId}>
                                <FieldValue>
                                    <Checkbox
                                        onChange={(e) => onCheckboxChange?.(itemId, e.target.checked)}
                                        checked={selected.includes(itemId)}
                                    />
                                </FieldValue>
                                {renderRowFields(item)}
                                <FieldValue>
                                    <HiDotsVertical color="#6E6E6E" />
                                </FieldValue>
                            </tr>
                        );
                    })
                )}
            </tbody>
        </Table >
    </>);
}