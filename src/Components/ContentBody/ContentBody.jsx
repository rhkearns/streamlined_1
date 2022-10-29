import React from 'react';
// import { Carousel } from 'react-bootstrap';
import './ContentBody.scss';
// import cover_img from '../../images/cover-img.png';
// import Packages from '../../pages/Packages/Packages';
// import Background from '../../images/Background6a.png';
import contentphoto from '../../images/contentphoto.png';

const ContentBody = () => {
	return (
		<div id="pitch">
			<div id="content-body">
				<h2 id="heading">
					Operations Consultants and Fractional COOs to optimize your business
					operations
				</h2>
				<div id="topsection">
					<p class="top-line">
						We work with business owners and entrepreneurs to get their
						infrastructure and systems streamlined so they can stay on track and
						focus on finding success. Whether you are just starting out with a
						new business or are established but need a technology update or an
						infrustructure overhaul, our team is here to help! Working with
						Streamlined Partners is a smart short-term investment in your
						business’ long-term goals. We work on a short term basis and will
						even help you hire a full time COO or administrative assistant when
						you are ready. We work remotely allowing us to work with companies
						wherever they are.
					</p>
				</div>
				<button id="cta-button">
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
			<div id='photo'><img src={contentphoto} alt="contentphoto" id="contentphoto" />
			</div>
			<hr className="line" />
		</div>
	);
};

export default ContentBody;
