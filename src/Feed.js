import { useState, useEffect } from 'react';
import Post from './Post';
import CreateIcon from '@mui/icons-material/Create';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArticleIcon from '@mui/icons-material/Article';
import { db } from './firebase.js';

import { collection, addDoc } from 'firebase/firestore'



export default function Feed() {
  const [posts, setPosts] = useState([]);
  const [input, setInput] = useState('');


  useEffect(() => {
	const addUserData = async () => {
	  try {
		const docRef = await addDoc(collection(db, "users"), {
		  first: "Ada",
		  last: "Lovelace",
		  born: 1815, 
		  message: input,
		});
		console.log("Document written with ID: ", docRef.id);
	  } catch (e) {
		console.error("Error adding document: ", e);
	  }
	};
  
	addUserData(); // Invoke the async function
  }, []);
  
	

	// useEffect(() => {
	// 	// Connect to Firebase
	// 	db.collection("posts").onSnapshot(snapshot => (
	// 		setPosts(snapshot.docs.map((doc) => (
	// 			{
	// 				id: doc.id,
	// 				data: doc.data(),
	// 			}
	// 		)))
	// 	))
	// }, [])

		// Add to our database
		const addUserData = async () => {
			try {
			  const docRef = await addDoc(collection(db, "users"), {
				first: "Ada",
				last: "Lovelace",
				born: 1815,
				message: input,
			  });
			  console.log("Document written with ID: ", docRef.id, docRef.message);
			  
			} catch (e) {
			  console.error("Error adding document: ", e);
			}
		  };

	const sendPost = (e) => {
		e.preventDefault();
		addUserData();
		console.log("Doc added:");
	}

	return (
		<div className='feed'>
			<div className='feed_inputContainer'>
				<div className='feed_input'>
					<CreateIcon />
					<form>
						<input type='text' value={input} onChange={e => setInput(e.target.value)} />
						<button onClick={sendPost} type='submit'>Send</button>
					</form>
				</div>
				<div className='feed_inputOptions'>
					{/* Input option */}
					<InputOption Icon={ImageIcon} title='Photo' color='#70B5F9' />
					<InputOption Icon={BusinessCenterIcon} title='Work' color='#a871ea' />
					<InputOption
						Icon={ArticleIcon}
						title='Write Article'
						color='#e06847'
					/>
				</div>
			</div>
			{posts.map((post) => (
				<Post />
			))}
			<Post
				name='Matthew Nguyen'
				description='this is a test'
				message='Wow this worked'
			/>
		</div>
	);
}
