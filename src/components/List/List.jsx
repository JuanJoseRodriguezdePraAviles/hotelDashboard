
import CustomerData from "../CustomerData/CustomerData";
import { Checkbox, FieldHeader, Header, FieldName, Table, TableBody, FieldValue, FieldTr, FieldText } from "./ListStyled";

export const List = () => {
    return (
        <>
            <Table>
                <Header>
                    <FieldTr>
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
                    </FieldTr>
                </Header>
                <TableBody>
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
                    </tr>
                </TableBody>

            </Table>
        </>

    );
}