import React from 'react';
import './ContentBody.scss';

const ContentBody = () => {
	return (
		<div id="content">
			<h2 id="top-line">
				We work with small businesses and entrepreneurs to get them set up for
				success and stay on track
			</h2>
			<p>
				Whether you are staring a new small business or trying to organize your
				existing business infrastructure, Streamlined Partners will work with
				you to keep your company moving forward and make the best of your
				resources, budget, and talent. We have worked with clients across
				industries, from consumer packaged good brands to marketing companies,
				from musical performance schools to healthcare nonprofits. Working with
				Streamlined Partners is a smart short term investment in your business’
				long term goals.
			</p>
			<p>
				We work remotely allowing us to work with companies wherever they are.
			</p>{' '}
			<a
				href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
				target="_blank"
				rel="noopener noreferrer"
			>
				{' '}
				Contact Us
			</a>{' '}
			<hr className="line" />
			{/* <h4 id="bottom-line">Full services coming soon!</h4> */}
			<div className="services">
				<div id="systemization">
					<h5>Systemization</h5>
					<ul>
						{/* <li>Domain creation</li> */}
						<li>Create a digital workspace</li>
						{/* <li>Website set up</li> */}
						<li>Domain creation and custom email set up</li>
						{/* <li>Email/Google Workspace set up</li> */}
						<li>Website and social media connections</li>
						<li>Work management software implementation</li>
						<li>Calendar scheduling and syncing</li>
						<li>Full system troubleshooting</li>
					</ul>
				</div>
				<div id="strategizing">
					<h5>Strategizing</h5>
					<ul>
						{/* <li>Consulting</li> */}
						<li>Brainstorming sessions</li>
						<li>Resources to elevate your administrative workload</li>
						<li>Organization methods to alleviate obstacles</li>
					{/* <li>Orgnaized frameworks to keep operations running smoothly</li> */}
						{/* <li>Sounding board for ideas</li> */}
						{/* <li>Figure out what you need</li> */}
						{/* <li>Research, outreach, and connections</li> */}
						<li>
							Catalogue of technology options tailored to your bussiness
						</li>
						<li>Researched network of freelancers for specialized projects</li>
					</ul>
				</div>
				<div id="onboarding">
					<h5>Onboarding</h5>
					<ul>
						<li>Assess needs for future hires</li>
						<li>Assist with job description creation</li>
						<li>Provide new hires with systems to make the transition run smoothly </li>
					</ul>
				</div>
				<div id="accountability">
					<h5>Accountability</h5>
					<ul>
						{/* <li>We provide you the tools you need to hold yourself and your team accountable</li> */}
						{/* <li>Keep projects moving</li> */}
						<li>Timeline creation</li>
						<li>Objective setting</li>
						<li>Deadline Monitoring</li>
						<li>Goal markers and check ins</li>
						{/* <li>KPI monitoring</li> */}
					</ul>
				</div>
			</div>
			<hr className="line" />
		</div>
	);
};

export default ContentBody;
