import React from 'react';
import { Link } from 'react-router-dom';
// import { Carousel } from 'react-bootstrap';
import './ContentBody.scss';
// import cover_img from '../../images/cover-img.png';
// import Packages from '../../pages/Packages/Packages';
// import Background from '../../images/Background6a.png';
import content from '../../images/content.png';

const ContentBody = () => {
	return (
		<div id="pitch">
			<div id="content-body">
				<h2 id="heading">
					Operations Consultants and Fractional COOs to optimize your business
				</h2>
				<div id="topsection">
					<p class="top-line">
						Streamlined Partners works with small business owners and entrepreneurs to get their
						infrastructure and systems streamlined so they can stay on track and
						focus on finding success. Whether you are just starting out with a
						new business, or are established but need a technology update or an
						infrustructure overhaul, our team is here to help! <br></br><br></br>Working with
						Streamlined Partners is a smart, short-term investment in your
						business’ long-term goals. We work primarily on short-term contracts to 
						limit your financial burden. Once you are ready to make a full time hire, 
						whether it be a COO or an administrative assistant, our team can help you navigate that process.
						 Our <Link to={'/packages'}>packages</Link> can be customized to fit your needs. 
					</p>
					<button id="home-button">
					<a
						id="link"
						href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
						target="_blank"
						rel="noopener noreferrer"
					>
						Contact Us
					</a>
				</button>
				</div>
				</div>
			<div id='photo'><img src={content} alt="content" id="content" />
			</div>
		</div>
	);
};

export default ContentBody;
