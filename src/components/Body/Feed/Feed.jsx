// @ts-ignore
import React,{useEffect, useState} from 'react'
// @ts-ignore
import CreateIcon from '@mui/icons-material/Create'
// @ts-ignore
import ImageIcon  from '@mui/icons-material/Image'
// @ts-ignore
import  SubscriptionsIcon  from '@mui/icons-material/Subscriptions'
// @ts-ignore
import EventNoteIcon from '@mui/icons-material/EventNote'
// @ts-ignore
import CalendarViewDayIcon from '@mui/icons-material/CalendarViewDay'
import './Feed.css'
import InputOption from './InputOption'
import Post from '../Post/Post';
import { firebase,db }  from '../../../firebase'



// import { selectUser } from '../../../features/userSlice';


function Feed() {
    const [input, setInput] = useState("")
    const [posts,setPosts] = useState([]);

    useEffect(() => {
        db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
            setPosts (
                snapshot.docs.map((doc) => ({
                  id:doc.id,
                  data: doc.data(),  
                }))
            )
        )    
    }, [])
    const sendPost = (e) => {
        e.preventDefault();
        db.collection('posts').add({
            name: 'Sajib ',
            description: 'this is a test',
            message: input,
            photoUrl: "",
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        })
        
    }
    
    return (
        <div className="feed">
            <div className="feed_inputContainer">
                 <div className="feed_input">
                    <CreateIcon/>
                    <form>
                    <input value={input} onChange={e => setInput(e.target.value)} type="text"/>
                        <button onClick={sendPost}  type="submit">Send</button>
                    </form>
                 </div>
                  <div className="feed_inputOptions">
                    <InputOption Icon= {ImageIcon} title='Photo' color="#7085F9"/>
                    <InputOption Icon= {SubscriptionsIcon} title='Video' color="#7085F9"/>
                    <InputOption Icon= {EventNoteIcon} title='Event' color="#7085F9"/>
                    <InputOption Icon= {CalendarViewDayIcon} title='Write article' color="#7085F9"/>
                 </div>
            </div>
            
                {posts.map(({ id, data: { name, description, message, photoUrl}}) =>(
                    <Post 
                        key={id}
                        name={name}
                        description={description}
                        message={message}
                        photoUrl={photoUrl}
                    />
                ))}
               
           
        </div>
    )
}

export default Feed
