import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import logo from '../../images/full_logo_onWhite.png';

const Header = () => {
	return (
		<div id="header">
			<Link to={'/'}>
				<img src={logo} alt="Streamlined Partners" id="logo" />
			</Link>
			
		</div>
	);
};

export default Header;
