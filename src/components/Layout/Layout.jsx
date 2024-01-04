import React from "react";
import './Header/Header.css';
import { useSelector } from "react-redux";
import MegaMenu from './MegaMenu/MegaMenu'
import HeaderComponent from "./Header/HeaderComponent";

import { selectUser } from "../../features/userSlice";
import Landing from "../../pages/Landing/Landing";
import  DashboardFromApi from '../../pages/Dashboard/Dashboard'

function Layout() {
      // const navigate = useNavigate();
      const user = useSelector(selectUser);

      
      
        
      
      
     

  return (
    <>

              <HeaderComponent/>
              <MegaMenu/>
              {!user? (<Landing />) :(<DashboardFromApi />)}
    </>
  )
}

export default Layout