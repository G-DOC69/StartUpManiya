import HomePage from '../pages/HomePage'
import {Routes,Route} from 'react-router-dom'
import LoginPage from '../pages/LoginPage'
import SignUpPage from '../pages/SignUpPage'
import CabinetPage from '../pages/CabinetPage'
import ConfirmPage from '../pages/ConfirmPage'
import ProfilePage from '../pages/ProfilePage'
import IdeasPage from '../pages/IdeasPage'
import NotFoundPage from '../pages/NotFoundPage'
const MainRoutes = () => {
    const PUBLIC_ROUTES=[
        {
          element:<HomePage/>,
          path:'/',
          id:1,
        },{
          element:<LoginPage/>,
          path:'/login',
          id:2,
        },{
          element:<SignUpPage/>,
          path:'/signup',
          id:3,
        },{
          element:<CabinetPage/>,
          path:'/cabinet',
          id:4,
        },{
          element:<ConfirmPage/>,
          path:'/confirm',
          id:5,
        },{
          element:<ProfilePage/>,
          path:'/profile',
          id:6,
        },{
          element:<IdeasPage/>,
          path:'/ideas',
          id:7,
        },{
          element:<NotFoundPage/>,
          path:'*',
          id:100,
        },
    ]
  return(
    <Routes>
      {PUBLIC_ROUTES.map(item=>(<Route path={item.path} element={item.element} key={item.id}/>))}
    </Routes>)
}
export default MainRoutes;