import React from "react"
import "./Header.css"
import {Avatar} from '@material-ui/core'
import { useSelector } from "react-redux"
import { selectUser } from "./features/userSlice"

function HeaderOptions(props) {
    const {avatar, Icon, title, onClick} = props

    const user = useSelector(selectUser)
    return (
        <div className='headerOptions' onClick={onClick}>
            {Icon && <Icon  className="headerOptions_icon"/> }
            {avatar && (
                <Avatar className="headerOptions_icon" >{user?.email[0]}</Avatar>
            )}
            <h5 className="headerOption_title">{title}</h5>
        </div>
    ) 
}

export default HeaderOptions
