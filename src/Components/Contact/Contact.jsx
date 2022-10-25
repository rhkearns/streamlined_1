import React from 'react';
import { Link } from 'react-router-dom';
import './Contact.scss';
import contactUs from '../../images/contact-us.jpg';
import techicons from '../../images/tech icons.jpg';

const Contact = () => {
	return (
		// <div className="outer-section">
		<div className="details-section">
			<h2 id="details-header">Work with us</h2>
			<div id="details-blurb">
				<div class="word-side-details">
					<p>
						Check out our packages, which can be{' '}
						<Link to={'/packages'}>found here</Link>.
					</p>
					<p>Need more information?</p>
					<p>Want to get started but don't know where to begin?</p>
					<p>
						Does hearing things like work management systems, CRM, and cloud
						storage stress you out?
					</p>
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
				<div className="img-div-details">
					<img src={techicons} alt="tech" id="tech" />
				</div>
			</div>
		</div>
		// </div>
	);
};

export default Contact;

// src="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
