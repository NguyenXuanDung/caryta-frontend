import React from 'react';
import '../styles/navbar.css';

class Navbar extends React.Component {

	render() {
		return <nav className="col-md-6 col-12 tm-nav">
			<ul className="tm-nav-ul">
				<li className="tm-nav-li"><a href="" className="tm-nav-link active">Trang Chủ</a></li>
				<li className="tm-nav-li"><a href="" className="tm-nav-link">Giới Thiệu</a></li>
				<li className="tm-nav-li"><a href="" className="tm-nav-link">Liên Hệ</a></li>
			</ul>
		</nav>;
	}
}

export default Navbar;





