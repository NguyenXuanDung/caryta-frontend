import React from 'react';
import '../../styles/mainpage/listbooth.css';

class ListBooth extends React.Component {

	render() {
		let selectedPage = this.props.selectedBooth;
		return <div className="tm-paging-links">
			<nav>
				<ul>
					<li className="tm-paging-item">
						<a
							href=""
							className={["tm-paging-link", selectedPage === "XIEN" ? "active" : ""].join(" ")}
							onClick={(e) => this.handleBoothClick(e, "XIEN")}
						>
							Xiên Nướng
						</a>
					</li>
					<li className="tm-paging-item">
						<a
							href=""
							className={["tm-paging-link", selectedPage === "GOI" ? "active" : ""].join(" ")}
							onClick={(e) => this.handleBoothClick(e, "GOI")}
						>
							Gỏi
						</a>
					</li>
					<li className="tm-paging-item">
						<a
							href=""
							className={["tm-paging-link", selectedPage === "DO_UONG" ? "active" : ""].join(" ")}
							onClick={(e) => this.handleBoothClick(e, "DO_UONG")}
						>
							Đồ uống
						</a>
					</li>
				</ul>
			</nav>
		</div>;
	}

	handleBoothClick = (e, boothName) => {
		e.preventDefault();
		this.props.handleBoothClick(boothName);
	}
}

export default ListBooth;





