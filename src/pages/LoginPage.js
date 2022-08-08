import Logo from '../assets/Logo.png';
import { useContext, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import UserContext from '../contexts/UserContext';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const { setUserData} = useContext(UserContext);
    const navigate = useNavigate();
    function FazerLogin(e) {
        e.preventDefault();

        const LoginData = {
            email: email,
            password: senha
        };

        const promise = axios.post('https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login', LoginData);

        promise.then(res => {
            setUserData(res.data);
            navigate('/hoje');
        })

        promise.catch(res => {
            alert('Houve algum erro!Preencha os dados novamente!')
        })

        console.log(LoginData);

        setEmail('');
        setSenha('');

    }

    return (
        <div className='login-page'>
            <img src={Logo} />
            <form onSubmit={FazerLogin}>
                <input placeholder='email' type='email' value={email} onChange={e => setEmail(e.target.value)} required />
                <input placeholder='senha' type='password' value={senha} onChange={e => setSenha(e.target.value)} required/>
                <button type='submit'>Entrar</button>
            </form>
            <Link to='/cadastro'><p>Não tem uma conta? Cadastre-se!</p></Link>
        </div>
    )
}