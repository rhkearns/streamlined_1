import React from 'react';
import './Packages.scss'
import cover_img from '../../images/cover-img.png';

const Packages = () => {
	return (
		<div id="packages-page">
			<img src={cover_img} alt="cover" id="cover-img" />
			<h2 id="packages">Packages</h2>
			<div id="packages-section">
		<h5>Systemization</h5>
			<p>
	Setting up custom domain email address
	<br />Going through PM software to figure out the best fit
	<br />Set up PM software, work management software, etc
	<br />Set up password saving software
	<br />Set up and connect calendars
	<br />Connect and sync socials (all handles are the same, logos, etc)

$495 for a team of up to 5 people</p>
			</div>
			</div>	
	);

};

export default Packages;
