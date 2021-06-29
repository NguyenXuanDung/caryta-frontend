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
				<Dish
					image="nuong-01.jpeg"
					title="Thịt nướng phô mai"
					description="Thịt nướng phô mai, thành phần gồm phô mai và thịt, món này ngon tuyệt"
					price="15k/Xiên"
				/>
				<Dish
					image="nuong-01.jpeg"
					title="Thịt nướng phô mai"
					description="Thịt nướng phô mai, thành phần gồm phô mai và thịt, món này ngon tuyệt"
					price="15k/Xiên"
				/>
				<Dish
					image="nuong-01.jpeg"
					title="Thịt nướng phô mai"
					description="Thịt nướng phô mai, thành phần gồm phô mai và thịt, món này ngon tuyệt"
					price="15k/Xiên"
				/>
				<Dish
					image="nuong-01.jpeg"
					title="Thịt nướng phô mai"
					description="Thịt nướng phô mai, thành phần gồm phô mai và thịt, món này ngon tuyệt"
					price="15k/Xiên"
				/>
				<SpecialDish/>
			</div>;
			case "GOI": return <div className="tm-gallery-page">
				<Dish
					image="met.jpeg"
					title="Thịt nướng phô mai"
					description="Thịt nướng phô mai, thành phần gồm phô mai và thịt, món này ngon tuyệt"
					price="15k/Xiên"
				/>
				<Dish
					image="met.jpeg"
					title="Thịt nướng phô mai"
					description="Thịt nướng phô mai, thành phần gồm phô mai và thịt, món này ngon tuyệt"
					price="15k/Xiên"
				/>
				<Dish
					image="met.jpeg"
					title="Thịt nướng phô mai"
					description="Thịt nướng phô mai, thành phần gồm phô mai và thịt, món này ngon tuyệt"
					price="15k/Xiên"
				/>
				<Dish
					image="met.jpeg"
					title="Thịt nướng phô mai"
					description="Thịt nướng phô mai, thành phần gồm phô mai và thịt, món này ngon tuyệt"
					price="15k/Xiên"
				/>
				<SpecialDish/>
			</div>;
			default: return <div className="tm-gallery-page">
				<Dish
					image="drink.jpeg"
					title="Thịt nướng phô mai"
					description="Thịt nướng phô mai, thành phần gồm phô mai và thịt, món này ngon tuyệt"
					price="15k/Xiên"
				/>
				<Dish
					image="drink.jpeg"
					title="Thịt nướng phô mai"
					description="Thịt nướng phô mai, thành phần gồm phô mai và thịt, món này ngon tuyệt"
					price="15k/Xiên"
				/>
				<Dish
					image="drink.jpeg"
					title="Thịt nướng phô mai"
					description="Thịt nướng phô mai, thành phần gồm phô mai và thịt, món này ngon tuyệt"
					price="15k/Xiên"
				/>
				<Dish
					image="drink.jpeg"
					title="Thịt nướng phô mai"
					description="Thịt nướng phô mai, thành phần gồm phô mai và thịt, món này ngon tuyệt"
					price="15k/Xiên"
				/>
				<SpecialDish/>
			</div>;
		}
	}
}

export default Gallery;





