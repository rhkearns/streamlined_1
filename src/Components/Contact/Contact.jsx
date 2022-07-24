import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';
import contactUs from '../../images/contact-us.jpg'

const Contact = () => {
	return (
		<div className="outer-section">
			<div className="contact-section">
				<h1 id="contact-header">Contact Us</h1>
				<div id="contact-blurb">
					<p>
						Want more information? Want to get started but don't know where to
						begin?
					</p>
					<Link to={'/packages'}><p id="package-link">Click here to view packages, starting at $495.</p></Link>
					<p>
						Contact us today to schedule a free consultation where we will sit
						down with you and create a plan based on your needs.
					</p>
					<p>
						Fill out this{' '}
						<a
							href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
							target="_blank"
							rel="noopener noreferrer"
						>
							{' '}
							contact form
						</a>{' '}
						or email us at{' '}
						<a
							href="mailto:info@streamlinedpartners.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							{' '}
							info@streamlinedpartners.com.
						</a>
					</p>
				</div>
			</div>
				<img src={contactUs} alt="hands" id="hands"/>
		</div>
	);
};

export default Contact;

// src="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
