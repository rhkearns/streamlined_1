import React from 'react';
import './Packages.scss'
import cover_img from '../../images/cover-img.png';
// import logos_page_one from 'rhkearns/streamlined_1/src/images/logos_page_1.jpg';

const Packages = () => {
	return (
		<div id="packages-page">
			<img src={cover_img} alt="cover" id="cover-img" />
			<h2 id="packages-title">Get Started With Us</h2>
			<div className="packages">
				<div id="systemization-package">
					<p>At Streamlined Partners, we love to see small businesses and enterpenuers succeed. You shouldn't have to stress about the administrative back end of your company. We will figure out what software and programs will help you run most efficiently and allow you to focus on what really matters - making your business profitable!
						<br /><button id="cta-button">
					<a
						id="link"
						href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
						target="_blank"
						rel="noopener noreferrer"
					>
						Contact us today to schedule a free call to discuss your needs.
					</a>
				</button>
						<br /> Starting at $495</p>
					{/* <img src={logos_page_one} alt="logos_page_one" id="logos_page_one" /> */}
				</div>
			</div>

		</div>	
	);

};

export default Packages;
