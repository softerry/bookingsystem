import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
      <h1>Signin</h1>
     <input type="text" placeholder="Email"></input>
      <input type="password" placeholder="Password"></input>
     <label><input type="checkbox"></input>Remember me</label> 
      <a href='#'>Forget Password</a>
      <input type="submit" value="Sign In"></input>
    </form>)
  }


  // render sigin form to html
  const loginForm = ReactDOM.createRoot(document.querySelector('#loginForm'));
  loginForm.render(
    <LoginForm/>
  );
  
