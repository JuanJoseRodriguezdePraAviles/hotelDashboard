import styled from "styled-components";

const IconWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: 3rem;
    border-radius: 0.5rem;
    background-color:#C5C5C5;
    padding:0.5rem;
`;

function SquaredSmall({icon}) {
    return (
        <IconWrapper>{icon}</IconWrapper>
    );
}

export default SquaredSmall;

