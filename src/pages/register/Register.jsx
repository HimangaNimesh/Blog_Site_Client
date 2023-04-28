import React from 'react'
import './register.css'

export default function Register() {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>User Name</label>
            <input type="text" placeholder='Enter your User name...' className='registerInput'/>
            <label>Email</label>
            <input type="text" placeholder='Enter your Email...' className='registerInput'/>
            <label>Password</label>
            <input type="password" placeholder='Enter your Password...' className='registerInput'/>
            <button className="registerButton">Register</button>
        </form>
        <button className="registerLoginButton">Login</button>
    </div>
  )
}
