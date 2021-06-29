import React from 'react';
import '../../styles/mainpage/gallery.css';
import Dish from './dish';
import SpecialDish from './specialdish';

class Gallery extends React.Component {

	render() {
		return <div className="row tm-gallery">
			{this.getDishes()}
		</div>;
	}

	getDishes = () => {
		switch (this.props.selectedBooth) {
			case "XIEN": return <div className="tm-gallery-page">
				<Dish/>
				<Dish/>
				<Dish/>
				<Dish/>
				<Dish/>
				<Dish/>
				<Dish/>
				<Dish/>
				<Dish/>
				<Dish/>
				<Dish/>
				<Dish/>
				<SpecialDish/>
			</div>;
			case "GOI": return <div className="tm-gallery-page">
				<Dish/>
				<Dish/>
				<Dish/>
				<Dish/>
				<SpecialDish/>
			</div>;
			default: return <div className="tm-gallery-page">
				<Dish/>
				<Dish/>
				<Dish/>
				<SpecialDish/>
			</div>;
		}
	}
}

export default Gallery;





