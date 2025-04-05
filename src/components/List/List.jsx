import CustomerData from "../CustomerData/CustomerData";
import { EmployeeData } from "../EmployeeData/EmployeeData";
import { RoomData } from "../RoomData/RoomData";
import { Checkbox, Header, FieldName, Table, FieldValue, FieldTextContainer, FieldText, RoomState, Stars, ViewNotesBtn, SpecialRequestContainer } from "./ListStyled";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoIosStar } from "react-icons/io";

export const List = ({ type, list, onCheckboxChange, selected, onShowNotes }) => {

    function handleNotes(special_request) {
        return (
            <SpecialRequestContainer>
                {special_request}
            </SpecialRequestContainer>
        );
    }

    return (
        <>
            {type === "guest" &&
                <Table>
                    <Header>
                        <tr>
                            <th>
                                <Checkbox />
                            </th>
                            <th>
                                <FieldName>Guest</FieldName>
                            </th>
                            <th>
                                <FieldName>Order Date</FieldName>
                            </th>
                            <th>
                                <FieldName>Check In</FieldName>
                            </th>
                            <th>
                                <FieldName>Check Out</FieldName>
                            </th>
                            <th>
                                <FieldName>Special Request</FieldName>
                            </th>
                            <th>
                                <FieldName>Room Type</FieldName>
                            </th>
                            <th>
                                <FieldName>Status</FieldName>
                            </th>
                        </tr>
                    </Header>
                    <tbody>
                        {list.map((booking) => {
                            return (<tr>
                                <FieldValue>
                                    <Checkbox onChange={(e) => onCheckboxChange(booking.booking_id, e.target.checked)} checked={selected.includes(booking.booking_id)} />
                                </FieldValue>
                                <FieldValue>
                                    <CustomerData client={booking.client_name} email={booking.client_email} phone={booking.client_phone} identifier={booking.client_id}></CustomerData>
                                </FieldValue>
                                <FieldValue>
                                    <FieldText>{booking.order_date}</FieldText>
                                </FieldValue>
                                <FieldValue>
                                    <FieldText>{booking.check_in_date}</FieldText>
                                </FieldValue>
                                <FieldValue>
                                    <FieldText>{booking.check_out_date}</FieldText>
                                </FieldValue>
                                <FieldValue>
                                    <ViewNotesBtn onClick={() => onShowNotes(booking.special_request)}>View Notes</ViewNotesBtn>
                                </FieldValue>
                                <FieldValue>
                                    <FieldText>{booking.room_type}</FieldText>
                                </FieldValue>
                                <FieldValue>
                                    <RoomState color="#FFEDEC">
                                        <FieldText color="#E23428">{booking.status}</FieldText>
                                    </RoomState>
                                </FieldValue>
                                <FieldValue>
                                    <HiDotsVertical color="#6E6E6E" />
                                </FieldValue>
                            </tr>);
                        })}
                    </tbody>

                </Table>
            }
            {type === 'employee' &&
                <Table>
                    <Header>
                        <tr>
                            <th>
                                <Checkbox />
                            </th>
                            <th>
                                <FieldName>Name</FieldName>
                            </th>
                            <th>
                                <FieldName>Email</FieldName>
                            </th>
                            <th>
                                <FieldName>Job Desk</FieldName>
                            </th>
                            <th>
                                <FieldName>Contact</FieldName>
                            </th>
                            <th>
                                <FieldName>Status</FieldName>
                            </th>
                        </tr>
                    </Header>
                    <tbody>
                        {list.map((employee) => {
                            return (
                                <tr>
                                    <FieldValue>
                                        <Checkbox onChange={(e) => onCheckboxChange(employee.id, e.target.checked)} checked={selected.includes(employee.id)} />
                                    </FieldValue>
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
                                    <FieldValue>
                                        <HiDotsVertical color="#6E6E6E" />
                                    </FieldValue>
                                </tr>
                            )
                        })}
                    </tbody>
                </Table>
            }
            {type === 'room' &&
                <Table>
                    <Header>
                        <tr>
                            <th>
                                <Checkbox />
                            </th>
                            <th>
                                <FieldName>Room Name</FieldName>
                            </th>
                            <th>
                                <FieldName>Bed Type</FieldName>
                            </th>
                            <th>
                                <FieldName>Room Floor</FieldName>
                            </th>
                            <th>
                                <FieldName>Facilities</FieldName>
                            </th>
                            <th>
                                <FieldName>Rate</FieldName>
                            </th>
                            <th>
                                <FieldName>Status</FieldName>
                            </th>
                        </tr>
                    </Header>
                    <tbody>
                        {list.map((room) => {
                            return (
                                <tr>
                                    <FieldValue>
                                        <Checkbox onChange={(e) => onCheckboxChange(room.room_id, e.target.checked)} checked={selected.includes(room.room_id)} />
                                    </FieldValue>
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
                                    <FieldValue>
                                        <HiDotsVertical color="#6E6E6E" />
                                    </FieldValue>
                                </tr>);
                        })}
                    </tbody>

                </Table>
            }
            {type === 'review' &&
                <Table>
                    <Header>
                        <tr>
                            <th>
                                <Checkbox />
                            </th>
                            <th>
                                <FieldName>Order ID</FieldName>
                            </th>
                            <th>
                                <FieldName>Date</FieldName>
                            </th>
                            <th>
                                <FieldName>Customer</FieldName>
                            </th>
                            <th>
                                <FieldName>Comment</FieldName>
                            </th>
                            <th>
                                <FieldName>Action</FieldName>
                            </th>
                        </tr>
                    </Header>
                    <tbody>
                        <tr>
                            <FieldValue>
                                <Checkbox />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>#000123456</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 21th 2020 09:21 AM</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>James Sitepu</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <Stars>
                                    <IoIosStar color="#135846" />
                                    <IoIosStar color="#135846" />
                                    <IoIosStar color="#135846" />
                                </Stars>
                                <FieldText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText color="#5AD07A">Publish</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText color="#E23428">Archive</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <HiDotsVertical color="#6E6E6E" />
                            </FieldValue>
                        </tr>
                        <tr>
                            <FieldValue>
                                <Checkbox />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>#000123456</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 21th 2020 09:21 AM</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>James Sitepu</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <Stars>
                                    <IoIosStar color="#135846" />
                                    <IoIosStar color="#135846" />
                                    <IoIosStar color="#135846" />
                                    <IoIosStar color="#135846" />
                                    <IoIosStar color="#135846" />
                                </Stars>
                                <FieldText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText color="#5AD07A">Publish</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText color="#E23428">Archive</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <HiDotsVertical color="#6E6E6E" />
                            </FieldValue>
                        </tr>
                        <tr>
                            <FieldValue>
                                <Checkbox />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>#000123456</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 21th 2020 09:21 AM</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>James Sitepu</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <Stars>
                                    <IoIosStar color="#135846" />
                                    <IoIosStar color="#135846" />
                                    <IoIosStar color="#135846" />
                                </Stars>
                                <FieldText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText color="#5AD07A">Publish</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText color="#E23428">Archive</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <HiDotsVertical color="#6E6E6E" />
                            </FieldValue>
                        </tr>
                        <tr>
                            <FieldValue>
                                <Checkbox />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>#000123456</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 21th 2020 09:21 AM</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>James Sitepu</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <Stars>
                                    <IoIosStar color="#135846" />
                                    <IoIosStar color="#135846" />
                                    <IoIosStar color="#135846" />
                                    <IoIosStar color="#135846" />
                                    <IoIosStar color="#135846" />
                                </Stars>
                                <FieldText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText color="#5AD07A">Publish</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText color="#E23428">Archive</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <HiDotsVertical color="#6E6E6E" />
                            </FieldValue>
                        </tr>
                        <tr>
                            <FieldValue>
                                <Checkbox />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>#000123456</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 21th 2020 09:21 AM</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>James Sitepu</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <Stars>
                                    <IoIosStar color="#135846" />
                                    <IoIosStar color="#135846" />
                                    <IoIosStar color="#135846" />
                                    <IoIosStar color="#135846" />
                                    <IoIosStar color="#135846" />
                                </Stars>
                                <FieldText>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText color="#5AD07A">Publish</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText color="#E23428">Archive</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <HiDotsVertical color="#6E6E6E" />
                            </FieldValue>
                        </tr>
                    </tbody>

                </Table>
            }
        </>
    );
}