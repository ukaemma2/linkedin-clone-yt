import { Avatar } from "@material-ui/core";
import React from "react";
import './sidebar.css';
import Bg from './assets/image/bg.jpg'
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

const Sidebar = () => {
  const user = useSelector(selectUser)
  const recentItem = (topic) => {
    return (
      <div className="sidebar_recentItem">
        <span className="sidebar_hashtag">#</span>
        <p>{topic}</p>
      </div>
    )
  }
  return (
    <div className="sidebar">
      <div className="sidebar_top">
        <img src={Bg} alt="bg" />
        <Avatar className="sidebar_avatar"/>
        <h2>{user.displayName}</h2> 
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar_stats">
        <div className="sidebar_stat">
          <p>Who viewed you</p>
          <p className="sidebar_statnumber">7,543</p>
        </div>
        <div className="sidebar_stat">
          <p>View on post</p>
          <p className="sidebar_statnumber ">2,448</p>
        </div>
      </div>
      <div className="sidebar_bottom">
        <p>Recent</p>
        {recentItem('Programming')}
        {recentItem('Developer')}
        {recentItem('Designers')}
        {recentItem('Js')}
        {recentItem('Next.js')}
        {recentItem('Coding')}
      </div>
    </div>
  )
}
export default Sidebar
