import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import '../../styles/about/person.css';
import person from '../../images/nguyen.jpeg';

class Person extends React.Component {

	render() {
		return <article className="col-lg-6">
			<figure className="tm-person">
				<img src={person} alt="person" className="img-fluid tm-person-img"/>
				<figcaption className="tm-person-description">
					<h4 className="tm-person-name">Trần Hoàng Nguyên</h4>
					<p className="tm-person-title">Founder and CEO</p>
					<p className="tm-person-about">Ta không cầu xin cho gánh nặng sẽ nhẹ hơn. Nhưng cho đôi vai hãy vững vàng hơn... </p>
					<div>
						<a href="https://fb.com" className="tm-social-link">
							<i className="fab fa-facebook tm-social-icon"></i>
						</a>
						<a href="https://twitter.com" className="tm-social-link">
							<i className="fab fa-twitter tm-social-icon"></i>
						</a>
						<a href="https://instagram.com" className="tm-social-link">
							<i className="fab fa-instagram tm-social-icon"></i>
						</a>
					</div>
				</figcaption>
			</figure>
		</article>;
	}
}

export default Person;





