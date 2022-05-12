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
				Streamlined Partners is here to assist you in moving forward in all areas of systemization, strategizing, and accountability. We specialize in project management and organization.
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
						<li>Domain</li>
						<li>Website set rp</li>
						<li>Email/Google Workspace set up</li>
						<li>Work management software implementation</li>
						<li>Calendly, other calendar scheduling</li>
            <li>Financial infrastructure set up</li>
            <li>Full system troublshooting</li>
					</ul>
				</div>
				<div id="strategizing">
          <h5>Strategizing</h5>
          <ul>
						<li>Figure out what you need</li>
						<li>Sounding board for ideas</li>
						<li>Consulting</li>
						<li>Research, outreach, and connections</li>
						<li>Index/directory/catalogue of tech & work management programs to find the best option for you</li>
						<li>Network of freelancers for specialized projects</li>
					</ul>
				</div>
				<div id="onboarding">
          <h5>Onboarding</h5>
          <ul>
						<li>Work with team to see what you need</li>
						<li>Assist with job description creation</li>
						<li>Onboard new hire in terms of technology and overview of the teams and details that sometimes get missed</li>
					</ul>
				</div>
				<div id="accountability">
          <h5>Accountability</h5>
          <ul>
						<li>Keep projects moving</li>
						<li>Deadline Monitoring</li>
						<li>KPI (key performance indicators) monitoring</li>
						<li>Giving you the tools you need to hold yourself and your team accoutable</li>
					</ul>
				</div>
			</div>
			{/* <hr className="line" /> */}
		</div>
	);
};

export default ContentBody;
