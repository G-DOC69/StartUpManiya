import '../styles/SideBarStyle.scss'
import {AuthContext} from "../AuthGate.jsx";
import React, { useState, useContext } from 'react';

const BottomBar = () => {
  return (
    <div id="bottombar_container">
    <a href="ideas">
        <img className='bottom_icon' src="../src/assets/SideBarAssets/ideas.svg" alt="" />
    </a>
    <a href="search">
        <img className='bottom_icon' src="../src/assets/SideBarAssets/bottomsearch.svg" alt="" />
    </a>
    <a href="messages">
        <img className='bottom_icon' src="../src/assets/SideBarAssets/messages.svg" alt="" />
    </a>
    <a href="notifications">
        <img className='bottom_icon' src="../src/assets/SideBarAssets/notification.svg" alt="" />
    </a>
    <img className='bottom_icon' src="../src/assets/SideBarAssets/hub.svg" alt="" />
    </div>
  )
}

export default BottomBar
