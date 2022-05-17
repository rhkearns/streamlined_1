import React from 'react';
import './Testimonials.scss';
import { Carousel } from 'react-bootstrap';
import carly from "../../images/testimonials/Testimonial_Carly.png"

const Testimonials = () => {
	return (
		<div id="testimonials">
			<h1>Testimonials</h1>
			<Carousel variant="dark">
				<Carousel.Item>
					<img src={carly} alt="Mood Bars" />
				</Carousel.Item>
				<Carousel.Item>
					<img src={carly} alt="template" />
				</Carousel.Item>
				<Carousel.Item>
					<img src={carly} alt="template" />
				</Carousel.Item>
			</Carousel>
		</div>
	);
};

export default Testimonials;
