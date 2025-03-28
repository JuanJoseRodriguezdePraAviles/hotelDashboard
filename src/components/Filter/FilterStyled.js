import styled from "styled-components";

export const FilterContainer = styled.div`
    width: 8rem;
    height: 3rem;
    display: flex;
    flex-direction: row;
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
    padding: 1rem;
    color: ${(props) => props.color};
    border-bottom: 2px solid ${(props)=> props.color};
`;