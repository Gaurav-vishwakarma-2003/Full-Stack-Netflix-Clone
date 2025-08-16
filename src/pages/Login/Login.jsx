import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login, signup, } from '../../firebase';

function Login() {

  const [signState, setSignState] = useState('Login');
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user_auth = async (event) => {
    event.preventDefault();
    if(signState === "Login") {
      await login(email,password);
    }else {
      await signup(name,email, password)
    }
  }

  return (
    <div className='login'>
      <img className='login-logo' src={logo} alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form>

          {signState === "Register"?<input value={name} onChange={(e)=>{setName(e.target.value)}} 
          name='user-name' type="text" placeholder='Your name' />:<></>}
          
          <input value={email} onChange={(e)=>{setEmail(e.target.value)}} 
          name='email' type="email" placeholder='Your email' />

          <input value={password} onChange={(e)=>{setPassword(e.target.value)}} 
          name='password' type="password" placeholder='Password' />

          <button onClick={user_auth} type='submit'>{signState}</button>


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
