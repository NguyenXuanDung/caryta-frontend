import React, {lazy, Suspense } from 'react';
import '../../styles/mainpage/gallery.css';
import SpecialDish from './specialdish';
import { DO_NUONG } from '../../consts/donuong';
import { GOI } from '../../consts/goi';
import { DO_CHIEN } from '../../consts/dochien';
import { DO_UONG } from '../../consts/douong';
import { PHA_LAU } from '../../consts/phalau';
import { SINH_TO } from '../../consts/sinhto';
const Dish = lazy(() => import('./dish'));

class Gallery extends React.Component {

	render() {
		return <div className="row tm-gallery">
			{this.getDishes()}
		</div>;
	}

	getDishes = () => {
		let dishes;
		switch (this.props.selectedBooth) {
			case "DO_NUONG": dishes = DO_NUONG; break;
			case "DO_CHIEN": dishes = DO_CHIEN; break;
			case "DO_UONG": dishes = DO_UONG; break;
			case "GOI": dishes = GOI; break;
			case "SINH_TO": dishes = SINH_TO; break;
			default: dishes = PHA_LAU;

		}
		return <div className="tm-gallery-page">
			{dishes.map((dish, index) => {
				return <Suspense fallback = {<div>loading...</div>}>
					<Dish
						image = {dish.image}
						title = {dish.title}
						description = {dish.description}
						price = {dish.price}
						key = {index}
					/>
				</Suspense>;
			})}
		</div>;
	}
}

export default Gallery;





