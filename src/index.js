import React from 'react';
import ReactDOM from 'react-dom/client';

function LoginForm(){
  return (<form>
    <label> username: <input type="text"></input></label>
    <label>Password:<input type="password"></input></label>
    <input type="submit" value="submit"></input>
  </form>)
}

const loginform = ReactDOM.createRoot(document.getElementById('loginform'));
loginform.render(
  <LoginForm/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
