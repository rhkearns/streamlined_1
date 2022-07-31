import React from 'react';
import './Packages.scss'
// import cover_img from '../../images/cover-img.png';
// import logos_page_one from 'rhkearns/streamlined_1/src/images/logos_page_1.jpg';
import tech_icons from "../../images/tech icons.jpg"

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
							Want to learn more?
						</a>
					</button>
							<p> Starting at $495</p>
					</div>
					<div>
						<img src={tech_icons} alt="Technology Icons" id="tech-icons"/>
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
							Ready to invest in your company's future?
						</a>
					</button>
							<p>Starting at $1,850 a month</p>
					</div>
					<div id="onboarding-package">
						<p>At Streamlined Partners, we know how important hiring the right employee 
							is for the success of your business. We will observe your day-to-day processes 
							to create a job description for your ideal candidate. Sorting through the 
							applications you receive can take up so much of your time. We will take 
							that off your plate and send you only the prospective candidates that meet 
							the job qualifications. We will also schedule the interviews for the top 
							candidates that you select. Once you have made the hire, we will ensure 
							that person has all of the tools needed to seamlessly join your team.</p>
							<button id="cta-button">
						<a
							id="link"
							href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
							target="_blank"
							rel="noopener noreferrer"
						>
							Need a hand hiring?
						</a>
					</button>
							<p> Starting at $750</p>
					</div>
					<div id="custom-package">
						<p>Don't see what you are looking for? Contact us below to set up a call 
							to go over your specific needs and we will create a custom package for you!</p>
						<button id="cta-button">
						<a
							id="link"
							href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
							target="_blank"
							rel="noopener noreferrer"
						>
							Contact us today
						</a>
					</button>
					</div>
				</div>
			</div>
	</div>	
	);

};

export default Packages;
