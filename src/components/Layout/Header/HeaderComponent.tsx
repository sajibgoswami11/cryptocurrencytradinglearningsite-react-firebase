
import React, { useEffect, useState } from 'react'
import './Header.css';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'

import {LoginService } from '../../../services/LoginServiceContext'

import { login,logout } from "../../../features/userSlice";

const Header = () => {
  const loginService =new LoginService();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const handleHamburgerClick = () => {
        setIsMenuOpen(!isMenuOpen);
      };
  const dispatch = useDispatch();
      
  const userString = localStorage.getItem("username");
      useEffect(() => {
        if (userString) {
          dispatch(login(userString));
        } else {
          dispatch(logout());
        }
      }, []);
  const logoutOfApp = () => {
        dispatch(logout());
        // auth.signOut();
        loginService.logout();
        window.location.href = '/';
      };

  return (
       
       <div className="header">
              
                      <nav>
                          {/* <!-- header logo state start --> */}
                          <Link to="/" className="logo-text">FxLRn</Link>
                          {/* <!-- header logo state end --> */}
                          {/* <!-- navbar links state start   --> */}
                          <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>  
                               {!userString? ( 
                                      <ul className="signing-links">
                                        <li className="sign-in-link">
                                          <Link to="/login">Sign In</Link>
                                        </li>
                                        
                                    </ul>
                                     )
                                : (
                                  <div className="sign-up-link">
                                      <Link to={'/'} className='loged_user_icon' onClick={logoutOfApp} >
                                              <button>{userString}</button>
                                      </Link>
                                  </div> 
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
       
  )
}

export default Header