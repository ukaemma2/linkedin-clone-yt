import React from "react"
import './Login.css'
const Login = () => {
  const register = () => {

  };
  const login = () => {

  };
  return (
    <div>
      <div className="login">
      <img 
        className='linkedinImage' 
        src="https://news.hitb.org/sites/default/files/styles/large/public/field/image/500px-LinkedIn_Logo.svg__1.png" 
          alt="Linkedin"
        />
        <form action="" >
          <input  
            type="text"
            placeholder="Full name required if registering"
          />
          <input placeholder="Profile pic URL (optional)" type="text" />
          <input placeholder="Email" type="email" />
          <input placeholder="password" type="password" />
          <button onClick={login}>Sign In</button>
          <p className>Not a member? {" "}
            <span className="login_registering" onClick={register}>Register Now</span>
          </p>
        </form>
    </div>
    </div>
  )
}
export default Login
