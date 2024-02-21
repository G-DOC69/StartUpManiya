import {AuthContext} from "../AuthGate.jsx";
import {useContext} from "react"
import Login from '../components/Login.jsx'
import Logged from '../components/Logged.jsx'

const LoginPage = () => {
    const [isAuth] = useContext(AuthContext)
  return (
    <div id="login_page">
        {/* {isAuth ? <Logged/> :<Login/>} */}
        <Login/>
    </div>
  )
}

export default LoginPage
