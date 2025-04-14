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

type Item = Guest | Employee | Room;

type ListType = "guest" | "employee" | "room";

interface ListProps {
    type: ListType;
    list: Item[];
    fieldsName: string[];
    onCheckboxChange: (id: string, checked: boolean) => void;
    selected: string[];
    onShowNotes: (notes: string) => void;
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
                                client={guest.client_name}
                                email={guest.client_email}
                                phone={guest.client_phone}
                                identifier={guest.client_id}
                            />
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{formatDate(guest.order_date.toDateString())}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{formatDate(guest.check_in_date.toDateString())}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{formatDate(guest.check_out_date.toDateString())}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <ViewNotesBtn onClick={() => onShowNotes(guest.special_request)}>View Notes</ViewNotesBtn>
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
                            <EmployeeData name={employee.name} identifier={employee.id} startDate={employee.registration_date} />
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
                            <RoomData name={room.room_name} identifier={room.room_id} />
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

    const getItemId = (item) => {
        switch (type) {
            case 'guest': return item.booking_id;
            case 'employee': return item.id;
            case 'room': return item.room_id;
            default: return null;
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
                        const itemId = getItemId(item);
                        return (
                            <tr key={itemId}>
                                <FieldValue>
                                    <Checkbox
                                        onChange={(e) => onCheckboxChange(itemId, e.target.checked)}
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