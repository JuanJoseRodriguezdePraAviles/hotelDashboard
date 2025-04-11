import styled from "styled-components";

export const SideMenuWrapper = styled.div`
    width: ${({ collapsed }) => (collapsed ? "0" : "auto")};
    background: var(--unnamed-color-ffffff) 0% 0% no-repeat padding-box;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    opacity: 1;
    margin: 0;
    padding: 0;
    height: auto;
    position: relative;
    transition: width 2s;
`;

export const WebIconContainer = styled.div`
    display: flex;
    padding: 2rem 2rem;
`;

export const WebIcon = styled.img`
    width: 3rem;
`;

export const WebTitleContainer = styled.div`
    width: 10.75rem;
    padding: 0 0 0 0.75rem;
`;

export const TitleWeb = styled.p`
    color: #212121;
    font-weight: 700;
    font-size: 2rem;
    margin: 0;
`;

export const SubtitleWeb = styled.p`
    color: #5D5449;
    margin: 0;
    font-family: 'Poppins';
    font-size: 0.75rem;
`;

export const NavBtns = styled.div`
    display: flex;
    flex-direction: column;
    padding: 2rem 0;
`;

export const PageBtn = styled.div`
    display: flex;
    padding: 2rem 0;
    padding: ${({ active }) => (active ? "1rem 0" : "1rem 1rem")};
    color: ${({ active }) => (active ? "red" : "#799283")};
    font-size: ${({ active }) => (active ? "1.4rem" : "1rem")};
    align-items: center;
`;

export const RedIndicator = styled.div`
    background-color: red;
    width: 0.5rem;
    height: 3rem;
    border-radius: 0% 50% 50% 0%;
    position: relative;
    left: 0rem;
    margin-right: 1rem;
`;

export const PageText = styled.div`
    padding: 0.5rem;
`;