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
				<h3>
					Systemization - Strategizing - Implementation - Accountability -
					Onboarding
				</h3>

				<Carousel interval={null} variant="dark">
					<Carousel.Item>
						<p>
							<br />
							Streamline Partners will work with your business to create a
							custom domain and matching email address. We set up all of your
							social accounts to also match your domain and branding. We have
							experience with many different work management programs and will
							go over your needs to find the best ones for you. We will set
							those up and create pages, folders, channels, and projects as
							needed.
							<br />
							<br />
							<br />
						</p>
					</Carousel.Item>
					<Carousel.Item>
						<p>
							If you have all of these already set up, congrats! You're ahead of
							the game.
							<br /> For you, we will skip step one and come on for stragety and
							implementization. We will set up brainstorming and touch-base
							meetings, organize your project management software and mailboxes
							(you know you need it don't you?). Streamlined Partners implements
							specialized templates to help you through every twist and turn of
							running your business. We even have a network of freelancers to
							call in for whatever you need.
						</p>
						<Carousel.Item></Carousel.Item>
						<p>
							{' '}
							Have you been thinking it's time to hire a new employee but aren't
							sure what exactly that role will be? We are more than happy to
							spend a day or two with you, see how you work and where your gaps
							are to write you the perfect job description. Do you find goin
							through hundreds of applications a bore? We'll take that off your
							hands! You will sort through to find you the top candidates and
							even set up the interview times.
						</p>
					</Carousel.Item>
					<Carousel.Item>
						<p>page 4</p>
					</Carousel.Item>
				</Carousel>

				<p></p>
				<div className="services">
					<div id="systemization">
						<h5>Systemization</h5>
						<ul>
							<li>Domain creation and custom email set up</li>
							<li>Work management software implementation</li>
							<li>Cross-channel brand simplification</li>
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
				<div id="packages">
					<div id="package-1">
						Systemization
						<br />
						<ul>
							<li>setting up custom domain email address</li>
							<li>Going through PM software to figure out the best fit</li>
							<li>Set up PM software, work management software, etc</li>
							<li>Set up password saving software </li>
							<li>Set up and connect calendars </li>
							<li>Connect and sync socials</li>
						</ul>
					</div>
					<div id="package-2">
						Package Option 2
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
						</ul>
					</div>
					<div id="package-3">
						Package Option 3
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
							<li>set up new hire with needed work management software</li>
						</ul>
					</div>
				</div>
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
