import React from 'react';
import '../styles/container.css';
import Header from './mainpage/header';
import Content from './mainpage/content';

class Container extends React.Component {

		render() {
			return <div className="container">
				<Header/>
				<Content/>
			</div>;
		}
}

export default Container;
