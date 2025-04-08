import styled from "styled-components";

export const ConciergeListWrapper = styled.div`
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

export const EmployeeBtn = styled.button`
    background: #135846;
    width: auto;
    height: auto;
    opacity: 1;
    margin: 0.5rem;
`;

export const Notification = styled.div`
    position: fixed;
    top: 45%;
    right: 45%;
    padding: 10px 20px;
    background-color:rgb(54, 228, 182);
    color: #fff;
    border-radius: 5px;
    font-size: 16px;
    z-index: 1;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;