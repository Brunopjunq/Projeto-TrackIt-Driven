import Footer from "../components/Footer";
import Header from "../components/Header";
import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import { useContext, useEffect } from "react";
import UserContext from "../contexts/UserContext";
import DayContext from "../contexts/DayContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function TodayPage() {
    const {userData} = useContext(UserContext);
    const {dayData, setDayData} = useContext(DayContext);
    let navigate = useNavigate();

    useEffect (() => {
        renderDayHabits();
    },[]);

    function renderDayHabits() {
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today', config);

        promise.then(res => {
            setDayData(res.data);
        })

        promise.catch(err => {
            alert(err);
            navigate('/');
        })

    }

    function TodayPercentage() {
        const QntHabits = dayData.length;
        const HabitsComplete = dayData.filter((habit) => habit.done).length;
        return ((HabitsComplete * 100) / QntHabits).toFixed(0);
    }
    
    return (
        <>
        <Header />
        <div className="user-page">
            <h1>{dayjs().locale('pt-br').format('dddd, DD/MM')}</h1>
            <h2>{TodayPercentage() > 0 ? `${TodayPercentage()}% dos hábitos concluídos` : "Nenhum hábito concluído ainda"}</h2>
        </div>
        <Footer />
        </>
    )
    
}