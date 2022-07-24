import React from 'react';
import './Packages.scss'
import cover_img from '../../images/cover-img.png';

const Packages = () => {
	return (
		<div id="packages-page">
			<img src={cover_img} alt="cover" id="cover-img" />
			<h1>Packages</h1>
		</div>
	);
};

export default Packages;
