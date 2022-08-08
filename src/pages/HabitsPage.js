import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";
import UserContext from "../contexts/UserContext";
import axios from "axios";
import Habits from '../components/Habits'
import CreateHabit from "../components/CreateHabit";

export default function HabitsPage() {
    const [habits, setHabits] = useState([]);
    const navigate = useNavigate();
    const {userData} = useContext(UserContext);
    const {isCreateHabitsVisible, setIsCreateHabitsVisible} = useState(false);

    useEffect(() => {
        renderHabits();
    },[]);


    function renderHabits() {
        const config = {
            headers: {
                Authorization: `Bearer ${userData.token}`
            }
        }

        const promise = axios.get('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits', config);
        promise.then(res => setHabits(res.data));
        promise.catch(err => {
            alert(err);
            navigate('/');
        })
    }


    return (
        <>
        <Header />
            <div className="user-page">
                <div className="HabitHeader">
                    <h1>Meus Hábitos</h1>
                    <button>+</button>
                </div>
                {/* <CreateHabit
                renderHabits={renderHabits}
                isCreateHabitsVisible={isCreateHabitsVisible}
                setIsCreateHabitsVisible={setIsCreateHabitsVisible}
                /> */}
                {habits.length === 0 ? (<p>Você não tem nenhum hábito cadastrado ainda.
                Adicione um hábito para começar a trackear!</p>) : habits.map((habitData) => <Habits habitData={habitData} renderHabits={renderHabits} /> )}
            </div>
        <Footer />
        </>
    )
}