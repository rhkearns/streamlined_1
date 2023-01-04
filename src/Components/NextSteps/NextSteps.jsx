import React from 'react';
import './NextSteps.scss';

const NextSteps = () => {
	return (
		<div id="next-step-box">
      <h1 id='next-heading'>Next Steps</h1>
    
      <div id="next-section">
        <h2 id="general-heading">General Consulting</h2>
        <p id="next-paragraph">After the completion and implementation of the roadmap, Streamlined Partners is available for general operations and administrative consulting. As the needs of every client are different, our consulting packages are customized for each small business or entrepreneur. <p>
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
							info@streamlinedpartners.com
						</a>.
					</p></p></div>
		</div>
	);
};

export default NextSteps;
