import '../styles/SideBarStyle.scss'
import {AuthContext, UserContext} from "../App.jsx";
import React, { useState, useContext } from 'react';

const SideBar = () => {
const [isAuth, setIsAuth] = useContext(AuthContext)
const [translate, setTranslate] = useState(false);
const [isAnimating, setIsAnimating] = useState(false);
const handleButtonClick = () => {
  {isAnimating?setIsAnimating(false):setIsAnimating(true)};
  {translate?setTranslate(false):setTranslate(true)};
};
const animationStyles = {
  animationName:isAnimating?'side-slide-animation':'side-slide-animation-reverse',animationDuration:'1s',animationFillMode:'forwards',
};
  return (
    <div id='sidebar' style={{ transform: translate ? 'translateX(250px)' : 'translateX(0)' }}>
      <div id="sidebar_container">
        <a id="logo_container" style={{cursor:'pointer'}} href='/'>
          <img src="../src/assets/SideBarAssets/logo.svg" alt="" />
        </a>
        <ul id='nav'>
          {items.map((item, index) => (
            <li className='nav_element' key={index}>
              <a className='nav_link' href={item.href}>
                <img className='nav_logo' src={item.img} alt={`${item.alt} Icon`}/>
                {item.title}
              </a>
            </li>
          ))}
        </ul>
        <div id="profile_out">
          <a className='nav_link' href="/profile">
            {isAuth?(<img className='nav_logo' src='../src/assets/SidebarAssets/signout.svg' alt='<' /> ):(<img className='nav_logo' src='../src/assets/SidebarAssets/signin.svg' alt='>'/>)}
            {isAuth?'Выйти':'Войти'}
          </a>
        </div>
      </div>
      <div id="sidebar_slider" onClick={handleButtonClick}>
        <img style={animationStyles} src="../src/assets/SidebarAssets/side_slide.svg" alt="<" height={24} width={15}/>
      </div>
      <div id="topbar">
        <div id="topbar_container">
          <img id='topbar_logo' src="../src/assets/SideBarAssets/logo.svg" alt="" />
          <a href='cabinet' id='profile_top'>
            <span>Profile</span>
            <img width={45} height={45} src="../src/assets/SideBarAssets/user.svg" alt="" />
          </a>
        </div>
      </div>
    </div>
  )
}

export default SideBar

const items = [
  { title: 'События', img :'../src/assets/SideBarAssets/event.svg', alt :'h', href: '/events' },
  { title: 'Профиль', img :'../src/assets/SideBarAssets/user.svg', alt :'t', href:'/cabinet' },
  { title: 'Уведомления', img :'../src/assets/SideBarAssets/notification.svg', alt :'t', href:'/notifications' },
  { title: 'Сообщения', img :'../src/assets/SideBarAssets/messages.svg', alt :'ul', href: '/messages' },
  { title: 'Идеи', img :'../src/assets/SideBarAssets/ideas.svg', alt :'i', href: '/ideas' },
  { title: 'Команды', img :'../src/assets/SideBarAssets/team.svg', alt :'i', href: '/teams' },
  { title: 'Друзья', img :'../src/assets/SideBarAssets/friends.svg', alt :'i', href: '/friends' },
]