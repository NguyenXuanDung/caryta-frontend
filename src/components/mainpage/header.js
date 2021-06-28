import React from 'react';
import '../../styles/mainpage/header.css';
import Logo from './logo';
import Navbar from './navbar';

class Header extends React.Component {

	render() {
		return <div className="placeholder">
			<div className="parallax-window">
				<div className="tm-header">
					<div className="header-row tm-header-inner">
						<Logo/>
						<Navbar/>
					</div>
				</div>
			</div>
		</div>;
	}
}

export default Header;





