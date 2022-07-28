import React from 'react';
import './Packages.scss'
import cover_img from '../../images/cover-img.png';

const Packages = () => {
	return (
		<div id="packages-page">
			<img src={cover_img} alt="cover" id="cover-img" />
			<h2 id="packages-title">Get Started With Us</h2>
			<div className="packages">
			<div id="systemization-package">
					<p>Streamlined Partners will work with you to set up all your work managment systems!
					<br /> Everything you need to get your business up and running!	
					<br /> Starting at $495</p>
				</div>
			</div>

		</div>	
	);

};

export default Packages;
