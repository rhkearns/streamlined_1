import React from 'react';
import './Packages.scss'
import cover_img from '../../images/cover-img.png';

const Packages = () => {
	return (
		<div id="packages-page">
			<img src={cover_img} alt="cover" id="cover-img" />
			<h2 id="packages">Packages</h2>
			<div id="packages-section">
		<h5>Package 1</h5>
			<p>Systemization/Base Package
	-setting up custom domain email address
	-Going through PM software to figure out the best fit
	-Set up PM software, work management software, etc
		-asana, slack, notion, trello, airtable, shared google drive or dropbox folders, milanote, figma, dubsado, 
	-Set up password saving software
		-recommend 1password $36/yr
	-Set up and connect calendars
		-calendly, doodle accounts
	-Connect and sync socials (all handles are the same, logos, etc)
		-Linkedin, Twitter, Facebook, Instagram TikTok

$495 for a team of up to 5 people,</p>
			</div>
			</div>	
	);

};

export default Packages;
