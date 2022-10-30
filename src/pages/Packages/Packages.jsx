import React from 'react';
import './Packages.scss';
// import cover_img from '../../images/cover-img.png';
// import logos_page_one from 'rhkearns/streamlined_1/src/images/logos_page_1.jpg';
import contactUs from '../../images/contact-us.jpg';
import implementation from '../../images/implementation.jpg';
import systemization from '../../images/systemization.jpg';
import onboarding from '../../images/onboarding.png';

const Packages = () => {
	return (
		<div id="packages-page">
			<div className="outer-packages">
				{/* <h2 id="packages-title">Work with us</h2> */}
				<div className="packages">
					<div id="systemization-package">
						<div class="word-side">
							<p>
								At Streamlined Partners, we love to see businesses and
								entrepreneurs succeed. With our{' '}
								<span className="ital">Systemization Package</span>, we work
								with you to establish systems and an administrative foundation
								that is appropriate for you and your business. By setting you up
								with the right tools to track your tasks, manage and communicate
								with your team, and create an efficient workspace, you are free
								to focus on what really matters - achieving your goals and
								finding success!{' '}
							</p>
							<button class="package-button">
								<a
									id="link"
									href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
									target="_blank"
									rel="noopener noreferrer"
								>
									Want to learn more?
								</a>
							</button>
						</div>
						<div className="img-div">
							<img
								src={systemization}
								alt="iphone with icons"
								id="iphone-icons"
							/>
							<p id="systemization-price"> Starting at $495</p>
						</div>
					</div>
					<div id="implementation-package" className="reverse-div">
						<div className="word-side">
							<p>
								The Streamlined Partners{' '}
								<span className="ital">Implementation Package</span> is perfect
								for the business owner or entrepreneur who needs an extra set of
								hands but isn't ready to hire a full-time employee just yet. We
								will be your fractional COO. Our team will meet with you
								regularly, assist in setting up accountability systems, ensure
								you are getting the most out of the work management programs you
								use, and any other administrative or operational tasks that
								arise. You will also get access to our individually tailored
								templates and our extensive network of freelancers for any
								specialized project. Once you are ready to hire a full-time
								employee, we will work with you to determine your needs, prepare
								the job description, organize applicants, and schedule
								interviews with candidates.
							</p>
							<button class="package-button">
								<a
									id="link"
									href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
									target="_blank"
									rel="noopener noreferrer"
								>
									Ready to invest in your company's future?
								</a>
							</button>
						</div>
						<div className="img-div">
							<img
								src={implementation}
								alt="implementation"
								id="implementation-image"
							/>
							<p id="implementation-price">Starting at $1,995 a month</p>
						</div>
					</div>
					<div id="onboarding-package">
						<div className="word-side">
							<p>
								At Streamlined Partners, we know how important hiring the right
								employee is for the success of your business. With our{' '}
								<span className="ital">Onboarding Package</span>, we will
								observe your day-to-day processes to create a job description
								for your ideal candidate. We will organize the incoming
								applications and send you the prospective candidates that meet
								the job qualifications. We will also schedule all of the
								interviews for you. Once you have made the hire, we will ensure
								that person has all of the tools needed to seamlessly join your
								team.
							</p>
							<button class="package-button">
								<a
									id="link"
									href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
									target="_blank"
									rel="noopener noreferrer"
								>
									Need a hand hiring?
								</a>
							</button>
						</div>
						<div className="img-div">
							<img src={onboarding} alt="Onboarding" id="onboarding-image" />
							<p id="onboarding-price">Starting at $799</p>
						</div>
					</div>
					<div id="custom-package" className="reverse-div">
						<div className="word-side">
							<p>
								Need a little bit of everything? Not sure what you neeed? We are
								more than happy to sit down with you, hear your needs, and
								create a package that is tailored to you. As no two companies
								are exactly the same and there isn't a one size fits all
								solution for everyone, we will help you find the solutions that
								are perfect for your business!
							</p>
							<button class="package-button">
								<a
									id="link"
									href="https://airtable.com/embed/shrggi2IoXGexh59K?backgroundColor=cyan"
									target="_blank"
									rel="noopener noreferrer"
								>
									Contact us today
								</a>
							</button>
						</div>
						<div className="img-div">
							<img src={contactUs} alt="hands" id="hands" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Packages;
