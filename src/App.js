import React from 'react';
import Feed from './Feed';
import Header from './header';
import SideBar from './Sidebar.jsx'


function App() {
  return (
    <div className="app">
      
      <Header/>
      {/* app body */}
      <div className="app_body">
        <SideBar />

      {/* Fead */}
      <Feed />

      {/*  widget */}
      </div>

     
    </div>
  );
}

export default App;
