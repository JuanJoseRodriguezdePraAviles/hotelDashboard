import styled from "styled-components";

export const RoomListWrapper = styled.div`
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
    border-bottom: 4px solid #D4D4D4;
`;

export const RoomBtn = styled.button`
    background: #135846;
    width: auto;
    height: auto;
    opacity: 1;
    margin: 0.5rem;
`;