import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    align-items: left;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 20px;
    opacity: 1;
    padding: 1rem;
`;

export const Header = styled.thead`
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 20px;
    opacity: 1;
`;

export const FieldTr = styled.tr`
`;



export const Checkbox = styled.div`
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    border: 2px solid var(--unnamed-color-707070);
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border: 2px solid #707070;
    border-radius: 6px;
    opacity: 1;
    height: 1rem;
    width: 1rem;
`;

export const FieldName = styled.p`
    color: var(--unnamed-color-393939);
    text-align: left;
    font: normal normal 600 16px/25px Poppins;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
`;

export const TableBody = styled.tbody`
    width: 100%;
    display: flex;
    flex-direction: row;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 20px;
    opacity: 1;
`;

export const FieldValue = styled.td`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 20px;
    opacity: 1;
`;

export const FieldText = styled.p`
    color: var(--unnamed-color-393939);
    text-align: left;
    font: normal normal 600 16px/25px Poppins;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
`;