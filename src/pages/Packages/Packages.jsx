import React from 'react';
import './Packages.scss'
// import cover_img from '../../images/cover-img.png';
// import logos_page_one from 'rhkearns/streamlined_1/src/images/logos_page_1.jpg';

const Packages = () => {
	return (
		<div id="packages-page">
			<div className="outer-packages">
				<h2 id="packages-title">Get Started With Us</h2>
				<div className="packages">
					<div id="systemization-package">
						<p>At Streamlined Partners, we love to witness small businesses and entrepreneurs 
							succeed. Within our systemization package, we work with you to establish systems 
							and an administrative foundation that works for you and your business. 
							By setting you up with the right tools to track your tasks, manage and 
							communicate with your team, and create an efficient workspace, you are 
							free to focus on what really matters - achieving your goals and finding success! </p>
							<button id="cta-button">
						<a
							id="link"
							href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
							target="_blank"
							rel="noopener noreferrer"
						>
							What to learn more?
						</a>
					</button>
							<p> Starting at $495</p>
					</div>
					<div id="implementation-package">
						<p>The Streamlined Partners Implementation Package is perfect for the 
							small business or entrepreneur who needs an extra set of hands but 
							isn't ready to hire a full-time employee just yet. Our team will meet 
							with you regularly, assist in setting up accountability systems, ensure 
							you are getting the most out of the work management programs you use, 
							and any other administrative or operational tasks that arise. You will 
							also get access to our individually tailored templates and our extensive 
							network of freelancers for any specialized project. Once you are ready 
							to hire a full-time employee, we will work with you to determine your 
							needs, prepare the job description, organize applicants, and schedule 
							interviews with candidates.</p>
							<button id="cta-button">
						<a
							id="link"
							href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
							target="_blank"
							rel="noopener noreferrer"
						>
							Contact us today to schedule a free call to discuss your needs.
						</a>
					</button>
							<p>Starting at $1,850 a month</p>
					</div>
					<div id="onboarding-package">
						<p>Did I hear you will help me hire a full time employee? You will weed out all of 
							the applications that don't fit our needs? Fantastic! Streamlined Partners
							 will assist you in figuring out the type of position you need, writing the 
							 job description and sorting through applicants. Our fees are upfront and we 
							 don't take recruiter fees. We are here to help you hire and onboard, one and done!</p>
							<button id="cta-button">
						<a
							id="link"
							href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
							target="_blank"
							rel="noopener noreferrer"
						>
							Contact us today to schedule a free call to discuss your needs.
						</a>
					</button>
							<p> Starting at $750</p>
					</div>
					<div id="custom-package">
						<p>Don't see what you are looking for? Contact us below to set up a call to go over your specific needs and we will create a custom package for you!</p>
							<br /><button id="cta-button">
						<a
							id="link"
							href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
							target="_blank"
							rel="noopener noreferrer"
						>
							Contact us.
						</a>
					</button>
					</div>
				</div>
			</div>
	</div>	
	);

};

export default Packages;
