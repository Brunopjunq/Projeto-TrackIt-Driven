import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../contexts/UserContext";
import Bob from '../assets/Bob.png'
import Logo from '../assets/TrackIt.png'

export default function Header() {
    const {userData} = useContext(UserContext);

    return (
        <HeaderT>
            <img src={Logo} />
            <UserPic src={userData.image} />
        </HeaderT>
    )
    
}

const HeaderT = styled.header`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: #126BA5;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
    position: fixed;
    top: 0;
    left: 0;
    padding: 18px;
`;

const UserPic = styled.img`
    width: 51px;
    height: 51px;
    border-radius: 50%;
    background-color: #ffffff;
    object-fit: cover;
`

