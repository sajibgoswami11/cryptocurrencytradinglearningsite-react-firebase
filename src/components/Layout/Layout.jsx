import React, {  useState,useEffect } from "react";
import '../Layout/Header/Header.css';
import { useDispatch,useSelector } from "react-redux";
import { Link } from 'react-router-dom'
import MegaMenu from './MegaMenu/MegaMenu'
// import { auth } from "../../firebase";
import {LoginService } from '../../services/LoginServiceContext'

import { login,logout,selectUser } from "../../features/userSlice";
import Landing from "../../pages/Landing/Landing";

function Layout() {
      // const navigate = useNavigate();
      const user = useSelector(selectUser);
      const loginService =new LoginService();

      const getUserFromStorage = () => {
        const userString = localStorage.getItem("username");
        if (userString) {
          return (userString);
        }
        return null;
      };
      const dispatch = useDispatch();
      
      useEffect(() => {
        const user = getUserFromStorage();
        if (user) {
          dispatch(login(user)); // Dispatch login action with user data
        }
        else{
          dispatch(logout());
        }
      }, []);
        
      const logoutOfApp = () => {
        dispatch(logout());
        // auth.signOut();
        loginService.logout();
        window.location.href = '/';
      };
      
      const [isMenuOpen, setIsMenuOpen] = useState(false);
  
      const handleHamburgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
      };

  return (
    <>

              <div className="header">
              
                      <nav>
                          {/* <!-- header logo state start --> */}
                          <Link to="/" className="logo-text">FxLRn</Link>
                          {/* <!-- header logo state end --> */}
                          {/* <!-- navbar links state start   --> */}
                          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>  
                               {!user? ( 
                                      <ul className="signing-links">
                                        <li className="sign-in-link">
                                          <Link to="/login">Sign In</Link>
                                        </li>
                                        <li className="sign-up-link">
                                          <Link to="/login">
                                              <button>Sign Up</button>
                                          </Link>
                                        </li> 
                                    </ul>
                                     )
                                : (
                                  <Link to={'/'} className='loged_user_icon' onClick={logoutOfApp} > {user}</Link>
                                ) }
                          </div>
                          {/* <!-- navbar links state end --> */}
                          {/* <!-- mobile hamburger state start --> */}
                          <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={handleHamburgerClick}>
                              <span className="bar"></span>
                              <span className="bar"></span>
                              <span className="bar"></span>
                          </div>
                          {/* <!-- mobile hamburger state end --> */}

                      </nav>
              </div>
              <MegaMenu/>
              <Landing />
    </>
  )
}

export default Layout