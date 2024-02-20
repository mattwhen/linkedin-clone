import { useState } from 'react';
import Post from './Post';
import CreateIcon from '@mui/icons-material/Create';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArticleIcon from '@mui/icons-material/Article';

export default function Feed() {
  const [posts, setPosts] = useState([]);


	const sendPost = (e) => {
		e.preventDefault();
	}

	return (
		<div className='feed'>
			<div className='feed_inputContainer'>
				<div className='feed_input'>
					<CreateIcon />
					<form>
						<input type='text' />
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
