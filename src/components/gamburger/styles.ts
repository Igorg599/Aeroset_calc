import styled from "styled-components";

export const Button = styled.button`
    width: 48px;
    height: 48px;
    border-radius: 48px;
    border: none;
    background: rgba(0, 163, 197, 0.12);
    outline: none;
    cursor: pointer;
    @media (max-width: 767px) {
        background: #3A3A3A;
        margin-top: 4px;
    }
`;

export const Menu = styled.div`
    display: block;
    margin: 0 auto;
    width: 18px;
    height: 12px;
    span {
        display: block;
        height: 2px;
        width: 100%;
        background-color: black;
        margin-bottom: 2px;
    }
    @media (max-width: 767px) {
        span {
            background-color: white;
        }
    }
`;