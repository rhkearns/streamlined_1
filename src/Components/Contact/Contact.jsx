import React from 'react';
import './Contact.scss';

const Contact = () => {
	return (
		<div>
			<div id="contact-header">
				<h1>Contact Us</h1>
				<div id="contact-blurb">
					<p>
						Want more information? Want to get started but don't know where to
						start?
					</p>
					<p>
						We're not coaches, we aren't going to give you a free worksheet "3
						tricks to staying organized." We will sit down with you and go over
						your business and figure out what we can do to help you get and stay
						on track. Our consultation is free, and we will create a plan based
						on your needs. Set up your sonsultation today to get started!
					</p>
					<p>
						Contact us by filling out the form below or emailing us at
						info@streamlinedpartners.com
					</p>
				</div>
      </div>
      <form action="" className='contact-form'>
        <div id="form-name">
          <label htmlFor="name">Name *</label><br />
          <input type="text" name="name" id="name"/>
        </div>
        <div id="form-email">
          <label htmlFor="email">Email *</label><br />
          <input type="email" name="email" id="email"/>
        </div>
        <div id="form-message">
          <label htmlFor="message">Message *</label><br />
          <input type="textbox" name="message" id="message"/>
        </div>
      </form>
		</div>
	);
};

export default Contact;
