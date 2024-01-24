import '../styles/CabinetStyle.scss'

const Cabinet = () => {
    const tags = ['UX/UI designer','Frontend разработчик','Проект менеджер'];
  return (
    <div id="cabinet">
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
        <div id="cabinet_container">
            <div id="top_br"></div>
            <div id="user_container">
                <div id="name">
                    <img id='user_picture' src="../src/assets/SideBarAssets/team.svg" alt="" />
                    <p id='user'>
                        Username
                        <span id='real_name'>First Name Second Name</span>
                    </p>
                </div>
                <ul id="tags">
                    {tags.map((tag, index) => (<li key={index} className={`tag`}>{tag}</li>))}
                </ul>
            </div>
            <div id="data_container">
                
            </div>
        </div>
    </div>
  )
}

export default Cabinet
