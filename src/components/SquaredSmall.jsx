import styled from "styled-components";

const IconWrapper = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
    width: 3rem;
    height: 3rem;
    border-radius: 0.5rem;
    background-color: ${(props) => props.bg || "#C5C5C5" };
    padding:0.5rem;
    
`;

function SquaredSmall({bgColor, children}) {
    return (
        <IconWrapper bg={bgColor}>{children}</IconWrapper>
    );
}

export default SquaredSmall;

