import React from 'react';
import '../styles/logo.css';
import logo from "../images/simple-house-logo.png"

class Logo extends React.Component {

	render() {
		return <div className="col-md-6 col-12">
			<img src={logo} alt="Logo" className="tm-site-logo"/>
			<div className="tm-site-text-box">
				<h1 className="tm-site-title">Caryta</h1>
				<h6 className="tm-site-description">Chợ ẩm thực</h6>
			</div>
		</div>;
	}
}

export default Logo;





