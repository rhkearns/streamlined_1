import React from 'react';
import './About.scss';
import implementation from '../../images/implementation_crop.jpg';

const About = () => {
	return (
		<div id="about-section">
			<div id="about-paragraphs">
				<p className="about-paragraph" id="paragraph-1">
					<span className="ital">Streamlined Partners</span> is a boutique operations consulting firm founded
					by Samantha Yudin. Samantha has over a decade of experience working as
					a project manager and administrative, executive, and personal
					assistant. She has worked for private clients and companies, including
					Bang & Olufsen, Livero Canto School of Singing, Mood Bars, Unf*ck Your
					Brain, Overflow, Thinkertales, Arena Holdings, Cultural Road Mapp,
					Time Inc., ArtMuse, and the Bellevue Association. Samantha also ran
					her own CPG company prior to launching Streamlined Partners.
				</p>
				<hr className="about-line" />
				<p className="about-paragraph" id="paragraph-2">
					The Streamlined Partners team is ready to work with you and your
					business!
				</p>
				<hr className="about-line" />
				<p className="about-paragraph" id="paragraph-3">
					<a
						href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
						target="_blank"
						rel="noopener noreferrer"
					>
						Contact us
					</a>{' '}
					today to schedule your free consultation.
				</p>
			</div>
			<img
				src={implementation}
				alt="laptop, notepad, and coffee"
				id="about-image"
			/>
		</div>
	);
};

export default About;
