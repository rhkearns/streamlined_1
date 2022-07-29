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
						<p>At Streamlined Partners, we love to see small businesses and enterpenuers succeed. 
							You shouldn't have to stress about the administrative back end of your company. We will 
							figure out what software and programs will help you run most efficiently and allow you 
							to focus on what really matters - making your business profitable!</p>
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
							<p> Starting at $495</p>
					</div>
					<div id="implementation-package">
						<p>Have all of your administrative structures set up but not sure how to use them to 
							their best potential? Want to continue to grow and scale your business but hitting 
							operational roadblocks? Streamlined Partners is here for you! We will be your 
							sounding board, your template provider and your extra set of hands. We will 
							also guide you, once you are ready, to hire someone full time to take over 
							this role. You won't even have to read through all of those applications! We 
							are a short term investment in the long term goals of your company!</p>
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
