import React from 'react';
import '../../styles/mainpage/navbar.css';

class Navbar extends React.Component {

	render() {
		let selectedPage = this.props.selectedPage;
		return <nav className="col-md-6 col-12 tm-nav">
			<ul className="tm-nav-ul">
				<li className="tm-nav-li">
					<a
						href=""
						className={["tm-nav-link", selectedPage === "MAIN" ? "active" : ""].join(" ")}
						onClick={(e) => this.handleNavClick(e, "MAIN")}
					>
						Trang Chủ
					</a>
				</li>
				<li className="tm-nav-li">
					<a
						href=""
						className={["tm-nav-link", selectedPage === "ABOUT" ? "active" : ""].join(" ")}
						onClick={(e) => this.handleNavClick(e, "ABOUT")}
					>
						Giới Thiệu
					</a>
				</li>
				<li className="tm-nav-li">
					<a
						href=""
						className={["tm-nav-link", selectedPage === "CONTACT" ? "active" : ""].join(" ")}
						onClick={(e) => this.handleNavClick(e, "CONTACT")}
					>
						Liên Hệ
					</a>
				</li>
			</ul>
		</nav>;
	}

	handleNavClick = (e, navName) => {
		e.preventDefault();
		this.props.handleNavClick(navName);
	}
}

export default Navbar;





