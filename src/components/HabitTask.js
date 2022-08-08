import { useContext, useState } from "react";
import { Checkbox } from "react-ionicons";
import UserContext from "../contexts/UserContext";
import axios from "axios";

export default function HabitTask({ taskData: { id, name, currentSequence, highestSequence, done }, renderDayHabits }) {
    const userData = useContext(UserContext);
    const [habitDone, setHabitDone] = useState(done);
    const [loading, setLoading] = useState(false);

    function buttonDone () {
        setLoading(true);
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }

        if(done) {
            setHabitDone(false);
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/uncheck`, config);
            promise.then(res => renderDayHabits());
            promise.catch(err => alert(err));
            promise.finally(() => setTimeout(() => {
                setLoading(false)
            }, 500))
        }
        else {
            setHabitDone(true);
            const promise = axios.post(`https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`, config);
            promise.then(res => renderDayHabits());
            promise.catch(err => alert(err));
            promise.finally(() => setTimeout(() => {
                setLoading(false)
            }, 500))
        }
    }

    return (
        <div className="HabitBox">
            <div className="HabitContent">
                <h3>{name}</h3>
                <div className="content"> Sequência atual: {`${currentSequence} dias`}</div>
                <div className="content">Seu recorde: {`${highestSequence} dias`}</div>
            </div>
            <Checkbox
                color={habitDone ? "#8FC549" : '#EBEBEB'}
                height="90px"
                width="90px"
                onClick={() => loading? "": buttonDone()}
            />
        </div>
    )
}