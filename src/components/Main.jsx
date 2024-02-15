import '../styles/MainStyle.scss'
import { useState, useEffect } from 'react'
import "@fontsource/exo-2/900.css";
import BottomBar from './BottomBar';

const Main = () => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const deadline = "March, 30, 2024";
    const getTime = () => {
        const time = Date.parse(deadline) - Date.now();
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
    }
    useEffect(() => {
        const interval = setInterval(() => getTime(deadline), 1000);
        return () => clearInterval(interval);
    }, []);
  return (
    <div id='main'>
        <div id='background'>
            <div id='sky'><img src="../src/assets/HomePageAssets/sky.svg" alt=""/></div>
            <div id='mountains'><img src="../src/assets/HomePageAssets/mountains.svg" alt=""/></div>
            <div id="forest"><img src="../src/assets/HomePageAssets/forest.svg" alt="" /></div>
            <div id='clouds'>
                <div className="cloud_container">
                    <img src="../src/assets/HomePageAssets/cloud1.svg" alt="" id='cloud1'/>
                    <img src="../src/assets/HomePageAssets/cloud2.svg" alt="" id='cloud2'/>
                    <img src="../src/assets/HomePageAssets/cloud3.svg" alt="" id='cloud3'/>
                    <img src="../src/assets/HomePageAssets/cloud4.svg" alt="" id='cloud4'/>
                </div>
            </div>
            <div id='clouds2'>
                <div className="cloud_container">
                    <img src="../src/assets/HomePageAssets/cloud1.svg" alt="" id='cloud5'/>
                    <img src="../src/assets/HomePageAssets/cloud2.svg" alt="" id='cloud6'/>
                    <img src="../src/assets/HomePageAssets/cloud4.svg" alt="" id='cloud7'/>
                    <img src="../src/assets/HomePageAssets/cloud3.svg" alt="" id='cloud8'/>
                </div>
            </div>
        </div>
        <div id="title_container">
            <div id='title_text'>
                <p id='startup'>STARTUP</p>
                <p id='maniya'>МАНИЯ</p>
                <p id='event_time'><span id='time'>ВРЕМЯ</span>ПРОВЕДЕНИЯ:</p>
                <div id='timer'>
                    <div id='days'>{days}<p className='timer_text'>ДНЕЙ</p></div>
                    <div id='hours'>{hours}<p className='timer_text'>ЧАСОВ</p></div>
                    <div id='minutes'>{minutes}<p className='timer_text'>МИНУТ</p></div>
                    <div id='seconds'>{seconds}<p className='timer_text'>СЕКУНД</p></div>
                </div>
            </div>
            <br/>
        </div>
        <div id="boys_with_kites">
            <img src="../src/assets/HomePageAssets/boyswithkites.svg" alt="" />
        </div>
        <BottomBar/>
    </div>
  )
}
export default Main
