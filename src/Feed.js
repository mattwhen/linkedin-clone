import CreateIcon from '@mui/icons-material/Create';
import './Feed.css';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ArticleIcon from '@mui/icons-material/Article';

export default function Feed() {
  return (
    <div className='feed'>
      <div className='feed_inputContainer'>
        <div className='feed_input'>
            <CreateIcon />
            <form>
              <input type='text' />
              <button type='submit'>Send</button>
            </form>
        </div>
        <div className='feed_inputOptions'>
          {/* Input option */}
          <InputOption Icon={ImageIcon} title='Photo' color="#70B5F9" />
          <InputOption Icon={BusinessCenterIcon} title='Work' color="#a871ea" />
          <InputOption Icon={ArticleIcon} title='Write Article' color="#e06847" />
        </div>
      </div>
    </div>
  );
}
