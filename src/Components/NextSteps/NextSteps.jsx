import React from 'react';
import './NextSteps.scss';

const NextSteps = () => {
	return (
		<div id="next-step-box">
      <h1 id='next-heading'>Next Steps</h1>
    
      <div id="next-section">
        <h2 id="general-heading">General Consulting</h2>
        <p id="next-paragraph">After the completion of the roadmap and implementation, streamlined partners is available for general operations and administrative consulting. Each clients needs are different, and our consulting packages are tailored to what those needs are. <p>
						Contact us to find out more by completing {' '}
						<a id="next-link"
							href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
							target="_blank"
							rel="noopener noreferrer"
						>
							{' '}
							this form
						</a>{' '}
						or emailing us at{' '}
						<a id="next-link"
							href="mailto:info@streamlinedpartners.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							{' '}
							info@streamlinedpartners.com.
						</a>
					</p></p></div>
		</div>
	);
};

export default NextSteps;
