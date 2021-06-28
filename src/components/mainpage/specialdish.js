import React from 'react';
import '../../styles/mainpage/specialdish.css';
import lau from '../../images/gallery/lau-01.jpeg';

class SpecialDish extends React.Component {

	render() {
		return <div className="tm-section tm-container-inner">
			<div className="row">
				<div className="col-md-6">
					<figure className="tm-description-figure">
						<img src={lau} alt="Image" className="img-fluid"/>
					</figure>
				</div>
				<div className="col-md-6">
					<div className="tm-description-box">
						<h4 className="tm-gallery-title">Món đặc biệc</h4>
						<p className="tm-mb-45"> Món này phải nói là ngon cực kỳ, ngon nhức nách. Bla bla bla bla bla bla bla bla
							bla bla bla</p>
					</div>
				</div>
			</div>
		</div>;
	}
}

export default SpecialDish;




