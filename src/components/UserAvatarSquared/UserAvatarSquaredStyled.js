import styled from "styled-components";

export const AvatarWrapper = styled.div`
    width: ${(props) => props.size === 'large'? '6rem' : props.size === 'largest'? '10rem' : '4rem'};
    height: ${(props) => props.size === 'large'? '6rem' : props.size === 'largest'? '10rem' : '4rem'};
    background: var(--unnamed-color-c5c5c5) 0% 0% no-repeat padding-box;
    background: #C5C5C5 0% 0% no-repeat padding-box;
    border-radius: 8px;
    opacity: 1;
    margin: 1rem;
`;