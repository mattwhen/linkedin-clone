import Avatar from './Avatar';
import InputOption from './InputOption';
import './Post.css';

import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import RepeatOutlinedIcon from '@mui/icons-material/RepeatOutlined';
import SendIcon from '@mui/icons-material/Send';

function Post({ name, description, message, photoURL }) {
	return (
		<div className='post'>
			<div className='post_header'>
				<Avatar width={50} height={50} />
				<div className='post_info'>
					<h2>{name}</h2>
					<p>{description}</p>
				</div>
			</div>

			<div className='post_body'>
				<p>
					{message}
				</p>
			</div>

			<div className='post_buttons'>
				<InputOption Icon={ThumbUpOffAltIcon} title='Like' color='gray' />
				<InputOption Icon={ModeCommentOutlinedIcon} title='Comment' color='gray' />
				<InputOption Icon={RepeatOutlinedIcon} title='Repost' color='gray' />
				<InputOption Icon={SendIcon} title='Send' color='gray' />
			</div>
		</div>
	);
}

export default Post;
