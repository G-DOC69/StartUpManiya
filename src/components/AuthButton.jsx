import { useContext } from 'react';
import {AuthContext} from "../AuthGate.jsx";
const AuthButton = () => {
    const [isAuth, setIsAuth] = useContext(AuthContext)
    const authcontrol = (e) => {
        e.preventDefault();
        setIsAuth(!isAuth);
        isAuth ? console.log('auth false') : console.log('auth true');
      };
  return (
    <button style={{position:'absolute',width:30,height:30,top:0,left:0,zIndex:200,backgroundColor:'purple'}} onClick={authcontrol}>
      7
    </button>
  )
}
export default AuthButton