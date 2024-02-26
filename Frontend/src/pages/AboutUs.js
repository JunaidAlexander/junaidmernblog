import React from "react";
import "./AboutUs.css";

function AboutUs() {
	return (
		<section id="about-us" className="py-5">
			<div className="container">
				<div className="row">
					<div className="col-lg-6">
						<h2 className="display-4 mb-4">About Us</h2>
						<p className="lead">
							Welcome to TravelinHub! We are passionate about travel and
							exploration, and we want to share that passion with you. Our
							mission is to provide you with the best travel experiences
							possible, whether you're planning a relaxing beach getaway, an
							adventurous trek through the mountains, or a cultural immersion in
							a bustling city.
						</p>
						<p>
							At TravelinHub, we believe that travel is not just about visiting
							new places, but also about creating unforgettable memories,
							forging new connections, and gaining valuable experiences that
							enrich our lives. With our expertise and dedication, we strive to
							make every journey you embark on with us truly exceptional.
						</p>
					</div>
					<div className="col-lg-6 d-flex justify-content-center align-items-center">
						<img
							src="https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=600"
							alt="About Us Image"
							className="img-fluid rounded-circle"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default AboutUs;
