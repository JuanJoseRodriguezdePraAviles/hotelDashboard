import CustomerData from "../CustomerData/CustomerData";
import { EmployeeData } from "../EmployeeData/EmployeeData";
import { RoomData } from "../RoomData/RoomData";
import { Checkbox, Header, FieldName, Table, FieldValue, FieldTextContainer, FieldText, RoomState, Stars, Check } from "./ListStyled";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";
import { IoIosStar } from "react-icons/io";

export const List = ({ type, list, onCheckboxChange, selected }) => {
    return (
        <>
            {type === "guest" &&
                <Table>
                    <Header>
                        <tr>
                            <th>
                                <Checkbox/>
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
                                    <Checkbox onChange={(e) => onCheckboxChange(booking.booking_id, e.target.checked)} checked={selected.includes(booking.booking_id)}/>
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
                                    <FieldText>{booking.special_request}</FieldText>
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
                        <tr>
                            <FieldValue>
                                <Checkbox />
                            </FieldValue>
                            <FieldValue>
                                <EmployeeData name="Cahyadi Purnomo" identifier="#000123456" startDate="Joined on Aug 2th 2017" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>cahmo@gmail.com</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Monday, Friday</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText><MdOutlineLocalPhone />012 334 55512</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText color="#5AD07A">ACTIVE</FieldText>
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
                                <EmployeeData name="Louis Humbs" identifier="#12341225" startDate="Joined on Aug 2th 2017" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>loumbs@gmail.com</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Offer restaurant and activity recommendations and assist guests in arranging transportation</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Saturday, Sunday</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText><MdOutlineLocalPhone />012 334 55512</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText color="#E23428">INACTIVE</FieldText>
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
                                <EmployeeData name="Jackson Marquez" identifier="#12341225" startDate="Joined on Aug 2th 2017" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>jason@gmail.com</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Act as a liaison between guests and any department necessary including the kitchen, housekeeping, etc</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Wednesday, Sunday</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText><MdOutlineLocalPhone />012 334 55512</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText color="#5AD07A">ACTIVE</FieldText>
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
                                <EmployeeData name="Samantha William" identifier="#12341225" startDate="Joined on Aug 2th 2017" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>sahan@gmail.com</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Anticipate guests needs in order to accommodate them and provide an exceptional guest experience</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Monday, Friday</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText><MdOutlineLocalPhone />012 334 55512</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText color="#E23428">INACTIVE</FieldText>
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
                                <EmployeeData name="David Here" identifier="#12341225" startDate="Joined on Aug 2th 2017" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>dare@gmail.com</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Answering guest inquiries, directing phone calls, coordinating travel plans, and more.</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Saturday, Sunday</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText><MdOutlineLocalPhone />012 334 55512</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText color="#5AD07A">ACTIVE</FieldText>
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
                                <EmployeeData name="Elina Moss" identifier="#12341225" startDate="Joined on Aug 2th 2017" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>ess@gmail.com</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Offer restaurant and activity recommendations and assist guests in arranging transportation</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Monday, Friday</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText><MdOutlineLocalPhone />012 334 55512</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText color="#5AD07A">ACTIVE</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <HiDotsVertical color="#6E6E6E" />
                            </FieldValue>
                        </tr>
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
                        return(
                        <tr>
                            <FieldValue>
                                <Checkbox onChange={(e) => onCheckboxChange(room.room_id, e.target.checked)} checked={selected.includes(room.room_id)}/>
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
                                <FieldTextContainer color={room.status==='Available'?"#5AD07A":"#E23428"}>
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