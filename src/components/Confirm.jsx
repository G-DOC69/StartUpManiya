import React, { useState, useContext } from 'react';
import '../styles/AuthStyle.scss'
import {AuthContext} from "../AuthGate.jsx";
import axiosClient from "../app/Api.js"
import { useNavigate } from 'react-router-dom';

const Confirm = () => {
  const navigate = useNavigate();
  const [ setIsAuth] = useContext(AuthContext)
  const [ formData, setFormData] = useState({
      confirmationCode: '',
  });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosClient.patch('/api/v1/regauth/register/', formData);
      if (response?.data?.access)localStorage.setItem('access_token', response.data.access);
      if (response?.data?.refresh) localStorage.setItem('refresh_token', response.data.refresh);
      if (response.status === 200) {
        navigate('/')
        setIsAuth(true);
      } else {
        setError('Неправильный Логин или Пароль');
      }
    } catch (e) {
      console.log(e);
    }
};
    const handleChange = (e) => {setFormData({ ...formData, [e.target.name]: e.target.value });};
  return (
    <div className='auth'>
      <div id="background_container">
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
      </div>
      <div className="form_container">
            <div className="login_container">
                <div className="login_background"></div>
                <div className="login_title"><h1>Зарегистрироваться</h1></div>
                <div id="confirm">
                  <p>Сейчас на вашу электронную почту придет код</p>
                  <img src="../src/assets/AuthAssets/mailnotification.svg" alt="" />
                </div>
                <form className='login_form' onSubmit={handleSubmit}>
                  <input className='login_inputs' type="text"
                  value={formData.confirmationCode} name='confirmationCode' onChange={handleChange}
                  placeholder='Подтвердить Код'/>
                  {errors.confirmationCode && <span className="span_error">{errors.password}</span>}
                  {error && <span className='span_error'>{error}</span>}
                  <button className='login_button' type="submit">Подтвердить</button>
                </form>
            </div>
      </div>
    </div>
  )
}

export default Confirm
