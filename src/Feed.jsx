import React, {useState, useEffect} from "react";
import './Feed.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {
    Create,
    Image,
    Subscriptions,
    EventNote,
    CalendarViewDay
} from '@material-ui/icons';
import InputOption from './InputOption';
import Post from './Post';
import { db } from  './firebase';
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";
import FlipMove from "react-flip-move";


const Feed = () => {
    
    const  [input, setValue]  = useState('');
    const  [posts, setPosts]  = useState([]);
    const user = useSelector(selectUser)
 
    useEffect(() => {
       db.collection('posts')
        .orderBy('timestamp', 'desc') // append at the top
        .onSnapshot((snapshot) => {
            setPosts(
                snapshot.docs && snapshot.docs.map(doc => {
                   return {id: doc.id, data: doc.data()}
                })
            );
        });
    }, []);
    const sendPost = (e) => {
        e.preventDefault()
        db.collection('posts').add({
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        });
        setValue('')
    }
    const handleChange = e => {
		setValue(e.target.value)
	}
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <Create />
                    <form action="">
                        <input 
                            value={input} 
                            onChange={handleChange} type="text" 
                        />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOption">
                    <InputOption Icon={Image} title="Photo" color="#70B5F9" />
                    <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNote} title="Event" color="#COCBCD" />
                    <InputOption Icon={CalendarViewDay} title="Write article" color="#7FC15E" />
                </div>
            </div>
            <FlipMove>
                {posts && posts.map(({id, data: {name, description, message, photoUrl}}) => {
                return  <Post 
                    key={id}
                    name={name}
                    description={description}
                    message={message}
                    photoUrl={photoUrl}
                />
                })}
            </FlipMove> 
            
        </div>
    )
}

export default Feed