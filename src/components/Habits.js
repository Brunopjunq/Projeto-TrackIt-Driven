import { useContext } from "react";
import DayContext from "../contexts/DayContext";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import styled from "styled-components";
import { TrashOutline } from "react-ionicons";

export default function Habits({ habitData: { id, name, days }, renderHabits }) {
    const {userData} = useContext(UserContext);
    const {dayData, setDayData} = useContext(DayContext);
    const daysofweek = ["D", "S", "T", "Q", "Q", "S", "S"];

    function deleteHabit() {
        if (!window.confirm('Deseja deletar esse hábito?')) {
            return;
        }
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }

        }
        
        const promise = axios.delete(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`, config);
        promise.then(res => {
            setDayData(dayData.filter((habit) => habit.id !== id))
            renderHabits();
        })

        promise.catch(err => alert(err));
    }

    return (
        <div className="AllHabits">
            <div className="AllHabits-title">{name}</div>
            <div className="week">
                {daysofweek.map((day, i) => (
                    <ButtonWeek isSelected={days.includes(i)} > {day}
                    </ButtonWeek>
                ))}
            </div>
            <TrashOutline
                color={'#666'}
                height="17px"
                width="17px"
                style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px"
                }}
                onClick={deleteHabit}
            />
        </div>
    )
}

const ButtonWeek = styled.button`
    margin-right: 4px;
    background: ${props => props.isSelected ? "#CFCFCF" : "#FFFFFF"};
    color: ${props => props.isSelected ? "#FFFFFF" : "#DBDBDB"};
    border: 1px solid #D5D5D5;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    font-size: 20px;
`;