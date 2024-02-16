import React from 'react';
import './Sidebar.css';
import Avatar from './Avatar';
import BackgroundImage from './images/White Minimalist Corporate Personal Profile LinkedIn Banner.png';

function Sidebar() {
	const recentItem = (topic) => (
		<div className='sidebar_recentItem'>
			<span className='sidebar_hash'>#</span>
			<p>{topic}</p>
		</div>
  )

	return (
		<div className='sidebar'>
			<div className='sidebar_top'>
				<img src={BackgroundImage} alt='' />
				<Avatar width={64} height={64} className='sidebar_avatar' />
				<h2>Matthew Nguyen</h2>
				<h4>matt@mattwhen.com</h4>
			</div>
			<div className='sidebar_stats'>
				<div className='sidebar_stat'>
					<p>Profile viewers</p>
					<p className='sidebar_statnumber'>1474</p>
				</div>
				<div className='sidebar_stat'>
					<p>Post impressions</p>
					<p className='sidebar_statnumber'>5174</p>
				</div>
			</div>
			<div className='sidebar_bottom'>
				<p>Recent</p>
				{recentItem('reactjs')}
				{recentItem('programming')}
				{recentItem('softwaredev')}
				{recentItem('design')}
				{recentItem('developer')}
			</div>
		</div>
	);
}

export default Sidebar;
