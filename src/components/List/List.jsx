
import CustomerData from "../CustomerData/CustomerData";
import { NotesBtn } from "../NotesBtn/NotesBtn";
import { Checkbox, Header, FieldName, Table, FieldValue, FieldText, RoomState } from "./ListStyled";
import { HiDotsVertical } from "react-icons/hi";

export const List = ({type}) => {
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
            {type==='employee' &&
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
                            <FieldName>Job Desk</FieldName>
                        </th>
                        <th>
                            <FieldName>Schedule</FieldName>
                        </th>
                        <th>
                            <FieldName>Contact</FieldName>
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
        </>

    );
}