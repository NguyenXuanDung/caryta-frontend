import React from 'react';
import '../../styles/mainpage/gallery.css';
import Dish from './dish';
import SpecialDish from './specialdish';

class Gallery extends React.Component {

	render() {
		return <div className="row tm-gallery">
			<div className="tm-gallery-page">
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
			</div>
		</div>;
	}
}

export default Gallery;





