import styled from "styled-components";

export const Shape = styled.div`
    width: 328px;
    padding: 16px 16px 32px 16px;
    background: #FFFFFF;
    border-radius: 4px;
    margin-right: 28px;
    h1 {
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 24px;
        letter-spacing: 0.15px;
        margin-left: 3px;
        color: #3A3A3A;
    }
`;

export const Line = styled.div`
    height: 1px;
    background: rgba(33, 33, 33, 0.08);
    margin: 0 -16px;
`;

export const Figure = styled.div`
    position: relative;
    display: flex;
    margin-top: 16px;
`;

export const FirstArrow = styled.img`
    position: absolute;
`;

export const SecondArrow = styled.img<{ rectangular?: boolean }>`
    position: absolute;
    top: ${(props) => (props.rectangular ? "2px" : "85px")};
    left: 180px;
`;

export const ThirdArrow = styled.img`
    position: absolute;
    margin: 20px 0 0 1px;
`;

export const Arch = styled.div<{ rectangular?: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 168px;
    width: 168px;
    border: 3px solid black;
    border-radius: ${(props) => (props.rectangular ? "0" : "84px 84px 0 0")};
    margin: auto 0;
`;

export const Result = styled.div`
    display: flex;
    margin: 55px 0 0 3px;
    h3 {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        letter-spacing: 0.25px;
        color: rgba(58, 58, 58, 0.74);
    }
    p {
        font-style: normal;
        font-weight: normal;
        font-size: 34px;
        line-height: 36px;
        color: #3A3A3A;
        margin-top: 12px;
    }
    h4 {
        font-style: normal;
        font-weight: normal;
        font-size: 14px;
        line-height: 20px;
        color: rgba(58, 58, 58, 0.74);
    }
`;