
import CustomerData from "../CustomerData/CustomerData";
import { EmployeeData } from "../EmployeeData/EmployeeData";
import { RoomData } from "../RoomData/RoomData";
import { NotesBtn } from "../NotesBtn/NotesBtn";
import { Checkbox, Header, FieldName, Table, FieldValue, FieldTextContainer, FieldText, RoomState } from "./ListStyled";
import { HiDotsVertical } from "react-icons/hi";
import { MdOutlineLocalPhone } from "react-icons/md";

export const List = ({ type }) => {
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
                        <tr>
                            <FieldValue>
                                <Checkbox />
                            </FieldValue>
                            <FieldValue>
                                <CustomerData client="Cahyadi Purnomo" email="cahmo@gmail.com" phone="666444555" identifier="#000123456"></CustomerData>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Oct 30th 2020 09:21 AM</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 2th, 2020</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 4th, 2020</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <NotesBtn value="View Notes" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Deluxe A - 02</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <RoomState color="#FFEDEC">
                                    <FieldText color="#E23428">Refund</FieldText>
                                </RoomState>
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
                                <CustomerData client="Cahyadi Purnomo" email="cahmo@gmail.com" phone="666444555" identifier="#000123456"></CustomerData>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Oct 30th 2020 09:21 AM</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 2th, 2020</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 4th, 2020</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <NotesBtn value="View Notes" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Deluxe A - 02</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <RoomState color="#E8FFEE">
                                    <FieldText color="#5AD07A">Booked</FieldText>
                                </RoomState>
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
                                <CustomerData client="Cahyadi Purnomo" email="cahmo@gmail.com" phone="666444555" identifier="#000123456"></CustomerData>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Oct 30th 2020 09:21 AM</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 2th, 2020</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 4th, 2020</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <NotesBtn value="View Notes" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Deluxe A - 02</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <RoomState color="#E2E2E2">
                                    <FieldText color="#6D6D6D">Pending</FieldText>
                                </RoomState>
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
                                <CustomerData client="Cahyadi Purnomo" email="cahmo@gmail.com" phone="666444555" identifier="#000123456"></CustomerData>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Oct 30th 2020 09:21 AM</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 2th, 2020</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 4th, 2020</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <NotesBtn value="View Notes" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Deluxe A - 02</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <RoomState color="#575757">
                                    <FieldText color="#BEBEBE">Cancelled</FieldText>
                                </RoomState>
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
                                <CustomerData client="Cahyadi Purnomo" email="cahmo@gmail.com" phone="666444555" identifier="#000123456"></CustomerData>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Oct 30th 2020 09:21 AM</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 2th, 2020</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 4th, 2020</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <NotesBtn value="View Notes" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Deluxe A - 02</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <RoomState color="#FFEDEC">
                                    <FieldText color="#E23428">Refund</FieldText>
                                </RoomState>
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
                                <CustomerData client="Cahyadi Purnomo" email="cahmo@gmail.com" phone="666444555" identifier="#000123456"></CustomerData>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Oct 30th 2020 09:21 AM</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 2th, 2020</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 4th, 2020</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <NotesBtn value="View Notes" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Deluxe A - 02</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <RoomState color="#E8FFEE">
                                    <FieldText color="#5AD07A">Booked</FieldText>
                                </RoomState>
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
                                <CustomerData client="Cahyadi Purnomo" email="cahmo@gmail.com" phone="666444555" identifier="#000123456"></CustomerData>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Oct 30th 2020 09:21 AM</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 2th, 2020</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 4th, 2020</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <NotesBtn value="View Notes" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Deluxe A - 02</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <RoomState color="#E2E2E2">
                                    <FieldText color="#6D6D6D">Pending</FieldText>
                                </RoomState>
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
                                <CustomerData client="Cahyadi Purnomo" email="cahmo@gmail.com" phone="666444555" identifier="#000123456"></CustomerData>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Oct 30th 2020 09:21 AM</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 2th, 2020</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Nov 4th, 2020</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <NotesBtn value="View Notes" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Deluxe A - 02</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <RoomState color="#575757">
                                    <FieldText color="#BEBEBE">Cancelled</FieldText>
                                </RoomState>
                            </FieldValue>
                            <FieldValue>
                                <HiDotsVertical color="#6E6E6E" />
                            </FieldValue>
                        </tr>
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
                        <tr>
                            <FieldValue>
                                <Checkbox />
                            </FieldValue>
                            <FieldValue>
                                <RoomData name="Deluxe A-91234" identifier="#000123456" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Double Bed</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Floor A-1</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>145$ /night</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldTextContainer color="#5AD07A">
                                    <FieldText color="#FFFFFF">Available</FieldText>
                                </FieldTextContainer>
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
                                <RoomData name="Deluxe A-91234" identifier="#000123456" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Double Bed</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Floor A-1</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>145$ /night</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldTextContainer color="#E23428">
                                    <FieldText color="#FFFFFF">Booked</FieldText>
                                </FieldTextContainer>
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
                                <RoomData name="Deluxe A-91234" identifier="#000123456" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Double Bed</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Floor A-1</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>145$ /night</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldTextContainer color="#5AD07A">
                                    <FieldText color="#FFFFFF">Available</FieldText>
                                </FieldTextContainer>
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
                                <RoomData name="Deluxe A-91234" identifier="#000123456" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Double Bed</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Floor A-1</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>145$ /night</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldTextContainer color="#5AD07A">
                                    <FieldText color="#FFFFFF">Available</FieldText>
                                </FieldTextContainer>
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
                                <RoomData name="Deluxe A-91234" identifier="#000123456" />
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Double Bed</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>Floor A-1</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>AC, Shower, Double Bed, Towel, Bathup, Coffee Set, LED TV, Wifi</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldText>145$ /night</FieldText>
                            </FieldValue>
                            <FieldValue>
                                <FieldTextContainer color="#E23428">
                                    <FieldText color="#FFFFFF">Booked</FieldText>
                                </FieldTextContainer>
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