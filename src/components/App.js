import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegistrationPage from "../pages/RegistrationPage"
import HistoricPage from "../pages/HistoricPage"
import HabitsPage from "../pages/HabitsPage"
import TodayPage from "../pages/TodayPage"
import UserContext from "../contexts/UserContext"
import DayContext from "../contexts/DayContext"
import { useState } from "react"

export default function App() {
    const [userData, setUserData] = useState('');
    const [dayData, setDayData] = useState([])

    return (
        <UserContext.Provider value={{userData, setUserData}}>
            <DayContext.Provider value={{ dayData, setDayData }}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />}/>
                <Route path='/cadastro' element={<RegistrationPage />} />
                <Route path="/historico" element={<HistoricPage />} />
                <Route path='/habitos' element={<HabitsPage />} />
                <Route path="/hoje" element={<TodayPage />} />
            </Routes>
        </BrowserRouter>
        </DayContext.Provider>
        </UserContext.Provider>
    )
}