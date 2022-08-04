import { BrowserRouter, Routes, Route } from "react-router-dom"
import LoginPage from "../pages/LoginPage"
import RegistrationPage from "../pages/RegistrationPage"

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />}/>
                <Route path='/cadastro' element={<RegistrationPage />} />
            </Routes>
        </BrowserRouter>
    )
}