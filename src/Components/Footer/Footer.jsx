import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss';

const Footer = () => {
	return (
		<div id="footer">
			<div id="icons">
				<a
					href="https://www.instagram.com/streamlined_partners"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faInstagram} />
				</a>
				<a
					href="https://www.linkedin.com/company/streamlined-partners/about/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<FontAwesomeIcon icon={faLinkedin} />
				</a>
			</div>
			<div className="blurb">
				<p id="line1">Based in New York, NY</p>
				<p id="line2">Available anywhere virtually</p>
			</div>
		</div>
	);
};

export default Footer;
