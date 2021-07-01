import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Container from './components/container';
import {Helmet} from "react-helmet";

class Dung extends React.Component {

		render() {
			//  "homepage": "https://NguyenXuanDung.github.io/caryta-frontend",
			//  "homepage": "https://caryta.netlify.app",
				return (
					<div>
						<Helmet>
							<title>Caryta</title>
						</Helmet>
						<Container></Container>
					</div>);
		}
}

ReactDOM.render(
		<Dung/>,
		document.getElementById('root')
);



















