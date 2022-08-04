import React from 'react';
import ContentBody from '../../Components/ContentBody/ContentBody';
// import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
// import Nav from '../../Components/Nav/Nav';
import About from '../../Components/About/About';
import Testimonials from '../../Components/Testimonials/Testimonials';

const Home = () => {
	const isMobile = window.screen.width < 600;

	return (
		<div>
			{/* <Nav /> */}
			<ContentBody />
			<hr className="line" />
			{/* <Contact /> */}
			{/* <hr className="line" /> */}
			{!isMobile && <Testimonials id="testimonials-to-hide" />}
			{!isMobile && <hr className="line" />}
			<About />
			{/* <Nav /> */}
			<Footer />
		</div>
	);
};

export default Home;
