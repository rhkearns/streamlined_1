import React from 'react';
import './Testimonials.scss';
import { Carousel } from 'react-bootstrap';
import template from '../../images/testimonials/template.jpg';

const Testimonials = () => {
	return (
		<div id="testimonials">
			<h1>Testimonials</h1>
			<Carousel variant='dark'>
				<Carousel.Item>
					<img className="" src={template} alt="template" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="" src={template} alt="template" />
				</Carousel.Item>
				<Carousel.Item>
					<img className="" src={template} alt="template" />
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Testimonials;
