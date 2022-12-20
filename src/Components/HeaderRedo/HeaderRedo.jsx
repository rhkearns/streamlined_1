import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderRedo.scss';
import logo from '../../images/logo_new.png';

const HeaderRedo = () => {
	return (
		<div id="header-section">
			<ul id="header-links">
				<li className='links'>
					<Link to="/">Home</Link>
				</li>
				<li className='links'>
					<Link to="/about">About</Link>
				</li>
			</ul>
			<img src={logo} alt="Streamlined Partners" id="logo" />
			<button id="header-button">
				<a
					id="button-text"
					href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
					target="_blank"
					rel="noopener noreferrer"
				>
					Contact Us
				</a>
			</button>
		</div>
	);
};

export default HeaderRedo;
