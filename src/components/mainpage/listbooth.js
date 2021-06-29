import React from 'react';
import '../../styles/mainpage/listbooth.css';

class ListBooth extends React.Component {

	render() {
		return <div className="tm-paging-links">
			<nav>
				<ul>
					<li className="tm-paging-item">
						<a
							href=""
							className="tm-paging-link active"
							onClick={(e) => this.handleBoothClick(e, "XIEN")}
						>
							Xiên Nướng
						</a>
					</li>
					<li className="tm-paging-item">
						<a
							href=""
							className="tm-paging-link"
							onClick={(e) => this.handleBoothClick(e, "GOI")}
						>
							Gỏi
						</a>
					</li>
					<li className="tm-paging-item">
						<a
							href=""
							className="tm-paging-link"
							onClick={(e) => this.handleBoothClick(e, "PHA_LAU")}
						>
							Phá Lấu
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





