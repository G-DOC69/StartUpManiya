import '../styles/MainStyle.scss'
import { useState, useEffect } from 'react'
import "@fontsource/exo-2/900.css";

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


    const [linePosition, setLinePosition] = useState({ x1: 50, y1: 50, x2: 350, y2: 350 });

  // Assume you have a function that gets the current position of the moving div
  const getMovingDivPosition = () => {
    const movingDiv = document.getElementById("");
    const rect = movingDiv.getBoundingClientRect();
    return { x: rect.left, y: rect.top };
  };

  useEffect(() => {
    const updateLine = () => {
      const movingDivPosition = getMovingDivPosition();
      setLinePosition((prevLinePosition) => ({
        ...prevLinePosition,
        x2: movingDivPosition.x,
        y2: movingDivPosition.y,
      }));
    };
    const intervalId = setInterval(updateLine, 10);
    return () => clearInterval(intervalId);
  }, []);




  return (
    <div id='main'>
        <div id='background'>
            <div id='sky'><img src="../src/assets/HomePageAssets/sky.svg" alt=""/></div>
            <div id='mountains'><img src="../src/assets/HomePageAssets/mountains.svg" alt=""/></div>
            <div id="forest"><img src="../src/assets/HomePageAssets/forest.svg" alt="" /></div>
            <div id='clouds'>
                <div id="cloud_container">
                    <img src="../src/assets/HomePageAssets/cloud1.svg" alt="" id='cloud1'/>
                    <img src="../src/assets/HomePageAssets/cloud2.svg" alt="" id='cloud2'/>
                    <img src="../src/assets/HomePageAssets/cloud3.svg" alt="" id='cloud3'/>
                    <img src="../src/assets/HomePageAssets/cloud4.svg" alt="" id='cloud4'/>
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
            <div id="boys">
                <img src="../src/assets/HomePageAssets/cartoonboys.svg" alt=""/>
            </div>
            <div id="lines">
                <svg width="500" height="500"><line x1="50" y1="50" x2="350" y2="350" stroke="black"/></svg>
                <svg width="500" height="500"><line x1="50" y1="50" x2="350" y2="350" stroke="black"/></svg>
                <svg width="500" height="500"><line x1="50" y1="50" x2="350" y2="350" stroke="black"/></svg>
            </div>
            <div id="kite_container">
                <div id="kites">
                    <img src="../src/assets/HomePageAssets/kite1.svg" alt="" id='kite1'/>
                    <img src="../src/assets/HomePageAssets/kite2.svg" alt="" id='kite2'/>
                    <img src="../src/assets/HomePageAssets/kite3.svg" alt="" id='kite3'/>
                </div>
            </div>
        </div>
    </div>
  )
}
export default Main
