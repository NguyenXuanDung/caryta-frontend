import React, {lazy, Suspense } from 'react';
import '../../styles/mainpage/gallery.css';
import SpecialDish from './specialdish';
import { XIEN } from '../../consts/xien';
import { GOI } from '../../consts/goi';
import { DRINK} from '../../consts/drink';
const Dish = lazy(() => import('./dish'));

class Gallery extends React.Component {

	render() {
		return <div className="row tm-gallery">
			{this.getDishes()}
		</div>;
	}

	getDishes = () => {
		switch (this.props.selectedBooth) {
			case "XIEN": return <div className="tm-gallery-page">
				{XIEN.map((dish, index) => {
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
			case "GOI": return <div className="tm-gallery-page">
				{GOI.map((dish, index) => {
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
				<SpecialDish/>
			</div>;
			default: return <div className="tm-gallery-page">
				{DRINK.map((dish, index) => {
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
				<SpecialDish/>
			</div>;
		}
	}
}

export default Gallery;





