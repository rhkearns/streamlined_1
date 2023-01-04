import React from 'react';
import './Process.scss';

const Process = () => {
	return (
		<div id="process-section">
			<h1 id="process-heading">Our Process</h1>
			<p id="process-paragraph">
				We offer a free consultation, typically about 10 minutes, to ensure we
				are a good fit to work together. <br></br>
				We will then provide you with a proposal, which includes the project rate
				and timeline.
			</p>
			<h1 id="process-heading">Administrative Roadmap:</h1>
			<div id="process-steps">
				<div className="process-step-box" id="process-step-1">
					<h2 className="process-step-number">1</h2>
					<p className="process-step-description">
						One-hour informational call to learn more about your business/project
						and what you are looking to improve upon.
					</p>
				</div>
				<div className="process-step-box" id="process-step-2">
					<h2 className="process-step-number">2</h2>
					<p className="process-step-description">
						Administrative and operations roadmap custom-tailored to your business needs.
					</p>
				</div>
				<div className="process-step-box" id="process-step-3">
					<h2 className="process-step-number">3</h2>
					<p className="process-step-description">
					Implement items outlined in the roadmap on your own or with our assistance!
					</p>
				</div>
			</div>
		</div>
	);
};

export default Process;
