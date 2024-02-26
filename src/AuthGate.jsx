import MainRoutes from './routes/routes'
import { useNavigate} from 'react-router-dom'
import axiosClient from "./app/Api.js"
import { useState, createContext, useEffect} from 'react'
export const AuthContext = createContext('auth');
const AuthGate = () => {
    const [user,setUser] = useState ({
        id:'',
        tags: [],
        username: '',
        firstname: '',
        secondname: '',
        created_at: '',
        email:'',
        skills: [],
        works: [],
        socials:[],
        ideas:[] 
      });
      const [isAuth, setIsAuth] = useState(false)
      const [error, setError] = useState('');
      const navigate = useNavigate()     
      useEffect(() => {
        const checkAuthentication = async () => {
          try {
            const access_token = localStorage.getItem('access_token');
            if (!access_token) {
              navigate('/login')
            }
            const response = await axiosClient.get('/api/v1/regauth/user-info', {
              headers: {
                'Authorization': `Bearer ${access_token}`
              }
            });
            if (response.status==200) {
              if (response.data.code){
                localStorage.clear();
                setError('"Ваша сессия истекла. Пожалуйста, войдите снова, чтобы продолжить пользоваться нашими услугами.');
                navigate(`/login?error=${encodeURIComponent('auth')}`)
              } else{
                const userData = response.data;
                setUser(prevUser => ({
                  ...prevUser,
                  id: userData.id,
                  tags: userData.tags,
                  username: userData.username,
                  name: userData.firstname,
                  second_name: userData.secondname,
                  created_at: userData.created_at,
                  email: userData.email,
                  skills: userData.skills,
                  works: userData.works,
                  socials: userData.socials,
                  ideas: userData.ideas
                }));
                localStorage.setItem('user', JSON.stringify(user));
                setIsAuth(true)
              }
            } else {
              setError('Ошибка Сервера, попробуйте перезайти в аккаунт или зайти на сайт позже');
              navigate(`/login?error=${encodeURIComponent('auth')}`)
            }
          } catch (error) {
            setError('Ошибка в сохраненных данных браузера');
            navigate(`/login?error=${encodeURIComponent('auth')}`)
          }
        };
    
        checkAuthentication();
      }, []);
  return (
    <AuthContext.Provider value={[isAuth, setIsAuth]}>
        <MainRoutes/>
    </AuthContext.Provider>
  )
}

export default AuthGate
