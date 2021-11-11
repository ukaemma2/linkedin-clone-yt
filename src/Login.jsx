import React, { useState } from "react"
import { useDispatch } from "react-redux";
import { login } from "./features/userSlice";
import { auth } from "./firebase";
import './Login.css'
const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [profilePic, setProfilePic] = useState('');
  const dispatch = useDispatch()

  const register = () => {
    if(!fullName) {
      return alert('Please enter a full name');
    }
    auth.createUserWithEmailAndPassword(email,password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: fullName,
        photoUrl: profilePic
      })
      .then(()=> {
        dispatch(login({
          email: userAuth.user.email,
          uid: userAuth.user.uid,
          displayName: fullName,
          photoUrl: profilePic
        }))
      })
    }).catch((error) => alert(error))
  };
  const loginForm = e => {
  e.preventDefault()
   auth.signInWithEmailAndPassword(email,password).then((userAuth) => {
     dispatch(login({
      email: userAuth.user.email,
      uid: userAuth.user.uid,
      displayName: userAuth.user.displayName,
      photoUrl: userAuth.user.photoURL,
     }))
   })
   
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
            placeholder="Full name required"
            value={fullName}
            required
            onChange={(e) => setFullName(e.target.value)}
          />
          <input 
            placeholder="Profile pic URL (optional)" 
            type="text"
            required
            value={profilePic}
            onChange={e => setProfilePic(e.target.value)}

          />
          <input 
            value={email}
            onChange={e => setEmail(e.target.value)}
            placeholder="Email" 
            type="email" 
            required
          />
          <input 
            placeholder="password" 
            type="password" 
            required
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <button onClick={loginForm}>Sign In</button>
          <p className>Not a member? {" "}
            <span className="login_registering" onClick={register}>Register Now</span>
          </p>
        </form>
    </div>
    </div>
  )
}
export default Login
