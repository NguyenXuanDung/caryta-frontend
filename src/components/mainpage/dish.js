import React from 'react';
import '../../styles/mainpage/dish.css';

class Dish extends React.Component {

	render() {
		return <article className="col-lg-3 col-md-4 col-sm-6 col-12 tm-gallery-item">
			<figure>
				<img src={require("../../images/gallery/" + this.props.image)} alt="dish" className="img-fluid tm-gallery-img"/>
				<figcaption>
					<h4 className="tm-gallery-title">{this.props.title}</h4>
					<p className="tm-gallery-description">{this.props.description}</p>
					<p className="tm-gallery-price">{this.props.price}</p>
				</figcaption>
			</figure>
		</article>;
	}
}

export default Dish;





