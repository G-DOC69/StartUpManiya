import {AuthContext} from "../App.jsx"
import {useContext} from "react"
import Login from '../components/Login.jsx'
import Logged from '../components/Logged.jsx'
import SideBar from "../components/SideBar.jsx"

const LoginPage = () => {
    const [isAuth, setIsAuth] = useContext(AuthContext)
  return (
    <div id="login_page">
        {isAuth ? <Logged/> :<Login/>}
    </div>
  )
}

export default LoginPage
