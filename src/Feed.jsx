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
} from '@material-ui/icons'
import InputOption from './InputOption'
import Post from './Post';
import { db } from  './firebase';


const Feed = () => {
    const {input, setInput} = useState('')
    const {posts, setPost} = useState([])
 
    useEffect(() => {
        db.collection('posts').onSnapshot(snapshot =>
            setPost(
                snapshot.docs && snapshot.docs.map(doc => ({
                    id: doc.id,
                    data: doc.data()
                }))
            )
        )
        db.collection("posts").where("posts", "==", true)
            .get()
            .then((querySnapshot) => {
               setPost( querySnapshot.forEach((doc) => {
                  
            })) 
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });
    }, [setPost])
    const sendPost = (e) => {
        e.preventDefault()
        db.collection('posts').add({
            name: 'Ukah Emmanuel Ogbonna',
            description: 'This is test',
            message: input,
            photoUrl: '',
            timestamp: firebase.firestore.FieldValue.serverTimestamp()
        })
    }
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <Create />
                    <form action="">
                        <input value={input} onChange={(e) => setInput(e.target.value)} type="text" />
                        <button onClick={sendPost} type="submit">Send</button>
                    </form>
                </div>
                <div className="feed_inputOption">
                    <InputOption Icon={Image} title="Photo" color="#70B5F9" />
                    <InputOption Icon={Subscriptions } title="Video" color="#E7A33E" />
                    <InputOption Icon={EventNote} title="Event" color="#COCBCD" />
                    <InputOption Icon={CalendarViewDay} title="Write article" color="#7FC15E" />
                </div>
            </div>
            post
            {posts && posts.map(({id, data: {name, description, message, photoUrl}}) => {
              return  <Post 
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
              />
            })}
            <Post 
                name="Ukah Emmanuel Ogbonna" 
                description="This is a test"
                message="We want this to workout for us"
            />
        </div>
    )
}

export default Feed
