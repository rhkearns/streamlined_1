import React from 'react';
import './Testimonials.scss';
import { Carousel } from 'react-bootstrap';
import testimonialData from '../../common/testimonialData';
import Testimonial_Carly from '../../images/testimonials/Testimonial_Carly.png'

const Testimonials = () => {
	console.log(testimonialData);
	const findImage = image => {
		switch (image) {
			case 'carly':
				return Testimonial_Carly;
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
						<img className='background' src={findImage(testimonial.imgTitle)} alt={testimonial.body} />
					</Carousel.Item>
				))}
			</Carousel>
		</div>
	);
};

export default Testimonials;
