import React, {useState} from "react";
import './Feed.css'
import {
    Create,
    Image,
    Subscriptions,
    EventNote,
    CalendarViewDay
} from '@material-ui/icons'
import InputOption from './InputOption'
import Post from './Post'

const Feed = () => {
    const {post, setPost} = useState([])
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <Create />
                    <form action="">
                        <input type="text" />
                        <button type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOption">
                    <InputOption Icon={Image} title="Photo" color="#70B5F9" />
                    <InputOption Icon={Subscriptions } title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNote} title="Event" color="#COCBCD" />
                    <InputOption Icon={CalendarViewDay} title="Write article" color="#7FC15E" />
                </div>
            </div>
            {/* post */}
            <Post 
                name="Ukah Emmanuel Ogbonna" 
                description="This is a test"
                message="We want this to workout for us"
            />
        </div>
    )
}

export default Feed
