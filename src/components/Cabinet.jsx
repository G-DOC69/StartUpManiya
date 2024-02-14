import '../styles/CabinetStyle.scss'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'

const Cabinet = () => {
    const navigate = useNavigate();
    const [showContainer1, setShowContainer1] = useState(true);
    const [showContainer2, setShowContainer2] = useState(false);
    const toggleContainer1 = () => {
        setShowContainer1(true);
        setShowContainer2(false);
    };

    const toggleContainer2 = () => {
        setShowContainer1(false);
        setShowContainer2(true);
    };
    const user ={
        id: 1,
        tags:['UX/UI designer','Frontend разработчик','Проект менеджер','DEV OPS'],
        username:'bekxwt',
        firstname:'Bekzat',
        secondname:'Bakytbek uulu',
        registrdate:'16 Августа',
        email:'bekzat@gmail.com',
        skills:['JavaScript','Figma','HTML,CSS','React'],
        works:[
            {
                id:1,
                name:'Github',
                logo:'https://github.githubassets.com/assets/GitHub-Mark-ea2971cee799.png',
                link:'https://github.com/G-DOC69/'
            },{
                id:2,
                name:'Behance',
                logo:'https://seeklogo.com/images/B/behance-logo-1373E40919-seeklogo.com.png',
                link:'https://google.com'
            }
        ],
        socials:[
            {
                id:1,
                name:'Instagram',
                logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/198px-Instagram_logo_2016.svg.png?20210403190622',
                link:'https://www.instagram.com/svekolnikovsergej7/'
            },{
                id:2,
                name:'VK',
                logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/VK_Compact_Logo_%282021-present%29.svg/2048px-VK_Compact_Logo_%282021-present%29.svg.png',
                link:'https://vk.com/'
            },{
                id:3,
                name:'+996706182355',
                logo:'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/800px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png',
                link:'https://web.whatsapp.com/'
            }
        ],
        ideas:[
            {
                id:1,
                name:'Lorem ipsum dolor sit amet, consectetur.',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae semper nisl, non ultricies turpis. Etiam mollis orci sit amet quam pharetra, non pretium.',
                hashtags:['#frontend','#react','#college'],
                developers:3,
                likes:2
            },{
                id:2,
                name:'Lorem ipsum dolor sit amet, consectetur.',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae semper nisl, non ultricies turpis. Etiam mollis orci sit amet quam pharetra, non pretium.',
                hashtags:['#frontend','#react','#college'],
                developers:3,
                likes:2
            },{
                id:3,
                name:'Lorem ipsum dolor sit amet, consectetur.',
                description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras vitae semper nisl, non ultricies turpis. Etiam mollis orci sit amet quam pharetra, non pretium.',
                hashtags:['#frontend','#react','#college'],
                developers:3,
                likes:2
            },
        ]
    }
  return (
    <div id="cabinet">
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
        <div id="cabinet_container">
            <br/>
            <div id="user_container">
                <div id="name">
                    <img id='user_picture' src="../src/assets/CabinetAssets/user.svg" alt="" />
                    <p id='user'>
                        {user.username}
                        <span id='real_name'>{user.firstname} {user.secondname}</span>
                    </p>
                </div>
                <ul id="tags">
                    {user.tags.map((tag, index) => (<li key={index} className={`tag`}>{tag}</li>))}
                </ul>
            </div>
            <div className="data_container" style={{display: showContainer1?'flex':'none'}}>
                <button className="data_button">Данные</button>
                <button className="idea_button" onClick={toggleContainer2}>Идеи</button>
                <a href='edit' id="edit_button">Изменить</a>
                <div className="data_section">
                    <div className="data_block" style={{ backgroundColor: 'rgba(147,74,247,0.50)'}}>
                        <h1 className='data_header'>Данные</h1>
                        <p className='data'>
                            <img src="../src/assets/CabinetAssets/calendar.svg" width={36} height={36} alt="" />
                            Зарегистрирован с
                            {user.registrdate}
                        </p>
                        <p className='data'>
                            <img src="../src/assets/CabinetAssets/mail.svg" width={39} height={32} alt="" />
                            {user.email}
                        </p>
                    </div>
                    {user.skills.length > 0 && (
                        <div className="data_block" style={{ backgroundColor: 'rgba(251,184,0,0.50)'}}>
                            <h1 className='data_header'>Навыки</h1>
                            {user.skills.map((skill,index)=>(<p key={index} className='skill'>{skill}</p>))}
                        </div>
                    )}
                </div>
                <div className="data_section">
                    {user.works.length > 0 && (
                        <div className="data_block" style={{ backgroundColor: 'rgba(251,184,0,0.50)'}}>
                            <h1 className='data_header'>Работы</h1>
                            {user.works.map((work,id)=>(
                                <p key={id} className='link'>
                                    <img style={{borderRadius:'10px'}} width={40} height={40} src={work.logo}/>
                                    <a href={work.link}>{work.name}</a>
                                </p>
                            ))}
                        </div>
                    )}
                    {user.socials.length > 0 && (
                        <div className="data_block" style={{ backgroundColor: 'rgba(147,74,247,0.50)'}}>
                            <h1 className='data_header'>Контакты</h1>
                            {user.socials.map((social,id)=>(
                                <p key={id} className='link'>
                                    <img style={{borderRadius:'10px'}} width={40} height={40} src={social.logo}/>
                                    <a href={social.link}>{social.name}</a>
                                </p>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <div className="data_container" style={{display: showContainer2?'flex':'none'}}>
                <button className="data_button purple"onClick={toggleContainer1}>Данные</button>
                <button className="idea_button yellow">Идеи</button>
                <div id="idea_container">
                    {user.ideas.map((idea,id)=>(
                    <div key={id} className="idea_block">
                        <div className="idea">
                            <h3 className='idea_name'>{idea.name}</h3>
                            <p className='idea_description'>{idea.description}</p>
                            <ul className='idea_tags'>
                                {idea.hashtags.map((hashtag,index)=>(<a value={hashtag} key={index} className='idea_tag'>{hashtag}</a>))}
                            </ul>
                        </div>
                        <div className="idea_interactables">
                            <div className="idea_interactable" style={{color:'#934AF7'}}>
                                <img width={40} height={34} src="../src/assets/CabinetAssets/follow.svg" alt=""/>
                                {idea.developers}
                            </div>
                            <div className="idea_interactable"
                            style={{color:'#DD403F'}}>
                                <img width={40} height={34} src="../src/assets/CabinetAssets/like.svg" alt="" />
                                {idea.likes}
                            </div>
                        </div>
                    </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Cabinet
