import React from 'react';
import '../styles/container.css';
import Header from './mainpage/header';
import Content from './mainpage/content';
import About from './about/about';

class Container extends React.Component {

	state = {
		selectedPage: "MAIN"
	}

	render() {
		return <div className="container">
			<Header
				handleNavClick = {this.handleNavClick}
				selectedPage={this.state.selectedPage}
			/>
			{this.getBody()}
		</div>;
	}

	handleNavClick = (navName) => {
		this.setState({
			selectedPage: navName
		});
	}

	getBody = () => {
		switch (this.state.selectedPage) {
			case "MAIN": return <Content/>;
			case "ABOUT": return <About/>;
			default: return <About/>;
		}
	}
}

export default Container;
