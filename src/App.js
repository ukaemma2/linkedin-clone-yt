import React, { useEffect } from 'react';
import Feed from './Feed.jsx';
import Login from './Login.jsx';
import Header from './header';
import SideBar from './Sidebar.jsx'
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from "./features/userSlice";
import { auth } from './firebase.js';
import  Widgets  from './Widgets.jsx';



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
            photoUrl: userAuth.photoURL
        }))
      }else{
        dispatch(logout())
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
        <Widgets />
        </div>

        )}
      
     
    </div>
  );
}

export default App;
