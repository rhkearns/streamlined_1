import React from 'react';
import './Header.scss';
import icon from '../../images/Icon.png';
import logoText from '../../images/Logo_Text.png';
import streamlined from '../../images/Streamline_Tight.png';
import partners from '../../images/Partners_Tight.png';

const Header = () => {
	return (
		<div id="header">
			<img src={icon} alt="Streamlined Partners Logo" id="icon" />
			{/* <img src={logoText} alt="Streamlined Partners" id="logoText"/> */}
			<div id="title">
				<img src={streamlined} alt="Streamlined" id="streamlined" />
				<img src={partners} alt="Partners" id="partners" />
			</div>
		</div>
	);
};

export default Header;
