import React from 'react';
import './Packages.scss'
import cover_img from '../../images/cover-img.png';

const Packages = () => {
	return (
		<div id="packages-page">
			<img src={cover_img} alt="cover" id="cover-img" />
			<h2 id="packages-title">Packages</h2>
			<div className="packages">
				<div id="systemization-package">
					<h5>Systemization</h5>
					<p>Setting up custom domain email address
					<br />Going through PM software to figure out the best fit
					<br />Set up PM software, work management software, etc
					<br />Set up password saving software
					<br />Set up and connect calendars
					<br />Connect and sync socials (all handles are the same, logos, etc)
					<br />$495 for a team of up to 5 people</p>
				</div>
				<div id="integration-package">
					<h5>Integration and Strategy</h5>
					<p>Brainstorm/touch base meetings (2 a week @ 1 hour each)
					<br />include accountability and tracking goals
					<br />pre-scheduled meetings
					<br />1 hour for unscheduled meetings
					<br />Templates and Organization Methods
					<br />created templates, mono-working/pomodoro technique, to do lists wit deadlines at each step
					<br />these cover all areas of admin, accounting, PM, etc
					<br />Can include marketing (social automation)
					<br />Provide network of Freelancers for specialized projects
					<br />creative, marketing, copywriting, legal, bookkeeping, etc	
					<br />Assess needs after x amount of time for a full-time hire
					<br />Assist in creating job description based on what is experienced
					<br />Assist in hiring and scheduling interviews
					<br />Work with new hire to onboard</p>
				</div>
				<div id="onboarding-package">
					<h5>Onboarding</h5>
					<p>Spend about 10 hours over two or three days overseeing processes to see what type of role is needed.
					<br />Assist in creating job description based on what is experienced
					<br />Post job description
					<br />Sort through resumes
					<br />Assist in scheduling interviews
					<br />Set up new hire with needed work management software</p>
				</div>
			</div>
		// </div>	
	);

};

export default Packages;
