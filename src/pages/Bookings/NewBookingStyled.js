import styled from "styled-components";

export const NewBookingWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Fields = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`;

export const NewBookingTitle = styled.h1`
    color: #000000;
    font-family: 'Poppins';
`;

export const FieldWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FieldLabelContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 20rem;
    align-items: center;
`;

export const Label = styled.p`
    color: #000000;
    padding: 0 1rem;
    font-family: 'Poppins';
`;

export const FieldText = styled.input`
    background: #FFFFFF;
    color: #000000;
    height: 2rem;
    border-color: #799283;
    border-radius: 10%/40%;
    width: 9rem;
    font-family: 'Poppins';
`;

export const DateInput = styled.input`
    background: #FFFFFF;
    color: #000000;
    height: 2rem;
    border-color: #799283;
    border-radius: 10%/40%;
    width: 9rem;
    font-family: 'Poppins';
`;

export const SubmitBtn = styled.button`
    background: #FFFFFF;
    color: #000000;
`;

export const ValidationError = styled.p`
    background: #FFFFFF;
    color: red;
    font-family: 'Poppins';
`;

