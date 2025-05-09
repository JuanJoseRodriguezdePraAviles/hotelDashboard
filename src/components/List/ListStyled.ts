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

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
    appearance: none;
    width: 1rem;
    height: 1rem;
    border: 2px solid #135846;
    border-radius: 4px;
    background-color: white;
    cursor: pointer;

    &:checked {
        background-color: #135846;
    }
`;

export const Check = styled.div`
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    border: 2px solid var(--unnamed-color-707070);
    background:rgb(1, 43, 0) 0% 0% no-repeat padding-box;
    opacity: 1;
    border-radius: 30%;
    height: 0.8rem;
    width: 0.8rem;
`;

export const FieldName = styled.p`
    color: var(--unnamed-color-393939);
    text-align: left;
    font: normal normal 600 16px/25px Poppins;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
`;

export const FieldValue = styled.td`
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    border-radius: 20px;
    opacity: 1;
    position:relative;
`;

export const FieldTextContainer = styled.div`
    background: ${(props) => props.color || '#5AD07A'};
    border-radius: 12px;
    opacity: 1;
`;


export const FieldText = styled.p`
    color: var(--unnamed-color-393939);
    text-align: left;
    font: normal normal 600 16px/25px Poppins;
    letter-spacing: 0px;
    color: ${(props) => props.color || "#393939"};
    opacity: 1;
    padding: 1rem;
    height: 1rem;
    overflow-y: hidden;
`;

export const Stars = styled.div`
    background: '#FFFFFF';
    border-radius: 12px;
    opacity: 1;
`;

export const RoomState = styled.div`
    background: ${(props) => props.color || "#393939"};
    border-radius: 12px;
    opacity: 1;
`;

export const ViewNotesBtn = styled.button`
    background-color: #FFFFFF;
    color: #000000;
    font-weight: 700;
    font-family: 'Poppins';
    border-radius: 12px;
    opacity: 1;
`;

export const SpecialRequestContainer = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 5rem;
    background: var(--unnamed-color-f8f8f8) 0% 0% no-repeat padding-box;
    background: #F8F8F8 0% 0% no-repeat padding-box;
    opacity: 1;
    border-bottom: 4px solid #D4D4D4;
`;