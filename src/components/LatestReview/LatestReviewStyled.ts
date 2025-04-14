import styled from "styled-components";

export const Reviews = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 20px;
    opacity: 1;
    padding: 1rem;
    margin: 1rem;
    overflow: hidden;

    & > * {
        margin: 0;
    }
`;

export const Title = styled.h2`
    color: var(--unnamed-color-393939);
    text-align: left;
    font: normal normal medium 20px/30px Poppins;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
`;

export const ReviewsContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 20px;
    opacity: 1;
    margin: 0;
    padding: 0;
`;