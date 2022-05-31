import React from 'react';
import './ContentBody.scss';
import stock_test from '../../images/stock_test.jpg';

const ContentBody = () => {
	return (
		<div id="content">
				<img src={stock_test} alt="test-img" id="test-img" />
			<div id="pitch">
				<h2 id="top-line">
					We work with small businesses and entrepreneurs to get them set up for
					success and stay on track
				</h2>
				{/* <h2>Streamline your Business</h2> */}
				<p>
					Whether you are starting a new small business or trying to organize
					your existing business infrastructure, Streamlined Partners will work
					with you to keep your company moving forward and make the best of your
					resources, budget, and talent. We have experience working with clients
					across industries, from consumer packaged good brands to marketing
					companies, from musical performance schools to healthcare nonprofits.
					Working with Streamlined Partners is a smart short term investment in
					your business’ long term goals.
				</p>
				<p>
					We work remotely allowing us to work with companies wherever they are.
				</p>{' '}
				<button id="cta-button"><a id="link" href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan">Contact Us</a></button>
{' '}
			</div>
			<hr className="line" />
			<h2 id="service-title">Services</h2>
				<div className="services">
					<div id="systemization">
						<h5>Systemization</h5>
						<ul>
							<li>Create a digital workspace</li>
							<li>Domain creation and custom email set up</li>
							<li>Website and social media connections</li>
							<li>Work management software implementation</li>
							<li>Calendar scheduling and syncing</li>
							<li>Full system troubleshooting</li>
						</ul>
					</div>
					<div id="strategizing">
						<h5>Strategizing</h5>
						<ul>
							<li>Brainstorming sessions</li>
							<li>Resources to elevate your administrative workload</li>
							<li>Organization methods to alleviate obstacles</li>
							<li>Catalogue of technology options tailored to your business</li>
							<li>
								Researched network of freelancers for specialized projects
							</li>
						</ul>
					</div>
					<div id="onboarding">
						<h5>Onboarding</h5>
						<ul>
							<li>Assess needs for future hires</li>
							<li>Assist with job description creation</li>
							<li>
								Provide new hires with systems to make the transition run
								smoothly{' '}
							</li>
						</ul>
					</div>
					<div id="accountability">
						<h5>Accountability</h5>
						<ul>
							<li>Timeline creation</li>
							<li>Objective setting</li>
							<li>Deadline Monitoring</li>
							<li>Goal markers and check ins</li>
						</ul>
					</div>
			</div>
			<button id="cta-button"><a id="link" href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan">Contact Us</a></button>
			<hr className="line" />
		</div>
	);
};

export default ContentBody;
