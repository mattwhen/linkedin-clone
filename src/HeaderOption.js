import React from 'react';
import './HeaderOption.css';

function HeaderOption({ avatar, Icon, title }) {
	return (
		<div className='headerOption'>
			{Icon && <Icon className='headerOption_icon' />}
			<h3>{title}</h3>
		</div>
	);
}

export default HeaderOption;
