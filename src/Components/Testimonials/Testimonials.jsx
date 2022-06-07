import React from 'react';
import './Testimonials.scss';
import { Carousel } from 'react-bootstrap';
import testimonialData from '../../common/testimonialData';
import Testimonial_Carly from '../../images/testimonials/Testimonial_Carly.png'
import Testimonial_Deborah from '../../images/testimonials/Testimonial_Deborah.png'

const Testimonials = () => {
	console.log(testimonialData);
	const findImage = image => {
		switch (image) {
			case 'moodBars':
				return Testimonial_Carly;
			case 'liberoCanto':
				return Testimonial_Deborah;
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
