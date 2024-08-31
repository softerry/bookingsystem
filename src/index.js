import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'



// login form
function LoginForm(){
  return (<form action="">
    <h1>Signin</h1>
   <input type="text" placeholder="Email"></input>
    <input type="password" placeholder="Password"></input>
    <input type="submit" value="Sign In"></input>
  </form>)
}
// sign up function
function SignupForm(){
  return (<form action="">
    <h1>Sign up</h1>
    <input type="text" placeholder="Name"></input>
    <input type="email" placeholder="Email"></input>
    <input type="submit" value="sign up"></input>
  </form>)
}

// render sigin form to html
const loginForm = ReactDOM.createRoot(document.getElementById('loginForm'));
loginForm.render(
  <LoginForm/>
);

// render sign up form to html
const signupForm = ReactDOM.createRoot(document.getElementById('signupForm'))
signupForm.render(
  <SignupForm/>
)
