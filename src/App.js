import React, { useEffect } from 'react';
import Feed from './Feed.jsx';
import Login from './Login.jsx';
import Header from './header';
import SideBar from './Sidebar.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from "./features/userSlice";
import { auth } from './firebase.js';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
      if(userAuth) {
        dispatch( 
          login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoUrl
        }))
      }
    })
  }, [])
  return (
    <div className="app">
      
      <Header/>
      {!user? (<Login />
        ) : (
        <div className="app_body">
        <SideBar />
        <Feed />
        </div>

        )}
      
     
    </div>
  );
}

export default App;
