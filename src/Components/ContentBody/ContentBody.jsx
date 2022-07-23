import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import './ContentBody.scss';
import stock_test from '../../images/cover-img.png';

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
					across industries, from consumer-packaged good brands to marketing
					companies, from musical performance schools to healthcare nonprofits.
					Working with Streamlined Partners is a smart short-term investment in
					your business’ long-term goals.
				</p>
				<p>
					We work remotely allowing us to work with companies wherever they are.
				</p>{' '}
				<button id="cta-button">
					<a
						id="link"
						href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
						target="_blank"
						rel="noopener noreferrer"
					>
						Contact Us
					</a>
				</button>{' '}
			</div>
			<hr className="line" />
			<div className="outer-service">
				<h2 id="service-title">Services</h2>
				{/* <h3>
					Systemization - Strategizing - Implementation - Accountability -
					Onboarding
				</h3> */}

				<div className="services">
					<div id="systemization">
						<h5>Systemization</h5>
						<ul>
							<li>Domain creation and custom email set up</li>
							<li>Work management software identification and implementation</li>
							<li>Cross-channel brand standardization</li>
							{/* <li>Catalog of technology options tailored to your business</li> */}
							<li>Calendar scheduling and syncing</li>
							<li>Full system troubleshooting</li>
						</ul>
					</div>
					<div id="strategizing">
						<h5>Strategizing</h5>
						<ul>
							<li>Brainstorming sessions</li>
							<li>Resources to alleviate your administrative workload</li>
							<li>Organization methods and templates to make your day-to-day simpiler</li>
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
				{/* <div id="packages">
					<h2 id="service-title">Packages</h2>
					<Carousel interval={null} variant="dark">
<Carousel.Item>
<br /><h2>Systemization</h2><p>
						<ul>
							<li>Custom domain email address setup</li>
							<li>Select the best work management software for your business</li>
							<li>Set up PM software, work management software, etc</li>
							<li>Set up password saving software </li>
							<li>Set up and connect calendars </li>
							<li>Connect and sync socials</li>
						</ul><br /><br />
</p>
</Carousel.Item>
<Carousel.Item>
<p><br />Package Option 2
						<br />
						Strategy/Implementation Package
						<ul>
							<li>include accountability and tracking goals</li>
							<li>pre-scheduled meetings</li>
							<li>1 hour for unscheduled meetings</li>
							<li>Templates and Organization Methods</li>
							<li>
								created templates, mono-working/pomodoro technique, to do lists
								with deadlines at each step
							</li>
							<li>these cover all areas of admin, accounting, PM, etc</li>
							<li>Can include marketing social automation</li>
							<li>Provide network of Freelancers for specialized projects</li>
							<li>creative, marketing, copywriting, legal, bookkeeping, etc</li>
							<li>Assess needs after x amount of time for a full-time hire</li>
							<li>
								Assist in creating job description based on what is experienced
							</li>
							<li>Assist in hiring and scheduling interviews</li>
							<li>Work with new hire to onboard</li>
						</ul><br /><br /></p>
</Carousel.Item> 
<Carousel.Item><p><br />Package Option 3
						<br />
						Hiring/Onboarding
						<ul>
							<li>
								Spend about 10 hours over two or three days overseeing processes
								to see what type of role is needed
							</li>
							<li>
								Assist in creating job description based on what is experienced
							</li>
							<li>post job description</li>
							<li>sort through resume</li>
							<li>assist in scheduling interviews</li>
							<li>set up new hire with needed work management software</li><br /><br />
						</ul>
</p></Carousel.Item> */}
{/* <Carousel.Item>
<p></p>
</Carousel.Item> */}
{/* <Carousel.Item>
<p></p>
</Carousel.Item> */}
{/* </Carousel> */}
					{/* <div id="package-1">
					
					</div>
					<div id="package-2">
						
					</div>
					<div id="package-3">
						
					</div> */}
				{/* </div> */}
			</div>
			{/* <button id="cta-button">
				<a
					id="link"
					href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
				>
					Contact Us
				</a>
			</button> */}
			<hr className="line" />
		</div>
	);
};

export default ContentBody;
