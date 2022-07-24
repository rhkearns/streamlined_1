import React from 'react';
import ContentBody from "../../Components/ContentBody/ContentBody"
import Contact from '../../Components/Contact/Contact';
import Footer from '../../Components/Footer/Footer';
// import Nav from '../../Components/Nav/Nav';
import About from '../../Components/About/About';
// import Testimonials from '../../Components/Testimonials/Testimonials';

const Home = () => {
	return (
		<div>
			{/* <Nav /> */}
			<ContentBody />
			<hr className="line" />
			<Contact />
			<hr className="line" />
			{/* <Testimonials /> */}
			{/* <hr className="line" /> */}
			<About />
			{/* <Nav /> */}
			<Footer />
		</div>
	);
};

export default Home;