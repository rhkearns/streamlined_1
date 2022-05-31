import React from 'react';
import './Header.scss';
import logo from '../../images/full_logo_onWhite.png';

const Header = () => {
	return (
		<div id="header">
			<img src={logo} alt="Streamlined Partners" id="logo" />
		</div>
	);
};

export default Header;
