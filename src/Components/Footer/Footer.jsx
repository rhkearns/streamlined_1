import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faFacebookF,
	faTwitter,
	faLinkedinIn,
	faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => {
	return (
		<div id="footer">
			<div id="icons">
				<FontAwesomeIcon icon={faInstagram} />
				<FontAwesomeIcon icon={faLinkedin} />
			</div>
			<div className="blurb">
				<p id="line1">Based in New York, NY</p>
				<p id="line2">Avaiable anywhere virtually</p>
			</div>
		</div>
	);
};

export default Footer;
