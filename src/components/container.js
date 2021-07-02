import React from 'react';
import '../styles/container.css';
import '../styles/call.css';
import Header from './mainpage/header';
import Content from './mainpage/content';
import About from './about/about';
import Contact from './contact/contact';
import '@fortawesome/fontawesome-free/js/all.js';
import MessengerCustomerChat from 'react-messenger-customer-chat';

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
			<a className="phone" href="tel:0901144334"><i className="fas fa-phone"></i></a>
			<MessengerCustomerChat
				pageId="104590561873951"
				appId="978573592892252"
			/>
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
			default: return <Contact/>;
		}
	}
}

export default Container;
