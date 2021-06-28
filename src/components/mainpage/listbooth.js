import React from 'react';
import '../../styles/mainpage/listbooth.css';

class ListBooth extends React.Component {

	render() {
		return <div className="tm-paging-links">
			<nav>
				<ul>
					<li className="tm-paging-item"><a href="#" className="tm-paging-link active">Xiên Nướng</a></li>
					<li className="tm-paging-item"><a href="#" className="tm-paging-link">Gỏi</a></li>
					<li className="tm-paging-item"><a href="#" className="tm-paging-link">Phá Lấu</a></li>
				</ul>
			</nav>
		</div>;
	}
}

export default ListBooth;





