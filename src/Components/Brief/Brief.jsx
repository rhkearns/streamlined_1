import React from 'react';
import './Brief.scss';

const Brief = () => {
	return (
		<div id="brief-section">
			<p>
				We are a boutique operations consulting firm dedicated to helping small business owners and
				entrepreneurs achieve their business goals by guiding them
				through all aspects of the administrative and operational processes.
      </p>
      <p>
        The amount of technology, programs, and tools on the market today can be 
        overwhelming and make your day-to-day unnecessarily complicated. That's where we come in.
      </p>
      {/* <p>
        To begin, we will meet with you, take an in-depth look at your business and practices, and return 
        a detailed, custom-tailored roadmap for your business.
      </p> */}
      <p>
      Applying our team's project management and administrative knowledge and 
       expertise, we will take an in-depth look at your business and practices 
       and provide you with recommended process improvements. Our team will work 
       with you to implement new workflows with step-by-step guides, workflow 
       documentation, and custom templates.
        </p>
        <p>
        This will allow you to build a strong foundation and increase productivity and efficiency.
        We want you to be able to focus on the core ideas of your business rather than 
        spending your time thinking about how to best communicate with clients and 
        vendors, organize files, manage projects, etc.
      </p>
		</div>
	);
};

export default Brief;
