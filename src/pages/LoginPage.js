import Logo from '../assets/Logo.png';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    function FazerLogin(e) {
        e.preventDefault();

        const data = {
            email: email,
            password: senha
        };

        console.log(data);

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