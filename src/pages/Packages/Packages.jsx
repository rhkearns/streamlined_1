import React from 'react';
import './Packages.scss'
import cover_img from '../../images/cover-img.png';
import logos_page_1 from 'rhkearns/streamlined_1/src/images/logos_page_1.jpg';

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
					<img src={logos_page_1} alt="logos_page_1" id="logos_page_1" />
				</div>
			</div>

		</div>	
	);

};

export default Packages;
