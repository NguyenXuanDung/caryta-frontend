import React from 'react';
import '@fortawesome/fontawesome-free/js/all.js';
import '../../styles/contact/contact.css';
import '../../styles/mainpage/welcome.css';

class Contact extends React.Component {

	render() {
		return <main>
			<header className="row tm-welcome-section">
				<h2 className="col-12 text-center tm-section-title">Liên hệ</h2>
				<p className="col-12 text-center">Các bạn có thể liên hệ với chúng tôi theo địa chỉ dưới đây.</p>
			</header>
			<div className="tm-container-inner-2 tm-contact-section" >
				<div className="row">
					<div className="col-12">
						<div className="tm-address-box">
							<h4 className="tm-info-title tm-text-success">Địa chỉ của chúng tôi</h4>
							<address>
								43-45-47 Lê Thanh Nghị
							</address>
							<a href="tel:0815999951" className="tm-contact-link">
								<i className="fa fa-phone tm-contact-icon"/>0815999951
							</a>
							<a href="mailto:Carytastudio68@gmail.com" className="tm-contact-link">
								<i className="fas fa-envelope tm-contact-icon"/>Carytastudio68@gmail.com
							</a>
							<div className="tm-contact-social">
								<a href="https://fb.com/templatemo" className="tm-social-link">
									<i className="fab fa-facebook tm-social-icon"/>
								</a>
								<a href="" className="tm-social-link">
									<i className="fab fa-twitter tm-social-icon"/>
								</a>
								<a href="" className="tm-social-link">
									<i className="fab fa-instagram tm-social-icon" />
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tm-container-inner-2 tm-map-section">
				<div className="row">
					<div className="col-12">
						<div className="tm-map">
							<iframe
								title="Map of Caryta"
								src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d958.6132170641512!2d108.21763640342319!3d16.041972602369608!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421919cbbf3f77%3A0x4000b52b2bbf49a2!2sCaryta%20Apartment!5e0!3m2!1sen!2s!4v1624949490707!5m2!1sen!2s"
								frameBorder="0"
								allowFullScreen=""
							/>
						</div>
					</div>
				</div>
			</div>
		</main>;
	}
}

export default Contact;





