import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'

function Login() {

  const [signState, setSignState] = useState('Login');
  return (
    <div className='login'>
      <img className='login-logo' src={logo} alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>
          {signState === "Register"?<input name='user-name' type="text" placeholder='Your name' />:<></>}
          
          <input name='email' type="email" placeholder='Your email' />
          <input name='password' type="password" placeholder='Password' />
          <button>{signState}</button>
          <div className="form-help">
            <div className="remember">
              <input name='checkbox' type="checkbox" />
              <label htmlFor="">Remember Me</label>
            </div>
            <p>Need Help?</p>
          </div>
        </form>
        <div className="form-switch">
          {signState === "Login"?<p>New to Netflix? <span onClick={() => {setSignState("Register")}}>Register Now</span></p>:<p>Already have account? <span onClick={() => {setSignState("Login")}}>Login</span></p>}
          
         
        </div>
      </div>
    </div>
  )
}

export default Login
