import Logo from '../assets/Logo.png';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function RegistrationPage() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [name, setName] = useState('');
    const [image, setImage] = useState('');

    function FazerCadastro(e) {
        e.preventDefault();

        const data = {
            email: email,
            name: name,
            image: image,
            password: senha
        };

        console.log(data);

        setEmail('');
        setSenha('');
        setName('');
        setImage('');

    }

    return (
        <div className='login-page'>
            <img src={Logo} />
            <form onSubmit={FazerCadastro}>
                <input placeholder='email' type='email' value={email} onChange={e => setEmail(e.target.value)} required />
                <input placeholder='senha' type='password' value={senha} onChange={e => setSenha(e.target.value)} required/>
                <input placeholder='nome' type='text' value={name} onChange={e => setName(e.target.value)} required/>
                <input placeholder='foto' type='url' value={image} onChange={e => setImage(e.target.value)} pattern="https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,4}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)(.jpg|.png)" required/>
                <button type='submit'>Entrar</button>
            </form>
            <Link to='/'><p>Já tem uma conta? Faça login!</p></Link>
        </div>
    )
    
}