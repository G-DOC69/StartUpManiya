import MainRoutes from './routes/routes'
import { BrowserRouter } from 'react-router-dom'
import { useState, createContext, useEffect} from 'react'

export const UserContext = createContext('user');
export const AuthContext = createContext('auth');

function App() {
  const [user, setUser] = useState(false)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    const accessToken = localStorage.getItem('access_token');

    if (accessToken) {
      setIsAuth(true)
    }
  }, []);

  return (
    <>
      <BrowserRouter>
        <AuthContext.Provider value={[isAuth, setIsAuth]}>
          <UserContext.Provider value={[user, setUser]}>
            <MainRoutes/>
          </UserContext.Provider>
        </AuthContext.Provider>
      </BrowserRouter>
    </>
  )
}
export default App
