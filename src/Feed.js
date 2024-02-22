import { useState, useEffect } from 'react';
import Post from './Post';
import CreateIcon from '@mui/icons-material/Create';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArticleIcon from '@mui/icons-material/Article';
import { db } from './firebase.js';

// To create or overwrite a single document, use the following language-specific set() methods:
import { collection, addDoc, getDocs, setDoc, doc } from 'firebase/firestore';

export default function Feed() {
	const [posts, setPosts] = useState([]);
	const [input, setInput] = useState('');

	useEffect(() => {
		
	})

	// Add to our database
	const addUserData = async () => {
		try {
			const docRef = await addDoc(collection(db, 'posts'), {
				first: 'Matthew',
				last: 'Nguyen',
				born: 1995,
				isAwesome: true,
				message: input,
			});
			console.log('Document written with ID: ', docRef.id, docRef.posts);
			
		} catch (e) {
			console.error('Error adding document: ', e);
		}
	};

	// Get Post data
	const getPost = async() => {
		const querySnapshot = await getDocs(collection(db, "posts"));
		querySnapshot.forEach((doc) => doc.data().message);
	}

	getPost();



	const sendPost = (e) => {
		e.preventDefault();

		addUserData();
		setInput('');
		console.log('Doc added:');
	};


	return (
		<div className='feed'>
			<div className='feed_inputContainer'>
				<div className='feed_input'>
					<CreateIcon />
					<form>
						<input
							type='text'
							value={input}
							onChange={(e) => setInput(e.target.value)}
						/>
						<button onClick={sendPost} type='submit'>
							Send
						</button>
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
			
		</div>
	);
}
