import React, {  useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../../firebase";
import "./Login.css";
import { login } from "../../../features/userSlice";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {LoginService } from '../../../services/LoginServiceContext'
// import {EncryptionDescryptionService} from '../../../services/encryptiondecryptionService'
const Login: React.FC<{children: React.ReactNode}> =() =>{
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const loginService =new LoginService();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const encryptionService = new EncryptionDescryptionService();

  const register = () => {
    if (!name) {
      return alert("Please enter a full name");
    }
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((userAuth) => {
        userAuth.user
          .updateProfile({
            displayName: name,
            photoURL: profilePic,
          })
          .then(() => {
            dispatch(
              login({
                email: userAuth.user.email,
                uid: userAuth.user.uid,
                displayName: name,
                photoUrl: profilePic,
              })
            ); navigate("/");
          });
      })
      .catch((error) => alert(error));
  };

  const loginToApp = async (e: React.MouseEvent<HTMLButtonElement>) =>
   {
          e.preventDefault();
          // const loginData = {
          //   username: await encryptionService.encryptData(name),
          //   password: await encryptionService.encryptData(password),
          // };
          const loginData = {
            username: name,
            password: password,
          };
          console.log(loginData);
          try {
                
              await loginService.authenticate(loginData);
              // await getMenuData();
              console.log('Yeay loggedin!');
              navigate('/');
          }
          catch(error)
          {
            console.log(error.message); 
          }


          // auth
          //   .signInWithEmailAndPassword(email, password)
          //   .then((userAuth) => {
          //     dispatch(
          //       login({
          //         email: userAuth.user.email,
          //         uid: userAuth.user.uid,
          //         displayName: userAuth.user.displayName,
          //         profileUrl: userAuth.user.photoURL,
          //       })
          //     ); navigate("/"); 
          //   })
          //   .catch((error) => alert(error));
            
  };


  return (
    <div className="login">
        <Link to="#" className="flex items-center">
          <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </Link>
      <br /> 
      <form>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Full name (required if registering)"
          type="text"
        />
        <input
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
          placeholder="Profile pic URL (optional)"
          type="text"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          type="email"
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button className="login__register" onClick={loginToApp}>
          Sign In
        </button>
      </form>
      <p>
        Not a member?{" "}
        <span className="login__register" onClick={register}>
          Register now
        </span>
      </p>
    </div>
  );
};

export default Login;


