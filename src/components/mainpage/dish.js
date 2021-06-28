import React from 'react';
import '../../styles/mainpage/dish.css';
import nuong from '../../images/gallery/nuong-01.jpeg';

class Dish extends React.Component {

	render() {
		return <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
			<figure>
				<img src={nuong} className="img-fluid tm-gallery-img"/>
				<figcaption>
					<h4 className="tm-gallery-title">Thịt nướng phô mai</h4>
					<p className="tm-gallery-description">Thịt nướng phô mai, thành phần gồm phô mai và thịt, món này ngon
						tuyệt</p>
					<p className="tm-gallery-price">15k/Xiên</p>
				</figcaption>
			</figure>
		</article>;
	}
}

export default Dish;





