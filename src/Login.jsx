import React from "react"
import './Login.css'

const Login = () => {
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
        </form>
    </div>
    </div>
    
  )
}

export default Login
