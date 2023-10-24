import React, { useState, useEffect } from 'react';
import "./LoginCard.css"
export default function LoginCard({ setCredentials }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  useEffect(() => {

    console.log(email, password)
  }, [email, password])
  const loginClickHandler = (e) => {
    e.preventDefault();
    setCredentials({
      email,
      password
    });
    setEmail("");
    setPassword("")
  }
  return (
    <div className='login-container'>

<div className="main">
      <input type="checkbox" id="chk" aria-hidden="true" />
      <div className="signup">
        <form className='login-form'>
          <label htmlFor="chk" aria-hidden="true">Sign up</label>
          <input type="text" name="txt" placeholder="User name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="pswd" placeholder="Password" required />
          <button className='login-button'>Sign up</button>
        </form>
      </div>
      <div className="login">
        <form className='login-form'>
          <label htmlFor="chk" aria-hidden="true">Login</label>
          <input type="email" name="email" placeholder="Email" value={email} onChange={(e) => { setEmail(e.target.value) }} required />
          <input type="password" name="pswd" placeholder="Password" value={password} onChange={(e) => { setPassword(e.target.value) }} required />
          <button className='login-button' onClick={(e) => loginClickHandler(e)}>Login</button>
        </form>
      </div>
    </div>
    </div>
   
  );
}
