import React from 'react';
import '../../styles/mainpage/header.css';
import Logo from './logo';
import Navbar from './navbar';

class Header extends React.Component {

	render() {
		return <div className="placeholder">
			<div className="parallax-window"></div>
			<div className="tm-header">
				<div className="header-row tm-header-inner">
					<Logo/>
					<Navbar
						handleNavClick = {this.handleNavClick}
						selectedPage={this.props.selectedPage}
					/>
				</div>
			</div>
		</div>;
	}

	handleNavClick = (navName) => {
		this.props.handleNavClick(navName);
	}
}

export default Header;





