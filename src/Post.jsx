import { Avatar } from "@material-ui/core"
import { ChatOutlined, SendOutlined, ShareOutlined, ThumbUpOutlined } from "@material-ui/icons"
import React from "react"
import InputOption from "./InputOption"
import './Post.css'

const Post = (props) => {

    const {name, description, message, photoUrl} = props
    return (
        <div className="post">
            <div className="post_header">
                <Avatar />
                <div className="post_lafs">
                    <h2>Emmydon</h2>
                    <p>Description</p>
                </div>
            </div>
            <div className="post_body">
                <p>Message goes here</p>
            </div>
            <div className="post_button">
                <InputOption Icon={ThumbUpOutlined}  title="like" color="gray"/>
                <InputOption Icon={ChatOutlined}  title="Comment" color="gray"/>
                <InputOption Icon={ShareOutlined}  title="Share" color="gray"/>
                <InputOption Icon={SendOutlined}  title="Send" color="gray"/>
            </div>
        </div>
    ) 
}

export default Post
