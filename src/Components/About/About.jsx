import React from 'react';
import './About.scss';
import windows from '../../images/windows.jpg';

const About = () => {
	return (
		<div id="outer-section">
			<h1 id="about-header">About</h1>
			<div className="about-section">
				<div id="about-blurb">
					<p>
						<span className="ital">Streamlined Partners</span> is a boutique
						operations consulting and fractional COO firm founded by Samantha Yudin.
						Samantha has over a decade of experience working as a project
						manager and administrative, executive, and personal assistant. She
						has worked for private clients and companies, including Bang &
						Olufsen, Libero Canto School of Singing, Mood Bars, Unf*ck Your
						Brain, Overflow, Thinkertales, Arena Holdings, Cultural Road Mapp,
						Time Inc., ArtMuse, and the Bellevue Association. Samantha also ran
						her own CPG company prior to launching Streamlined Partners. The
						Streamlined Partners team is ready to work with you and your
						business.
					</p>
				</div>
				<div id="img-div-about">
					<img src={windows} alt="windows" id="windows" />
				</div>
			</div>
		</div>
	);
};

export default About;
