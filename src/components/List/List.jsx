import CustomerData from "../CustomerData/CustomerData";
import { EmployeeData } from "../EmployeeData/EmployeeData";
import { RoomData } from "../RoomData/RoomData";
import { Checkbox, Header, FieldName, Table, FieldValue, FieldTextContainer, FieldText, RoomState, Stars, ViewNotesBtn, SpecialRequestContainer } from "./ListStyled";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoIosStar } from "react-icons/io";
import { format, parse } from 'date-fns';

export const List = ({ type, list, fieldsName, onCheckboxChange, selected, onShowNotes }) => {

    const formatDate = (rawDate) => {
        const dateRegex = /^\d{1,2}\/\d{1,2}\/\d{4}$/;
        if (!dateRegex.test(rawDate)) {
            return rawDate;
        }
        const parsed = parse(rawDate, 'M/d/yyyy', new Date());

        return format(parsed, "MMM do yyyy hh:mmaa");
    }

    const renderRowFields = (item) => {
        switch (type) {
            case 'guest':
                return (
                    <>
                        <FieldValue>
                            <CustomerData
                                client={item.client_name}
                                email={item.client_email}
                                phone={item.client_phone}
                                identifier={item.client_id}
                            />
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{formatDate(item.order_date)}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{formatDate(item.check_in_date)}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{formatDate(item.check_out_date)}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <ViewNotesBtn onClick={() => onShowNotes(item.special_request)}>View Notes</ViewNotesBtn>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{item.room_type}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <RoomState color="#FFEDEC">
                                <FieldText color="#E23428">{item.status}</FieldText>
                            </RoomState>
                        </FieldValue>
                    </>
                );
            case 'employee':
                return (
                    <>
                        <FieldValue>
                            <EmployeeData name={item.name} identifier={item.id} startDate={item.registration_date} />
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{item.name}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{item.job_functions}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{item.schelude}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText><MdOutlineLocalPhone />{item.phone}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText color={item.status ? "#5AD07A" : "#E23428"}>
                                {item.status ?
                                    'Active' : 'Inactive'
                                }
                            </FieldText>
                        </FieldValue>
                    </>
                );
            case 'room':
                return (
                    <>
                        <FieldValue>
                            <RoomData name={item.room_name} identifier={item.room_id} />
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{item.room_type}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{item.room_floor}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{item.room_amenities}</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldText>{item.price}$ /night</FieldText>
                        </FieldValue>
                        <FieldValue>
                            <FieldTextContainer color={item.status === 'Available' ? "#5AD07A" : "#E23428"}>
                                <FieldText color="#FFFFFF">{item.status}</FieldText>
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
                        <td colSpan="9">
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