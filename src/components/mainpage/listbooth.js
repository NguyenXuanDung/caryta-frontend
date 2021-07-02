import React from 'react';
import '../../styles/mainpage/listbooth.css';
import { BOOTH } from "../../consts/booth"

class ListBooth extends React.Component {

	render() {
		let selectedPage = this.props.selectedBooth;
		return <div className="tm-paging-links">
			<nav>
				<ul>
					{BOOTH.map(booth => {
						return <li className="tm-paging-item">
							<a
								href=""
								className={["tm-paging-link", selectedPage === booth.id ? "active" : ""].join(" ")}
								onClick={(e) => this.handleBoothClick(e, booth.id)}
								id={booth.id}
							>
								{booth.name}
							</a>
						</li>;
					})}
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





