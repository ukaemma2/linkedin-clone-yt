import { Avatar } from "@material-ui/core"
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpOutlined } from "@material-ui/icons"
import React, { forwardRef } from "react"
import InputOption from "./InputOption"
import './Post.css'

const Post = forwardRef((props, ref) => {

    const {name, description, message, photoUrl} = props
    return (
        <div ref={ref} className="post">
            <div className="post_header">
                <Avatar src={photoUrl}>{name[0]}</Avatar>
                <div className="post_lafs">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>
            <div className="post_body">
                <p>{message}</p>
            </div>
            <div className="post_button">
                <InputOption Icon={ThumbUpOutlined}  title="like" color="gray"/>
                <InputOption Icon={ChatOutlined}  title="Comment" color="gray"/>
                <InputOption Icon={ShareOutlined}  title="Share" color="gray"/>
                <InputOption Icon={SendOutlined}  title="Send" color="gray"/>
            </div>
        </div>
    ) 
})

export default Post
