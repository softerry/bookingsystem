import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
// import Layout from './pages/Layout';
// import Home from "./pages/Home";


// export default function app(){
//   return (
//     <BrowserRouter>
//     <Routes>
//       <Route path='/' element={<Layout/>}>
//       <Route  index element= {<Home />} />
//       <Route path="Loginform" element={<Loginform/>}/>
//       </Route>
//     </Routes>
//     </BrowserRouter>
//   )
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<app/>);

//login form
function LoginForm(){
  return (<form action="">
    <h1>Login</h1>
    <div class="social-container">
    <a href="#" class="social-icon"><FontAwesomeIcon icon={(faGoogle)}/></a>
    <a href="#" class="social-icon"><FontAwesomeIcon icon={(faFacebook)}/></a>
    </div>
   <input type="text" placeholder="Email" required></input>
    <input type="password" placeholder="Password" required></input>
   <label><input type="checkbox"></input>Remember me</label> 
    <a href='#' class="forget-password">Forget Password</a>
    <input type="submit" value="Sign In"></input>

  </form>)
  }
  
  // render sigin form to html
  const loginForm = ReactDOM.createRoot(document.querySelector('#loginForm'));
  loginForm.render(
    <LoginForm/>
  );
  
