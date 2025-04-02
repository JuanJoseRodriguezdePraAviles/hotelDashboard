import styled from "styled-components";

export const EditBookingWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const EditBookingTitle = styled.h1`
    color: #000000;
`;

export const Label = styled.p`
    color: #000000;
`;

export const FieldText = styled.input`
    background: #FFFFFF;
    color: #000000;
`;

export const DateInput = styled.input`
    ${props => props.type === 'password' && `

    `}
`;

export const SubmitBtn = styled.button`
    background: #FFFFFF;
    color: #000000;
`;

export const ValidationError = styled.p`
    background: #FFFFFF;
    color: red;
`;

