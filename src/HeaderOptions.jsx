import React from "react"
import "./Header.css"
import {Avatar} from '@material-ui/core'

function HeaderOptions(props) {
    const {avatar, Icon, title} = props
    return (
        <div className='headerOptions'>
            {Icon && <Icon  className="headerOptions_icon"/> }
            {avatar && (
                <Avatar className="headerOptions_icon" src={avatar}/>
            )}
            <h5 className="headerOption_title">{title}</h5>
        </div>
    ) 
}

export default HeaderOptions
