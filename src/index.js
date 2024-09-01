import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



// login form
function LoginForm(){
  return (<form action="">
    <h1>Signin</h1>
   <input type="text" placeholder="Email"></input>
    <input type="password" placeholder="Password"></input>
   <label><input type="checkbox"></input>Remember me</label> 
    <a href='#'>Forget Password</a>
    <input type="submit" value="Sign In"></input>
  </form>)
}
// sign up function
function SignupForm(){
  return (<form action="">
    <h1>Create Account</h1>
    <span>or sign up with your email</span>
    <input type="text" placeholder="Name"></input>
    <input type="email" placeholder="Email"></input>
    <input type="password" placeholder="password"></input>
    <input type="submit" value="sign up"></input>
  </form>)
}
function OverFlowLeft(){
 return(
<div>
  <h1>Welcome back</h1>
  <p>To book your appointment please login</p>
  <button class="ghost" id="sigIn">SignIn</button>
</div>
 )
};

function OverFlowRight(){
  return(
  <div>
  <h1>Welcome</h1>
  <p>New Member please create an account</p>
  <button class="ghost" id="sigIn">Sign Up</button>
</div>
  )
 };

// render sigin form to html
const loginForm = ReactDOM.createRoot(document.querySelector('#loginForm'));
loginForm.render(
  <LoginForm/>
);

// render sign up form to html
const signupForm = ReactDOM.createRoot(document.querySelector('#signupForm'))
signupForm.render(
  <SignupForm/>
)

const flowleft = ReactDOM.createRoot(document.querySelector('.overlay-left'))
flowleft.render(
  <OverFlowLeft/>
)

const flowright = ReactDOM.createRoot(document.querySelector('.overlay-right'))
flowright.render(
  <OverFlowRight/>
)

