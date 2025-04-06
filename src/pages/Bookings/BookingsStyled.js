import styled from "styled-components";

export const BookingsWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    width: auto;
    height: auto;
    background: var(--unnamed-color-f8f8f8) 0% 0% no-repeat padding-box;
    background: #F8F8F8 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 1rem;
`;

export const Filters = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 5rem;
    background: var(--unnamed-color-f8f8f8) 0% 0% no-repeat padding-box;
    background: #F8F8F8 0% 0% no-repeat padding-box;
    opacity: 1;
`;

export const BookingBtn = styled.button`
    background: #135846;
    width: auto;
    height: auto;
    opacity: 1;
    margin: 0.5rem;
`;

export const ModalContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #FFFFFF;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    opacity: 1;
`;

export const ModalTextContainer = styled.div`
    background: white;
    padding: 2rem;
    border-radius: 10px;
    width: 400px;
    max-width: 90%;
    box-shadow: 0 2px 10px rgba(0,0,0,1);
    color: #000000;
`;

export const CloseBtn = styled.button`
    margin-top: 1rem;
    padding: 0.5rem 1rem;
    background-color: #135846;
    color: white;
    border: none;
    border-radius: 5px;
`;


