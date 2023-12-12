import React, {  useState,useEffect } from "react";
import '../Layout/Header/Header.css';
import { useDispatch,useSelector } from "react-redux";
import { Link,  useNavigate } from 'react-router-dom'
import MegaMenu from './MegaMenu/MegaMenu'
import { auth } from "../../firebase";
import { login,logout,selectUser } from "../../features/userSlice";
import Landing from "../../pages/Landing/Landing";

function Layout() {
      const navigate = useNavigate();
      const user = useSelector(selectUser);
      
      const dispatch = useDispatch();
      
      useEffect(() => {
      auth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
          //user is logged in
          dispatch(
            login({
              email: userAuth.email,
              uid: userAuth.uid,
              displayName: userAuth.displayName,
              photoUrl: userAuth.photoURL,
            })
          );

        }
         else {
          //user is logged out
          dispatch(logout());
        }
      });
      },
        []  );
        
      const logoutOfApp = () => {
        dispatch(logout());
        auth.signOut();
        navigate('/');window.location.href = '/';
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
                                  <Link to={'/'} className='loged_user_icon' onClick={logoutOfApp} > {user.email}</Link>
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