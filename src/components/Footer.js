import styled from "styled-components";
import { buildStyles } from "react-circular-progressbar";
import { CircularProgressbar } from 'react-circular-progressbar';
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <FooterT>
            <Link to={'/habitos'}>
                <MenuText>Hábitos</MenuText>
            </Link>
            <Link to={'/hoje'} style={{ width: 91, height: 130 }}>
                <CircularProgressbar
                // value={}
                text={`Hoje`}
                background
                backgroundPadding={6}
                styles={buildStyles({
                backgroundColor: "#52B6FF",
                textColor: "#fff",
                pathColor: "#fff",
                trailColor: "transparent"
                })}
                />
            </Link>
            <Link to={'/historico'}>
                <MenuText>Histórico</MenuText>
            </Link>
        </FooterT>
    )

}

const FooterT = styled.footer`
    width: 100%;
    height: 70px;
    display:flex;
    justify-content: space-around;
    align-items: center;
    background-color: #ffffff;
    position: fixed;
    bottom: 0;
    left: 0;
    font-size: 18px;
`;

const MenuText = styled.p`
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #52B6FF;

`