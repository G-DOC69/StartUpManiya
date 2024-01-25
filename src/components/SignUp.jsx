import React, { useState, useContext } from 'react';
import '../styles/AuthStyle.scss'
import {AuthContext, UserContext} from "../App.jsx";
import axiosClient from "../app/Api.js"

const SignUp = () => {
    const [isAuth, setIsAuth] = useContext(AuthContext)
    const [user, setUser] = useContext(UserContext)
    const [nickname,setNickname] = useState ('')
    const [confirmPassword, setConfirmPassword] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleSubmit = async (e) => {e.preventDefault();
    try {
        const response = await axiosClient.post('/api/v1/regauth/registr', {
            nickname: nickname,
            email: email,
            password: password
        });

        if (response?.data?.access)
            localStorage.setItem('access_token', response.data.access);

        if (response?.data?.refresh)
            localStorage.setItem('refresh_token', response.data.refresh);

        setIsAuth(true)
    }catch (e){console.log(e)
    }};
  return (
    <div className='auth'>
        <div className="background">
            <div className='sky'><img src="../src/assets/AuthAssets/sky.svg" alt=""/></div>
            <div className='clouds'>
                <div className="cloud_container">
                    <img src="../src/assets/AuthAssets/cloud1.svg" alt="" className='cloud1'/>
                    <img src="../src/assets/AuthAssets/cloud2.svg" alt="" className='cloud2'/>
                    <img src="../src/assets/AuthAssets/cloud3.svg" alt="" className='cloud3'/>
                    <img src="../src/assets/AuthAssets/cloud4.svg" alt="" className='cloud4'/>
                </div>
            </div>
            <div className='nature'><img src="../src/assets/AuthAssets/authbackground.svg" alt=""/></div>
        </div>
        <div className="form_container">
            <div className="login_container">
                <div className="login_background"></div>
                <div className="login_title"><h1>Зарегистрироваться</h1></div>
                <form className='login_form' onSubmit={handleSubmit}>
                    <input className='login_inputs'type="text"
                    value={nickname} onChange={(e) => setNickname(e.target.value)}
                    required placeholder='Псевдоним'/>
                    <input className='login_inputs'type="email"
                    value={email} onChange={(e) => setEmail(e.target.value)}
                    required placeholder='Электронный Адрес'/>
                    <input className='login_inputs' type="password"
                    value={password} onChange={(e) => setPassword(e.target.value)}
                    required placeholder='Пароль'/>
                    <input className='login_inputs' type="password"
                    value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
                    required placeholder='Подтвердите Пароль'/>
                    <button className='login_button' type="submit">Зарегистрироваться</button>
                </form>
                <div className="login_redirect_container">
                    <p className='login_redirect'>Уже Есть Аккаунт ?
                        <a className='login_redirect_link' href='SignUp'> Войти</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp
