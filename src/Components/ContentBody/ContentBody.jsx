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
				Streamlined Partners is here to assist you in moving forward in all
				areas of systemization, strategizing, and accountability.
				{/* We specialize in project management and organization. */}
			</p>
			<p>
				We will show you how to adjust and move forward to make the best of your
				resources, budget, and talent.
			</p>
			{/* <hr className="line" /> */}
			{/* <h4 id="bottom-line">Full services coming soon!</h4> */}
			<div className="services">
				<div id="systemization">
					<h5>Systemization</h5>
					<ul>
						<li>Domain creation</li>
						<li>Website set up</li>
						<li>Email/Google Workspace set up</li>
						<li>Work management software implementation</li>
						<li>Calendar scheduling and syncing</li>
						{/* <li>Financial infrastructure set up</li> */}
						<li>Full system troublshooting</li>
					</ul>
				</div>
				<div id="strategizing">
					<h5>Strategizing</h5>
					<ul>
						<li>Consulting</li>
						<li>Sounding board for ideas</li>
						<li>Figure out what you need</li>
						<li>Research, outreach, and connections</li>
						<li>
							Index/directory/catalogue of tech & work management programs to
							find the best option for you
						</li>
						<li>Network of freelancers for specialized projects</li>
					</ul>
				</div>
				<div id="onboarding">
					<h5>Onboarding</h5>
					<ul>
						<li>Assess needs for future hires</li>
						<li>Assist with job description creation</li>
						<li>Onboard new hires </li>
						{/* <li>in terms of technology and overview of the teams and details that sometimes get missed</li> */}
					</ul>
				</div>
				<div id="accountability">
					<h5>Accountability</h5>
					<ul>
						<li>
							We provide you the tools you need to hold yourself and your team
							accoutable
						</li>
						<li>Keep projects moving</li>
						<li>Timeline creation</li>
						<li>Deadline Monitoring</li>
						<li>KPI monitoring</li>
					</ul>
				</div>
			</div>
			{/* <hr className="line" /> */}
		</div>
	);
};

export default ContentBody;
