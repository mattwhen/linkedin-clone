import React from 'react';
import profileIcon from './images/profileIcon.jpeg';
import './Avatar.css';

function Avatar({ width, height, title  }) {
	return (
		<div className='avatar'>
			<img src={profileIcon} alt='profile Icon' width={width} height={height} />
		</div>
	);
}

export default Avatar;
