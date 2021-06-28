import React from 'react';
import '../../styles/mainpage/welcome.css';

class Welcome extends React.Component {

	render() {
		return <header className="row tm-welcome-section">
			<h2 className="col-12 text-center tm-section-title">Chào mừng bạn đến với Caryta</h2>
			<p className="col-12 text-center">Khu chợ ẩm thực Caryta phục vụ các món ăn phong phú, đa dạng và hấp dẫn. Bên
				cạnh đó bạn còn được thưởng thức âm nhạc.</p>
		</header>;
	}
}

export default Welcome;





