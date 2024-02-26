import React, { useState, useEffect } from 'react';
import axiosClient from "../app/Api.js"
import { useNavigate} from 'react-router-dom'
import '../styles/IdeaStyle.scss'


const Ideas = () => {
  const [ideaBlocks,setIdeaBlocks] = useState ([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredIdeas, setFilteredIdeas] = useState([]);
  const [ideasError,setIdeasError] = useState('');
  const [createMessage, setCreateMessage ] = useState (false);
  const [create,setCreate] = useState (false);
  const [ formData, setFormData] = useState({
    name: '',
    description: '',
  });
  const [errors, setErrors] = useState({});
  const [error, setError] = useState('');
  const navigate = useNavigate() 
  const handleChange = (e) => {setFormData({ ...formData, [e.target.name]: e.target.value });};    

  const showCreate = () =>{
    {create?setCreate(false):setCreate(true)}
  }

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
        newErrors.name = 'Пожалуйста, введите имя.';
    } else if (formData.name.length > 30 || !/^[a-zA-Zа-яА-Я0-9\s]+$/.test(formData.name)) {
        newErrors.name = 'Имя должно содержать не более 30 символов и состоять только из букв, цифр и пробелов.';
    }
    if (!formData.description.trim()) {
        newErrors.description = 'Пожалуйста, введите описание.';
    } else if (formData.description.length > 300 || !/^[a-zA-Zа-яА-Я0-9\s,]+$/.test(formData.description)) {
        newErrors.description = 'Описание должно содержать не более 300 символов и состоять только из букв, цифр, пробелов и запятых.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  useEffect(() => {
    const fetchIdeas = async () => {
      const access_token = localStorage.getItem('access_token');
      if (!access_token) {
        navigate('/login');
      } else {
        try {
          const response = await axiosClient.get('/api/v1/idea/all-ideas/', {
          headers: {'Authorization': `Bearer ${access_token}`}
        });
        if (response.data.code){
          localStorage.clear();
          setError('"Ваша сессия истекла. Пожалуйста, войдите снова, чтобы продолжить пользоваться нашими услугами.');
          navigate(`/login?error=${encodeURIComponent('auth')}`)
        } else {
          console.log(response.data)
          setIdeaBlocks(response.data)
        }
        } catch (error) {setIdeasError('Ошибка во время получения Идей');setTimeout(window.location.href='/ideas',10000)}
      }
    };
  fetchIdeas();},[]);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredIdeas(ideaBlocks);
    } else {
      setFilteredIdeas(
        ideaBlocks.filter(ideaBlock =>
          ideaBlock.name.toLowerCase().includes(searchQuery.toLowerCase())
        )
      );
    }
  }, [ideaBlocks, searchQuery]);

  const searchIdeas = async () => {
    const access_token = localStorage.getItem('access_token');
    if (!access_token) {
      navigate('/login');
    } else {
      try {
        const response = await axiosClient.get('/api/v1/idea/all-ideas/',{},{
        headers: {'Authorization': `Bearer ${access_token}`}
      });
      if (response.data.code){
        localStorage.clear();
        setError('"Ваша сессия истекла. Пожалуйста, войдите снова, чтобы продолжить пользоваться нашими услугами.');
        navigate(`/login?error=${encodeURIComponent('auth')}`)
      } else {
        setIdeaBlocks(response.data)
      }
      } catch (error) {setIdeasError('Ошибка во время получения Идей');setTimeout(window.location.href='/ideas',10000)}
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    const access_token = localStorage.getItem('access_token');
    if (!access_token) {
      navigate('/login');
    } else {
      if (validateForm()) {
        try {
          const response = await axiosClient.post('/api/v1/idea/create/', formData, {
            headers: {'Authorization': `Bearer ${access_token}`}
          });
          if (response.data.code){
            localStorage.clear();
            setError('"Ваша сессия истекла. Пожалуйста, войдите снова, чтобы продолжить пользоваться нашими услугами.');
            navigate(`/login?error=${encodeURIComponent('auth')}`)
          } else {
            setCreateMessage(true)
            setFormData(prevFormData =>({...prevFormData,name:'',description:''}));
            setTimeout(setCreateMessage(false),5000);
            setTimeout(fetchIdeas(),1000)
          }
        } catch (e) {
          console.log(e);
      }} else {
          console.log('Form has errors:', errors);
      }
  }};

  const likeImgHandle = async () =>{
  }

  const toggleIsLiked = (ideaId) => {
    setIdeaBlocks(prevBlocks => 
      prevBlocks.map(ideaBlock =>
        ideaBlock.id === ideaId ? { ...ideaBlock, user_liked: !ideaBlock.user_liked } : ideaBlock
      )
    );
  };
  const toggleIsSupported = (ideaId) => {
    setIdeaBlocks(prevBlocks => 
      prevBlocks.map(ideaBlock =>
        ideaBlock.id === ideaId ? { ...ideaBlock, is_supported: !ideaBlock.is_supported } : ideaBlock
      )
    );
  };    

  const handleLikeIdea = async (id) => {
    const access_token = localStorage.getItem('access_token');
      if (!access_token) {
        navigate('/login');
      } else {
    try {
      const response = await axiosClient.post(`/api/v1/idea/ideas/${id}/like/`,{},{
        headers: {'Authorization': `Bearer ${access_token}`}
      });
      if (response.data.code){
        localStorage.clear();
        setError('"Ваша сессия истекла. Пожалуйста, войдите снова, чтобы продолжить пользоваться нашими услугами.');
        navigate(`/login?error=${encodeURIComponent('auth')}`)
      } else {
        toggleIsLiked(id)
      };
    } catch (error) {
      console.error('Не получилось сделать запрос', error);
    }}
  };

  const handleDislikeIdea = async (id) => {
    const access_token = localStorage.getItem('access_token');
      if (!access_token) {
        navigate('/login');
      } else {
    try {
      const response = await axiosClient.post(`/api/v1/idea/ideas/${id}/delite-like/`,{},{
        headers: {'Authorization': `Bearer ${access_token}`}
      });
      if (response.data.code){
        localStorage.clear();
        setError('"Ваша сессия истекла. Пожалуйста, войдите снова, чтобы продолжить пользоваться нашими услугами.');
        navigate(`/login?error=${encodeURIComponent('auth')}`)
      } else {
        toggleIsLiked(id)
      };
    } catch (error) {
      console.error('Не получилось сделать запрос', error);
    }}
  };

  const handleSupportIdea = async (id) => {
    const access_token = localStorage.getItem('access_token');
      if (!access_token) {
        console.log('sadsadas')
        navigate('/login');
      } else {
    try {
      const response = await axiosClient.post(`/api/v1/idea/ideas/${id}/supporter/`,{},{
        headers: {'Authorization': `Bearer ${access_token}`}
      });
      if (response.data.code){
        localStorage.clear();
        setError('"Ваша сессия истекла. Пожалуйста, войдите снова, чтобы продолжить пользоваться нашими услугами.');
        navigate(`/login?error=${encodeURIComponent('auth')}`)
      } else {
        toggleIsSupported(id)
      };
    } catch (error) {
      console.error('Не получилось сделать запрос', error);
    }}
  };

  const handleStopSupportIdea = async (id) => {
    const access_token = localStorage.getItem('access_token');
      if (!access_token) {
        console.log('sadsadas')
        navigate('/login');
      } else {
    try {
      const response = await axiosClient.post(`/api/v1/idea/ideas/${id}/supporter-decline/`,{},{
        headers: {'Authorization': `Bearer ${access_token}`}
      });
      if (response.data.code){
        localStorage.clear();
        setError('"Ваша сессия истекла. Пожалуйста, войдите снова, чтобы продолжить пользоваться нашими услугами.');
        navigate(`/login?error=${encodeURIComponent('auth')}`)
      } else {
        toggleIsSupported(id)
      };
    } catch (error) {
      console.error('Не получилось сделать запрос', error);
    }}
  };

  return (
    <div id='ideas'>
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
      <div id="create_idea_background" style={{display:create?'block':'none'}}></div>
      <div id="create_idea_container" style={{display:create?'flex':'none'}}>
        <form id='create_idea_form' style={{display:createMessage?'none':'flex'}} onSubmit={handleSubmit}>
          <div style={{position:'absolute',top:'15px',right:'15px',backgroundColor:'red',width:'30px',height:'30px'}} onClick={showCreate}></div>
          <input type="text"
          value={formData.name} name='name' onChange={handleChange}
          placeholder='Название Идеи'/>
          {errors.name && <span className='span_error'>{errors.name}</span>}
          <input type="text"
          value={formData.description} name='description' onChange={handleChange}
          placeholder='Описание Идеи'/>
          {errors.description && <span className='span_error'>{errors.description}</span>}
          <button type='submit'>Создать Идею</button>
        </form>
      </div>
      <div id='ideas_header'>
        <h1 id='ideas_title'>Идеи</h1>
        <div id="search_container">
          <button id='create_idea_button' onClick={showCreate}>Создать Идею</button>
          <input id='ideas_search'
          type="text"
          placeholder="Поиск..."
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
        />
        </div>
      </div>
      <div className='ideas_container' id='ideas_container'>
        {filteredIdeas.map((ideaBlock) => (
          <div className='idea_block ideas_block' key={ideaBlock.id}>
            <div className="idea">
              <h3 className='idea_name'>{ideaBlock.name}</h3>
              <p className='idea_description'>{ideaBlock.description}</p>
              {/* <ul className='idea_tags'>
                  {ideaBlock.hashtags.map((hashtag,index)=>(<a value={hashtag} key={index} className='idea_tag'>{hashtag}</a>))}
              </ul> */}
            </div>
            <div className='idea_buttons'>
              {ideaBlock.user_liked?
                <div className='idea_block_button' onClick={() => handleDislikeIdea(ideaBlock.id)} style={{color:'rgb(221, 64, 63)'}}>
                <img className='idea_button_img' src="../src/assets/CabinetAssets/liked.svg" alt="" />
                {ideaBlock.likes}
                </div>
                :
                <div className='idea_block_button' onClick={() => handleLikeIdea(ideaBlock.id)} style={{color:'rgb(221, 64, 63)'}}>
                <img className='idea_button_img' src="../src/assets/CabinetAssets/like.svg" alt="" />
                {ideaBlock.likes}
                </div>
              }
              {ideaBlock.is_supported?
                <div className='idea_block_button' onClick={() => handleStopSupportIdea(ideaBlock.id)} style={{color:'rgb(147, 74, 247)'}}>
                <img className='idea_button_img' src="../src/assets/CabinetAssets/supported.svg" alt="" />
                {typeof ideaBlock.supporters === 'string' ? ideaBlock.supporters.split(',').map(name => name.trim()).length : 0}
                </div>
                :
                <div className='idea_block_button' onClick={() => handleSupportIdea(ideaBlock.id)} style={{color:'rgb(147, 74, 247)'}}>
                <img className='idea_button_img' src="../src/assets/CabinetAssets/support.svg" alt="" />
                {typeof ideaBlock.supporters === 'string' ? ideaBlock.supporters.split(',').map(name => name.trim()).length : 0}
                </div>
              }
              <a className='idea_view' href='/idea'>Просмотр</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ideas;
