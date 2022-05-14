import React from 'react';
import './Header.scss';
import icon from '../../images/Icon.png';
import streamlined from '../../images/Streamline_Tight.png';
import partners from '../../images/Partners_Tight.png';
import logo from '../../images/full_logo.png'

const Header = () => {
	return (
		<div id="header">
			{/* <img src={icon} alt="Streamlined Partners Logo" id="icon" />
			<div id="title">
				<img src={streamlined} alt="Streamlined" id="streamlined" />
				<img src={partners} alt="Partners" id="partners" />
			</div> */}
			<img src={logo} alt="Streamlined Partners" id="logo"/>
		</div>
	);
};

export default Header;
