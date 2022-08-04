import React from 'react';
import './Testimonials.scss';
import { Carousel } from 'react-bootstrap';
import testimonialData from '../../common/testimonialData';
import Testimonial_Carly from 'rhkearns/streamlined_1/src/images/testimonials/Testimonial_Carly.jpg'
import Testimonial_Deborah from 'rhkearns/streamlined_1/src/images/testimonials/Testimonial_Deborah.jpg'
import Testimonial_Rocio from 'rhkearns/streamlined_1/src/images/testimonials/Testimonial_Rocio.jpg'

const Testimonials = () => {
	console.log(testimonialData);
	const findImage = image => {
		switch (image) {
			case 'moodBars':
				return Testimonial_Carly;
			case 'liberoCanto':
				return Testimonial_Deborah;
			case 'Rocio':
				return Testimonial_Rocio;
			default:
				break;
		}
	}
	return (
		<div id="testimonials">
			<h1>Testimonials</h1>
			<Carousel variant="dark">
				{testimonialData.map(testimonial => (
					<Carousel.Item>
						<img className='testimonial-img' src={findImage(testimonial.imgTitle)} alt={testimonial.body} />
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
};

export default Testimonials;
