import React from 'react';
import '../../styles/mainpage/logo.css';
import logo from "../../images/simple-house-logo.png"

class Logo extends React.Component {

	render() {
		return <div className="col-md-6 col-12">
			<img src={logo} alt="Logo" className="tm-site-logo"/>
		</div>;
	}
}

export default Logo;





