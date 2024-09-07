//components
import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEye } from '@fortawesome/free-regular-svg-icons';
import { faEyeSlash } from '@fortawesome/free-regular-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';





//login form
function LoginForm(){
   // create three states
const [password, setPassword] = useState("");
const [type, setType] = useState('password');
const [icon, setIcon] = useState(faEyeSlash);

const PasswordToggle = () =>{
  // function that handle password(eye off icon) and show password (eye icon)
   if(type ==='password'){
     setIcon(faEye);
     setType('text')
   }else{
     setIcon(faEyeSlash)
     setType('password');
   }
  }
  
  return (<form action="">
    <h1>Login</h1>
    <div class="social-container">
    <a href="#" class="social-icon"><FontAwesomeIcon icon={(faGoogle)}/></a>
    <a href="#" class="social-icon"><FontAwesomeIcon icon={(faFacebook)}/></a>
    </div>
    <div class="input-icons">
    <span class="icon"><FontAwesomeIcon icon={(faEnvelope)}/></span>
    <input type="text" placeholder="Email" required></input>
    </div>
{/* onclick function is applied to the span element and also access the icon to icon instand of putting faEye or faEyeslash */}
  <div class="input-icons">
  <span class="icon"><FontAwesomeIcon icon={icon} onClick={PasswordToggle}/></span>
    {/* // create event to change the password to text  */}
      <input class="password-icon" type={type} placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} autoComplete='password'required></input>
    
    
   </div>

    <div class="submit-container">
    <label><input type="checkbox"></input>Remember me</label> 
    <a href='#' class="forget-password">Forget Password</a>
    <input type="submit" value="Sign In"></input>
    </div>
    
  </form>)
  }
 
  // render sigin form to html
  const loginForm = ReactDOM.createRoot(document.querySelector('#loginForm'));
  loginForm.render(
    <LoginForm/>
  );
  