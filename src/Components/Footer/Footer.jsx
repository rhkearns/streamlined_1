import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faInstagram,
	faFacebookF,
	faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => {
	return (
		<div id="footer">
			<div className="blurb">
				<p>Based in New York, NY</p>
				<p>Avaiable anywhere virtually</p>
			</div>
			<div id="icons">
				<FontAwesomeIcon icon={faInstagram} />
				<FontAwesomeIcon icon={faFacebookF} />
				<FontAwesomeIcon icon={faTwitter} />
			</div>
		</div>
	);
};

export default Footer;
