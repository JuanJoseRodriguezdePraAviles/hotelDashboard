import styled from "styled-components";

const CardWrapper = styled.div`
    width: 340px;
    display: flex;
    flex-direction: row;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 4px 4px #00000005;
    border-radius: 12px;
    margin: 1rem;
    padding: 1rem;
`;
const DataWrapper = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 1rem;
`;
const Number = styled.p`
    width: 3.5rem;
    height: 2.5rem;
    margin: 0;
    color: var(--unnamed-color-393939);
    text-align: left;
    font: normal normal 600 30px/46px Poppins;
    letter-spacing: 0px;
    color: #393939;
    opacity: 1;
`;
const NumberUnit = styled.p`
    width: 10rem;
    height: 1.1rem;
    margin: 0;
    color: var(--unnamed-color-787878);
    text-align: left;
    font: normal normal 300 14px/21px Poppins;
    letter-spacing: 0px;
    color: #787878;
`;

function RectCard({ number, description, children }) {
    return (
        <>
            <CardWrapper>
                {children}
                <DataWrapper>
                    <Number>{number}</Number>
                    <NumberUnit>{description}</NumberUnit>
                </DataWrapper>

            </CardWrapper>

        </>

    );
}

export default RectCard;