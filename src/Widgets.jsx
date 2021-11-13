import { FiberManualRecord, Info } from "@material-ui/icons"
import React from "react"
import "./Header.css"



const  Widgets = () => {

  const newsArticle = (heading, subTitle) => {
    return (
      <div className="widgets_article">
        <div className="widgets_article_left">
          <FiberManualRecord />
        </div>
        <div className="widgets_article_right">
          <h4>{heading}</h4>
          <p>{subTitle}</p>
        </div>
      </div>

    )
  }

  return (
    <div className="widgets">
      <div className="widgets_header">
        <h2>Linkedin News</h2>
        <Info />
      </div> 
      {newsArticle(" PAPA Emmanuel is back!", ' check it out.')}
      {newsArticle(" PAPA Emeke is back!", ' check it out.')}
      {newsArticle(" PAPA Prince is back!", ' check it out.')}
      {newsArticle(" PAPA Chika is back!", ' check it out.')}
      {newsArticle(" PAPA Tase is back!", ' check it out.')}
      {newsArticle(" PAPA Michael is back!", ' check it out.')}
      {newsArticle(" PAPA Chinoso is back!", ' check it out.')}
      {newsArticle(" PAPA Wget is back!", ' check it out.')}
      {newsArticle(" PAPA QQw is back!", ' check it out.')}
   
    </div>
  )
}

export default Widgets
