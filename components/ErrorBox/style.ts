import styled from "styled-components";

export const ErrorBoxStyled = styled.div`
    display: flex;
    align-items: center;
    gap: 5px;
    position: absolute;
    background-color: #ff0033;
    padding: 15px;
    border-radius: 10px;
    color: white;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: 500;
    top: 30px;

    svg {
        height: 22px;
        width: 22px;
    }
`