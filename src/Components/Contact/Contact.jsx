import React from 'react';
import './Contact.scss';

const Contact = () => {
	return (
		<div className="contact-section">
			<h1 id="contact-header">Contact Us</h1>
			<div id="contact-blurb">
				<p>
					Want more information? Want to get started but don't know where to
					start?
				</p>
				<p>
					We're not coaches, we aren't going to give you a free worksheet "3
					tricks to staying organized." We will sit down with you and go over
					your business and figure out what we can do to help you get and stay
					on track. Our consultation is free, and we will create a plan based on
					your needs. Set up your consultation today to get started!
				</p>
				<p>
					Contact us by filling out the{' '}
					<a
						href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
						target="_blank"
						rel="noopener noreferrer"
					>
						{' '}
						form here
					</a>{' '}
					or emailing us at{' '}
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
	);
};

export default Contact;

// src="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
