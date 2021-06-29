import React from 'react';
import Welcome from './welcome';
import ListBooth from './listbooth';
import Gallery from './gallery';
class Content extends React.Component {

	state = {
		selectedBooth: "XIEN"
	}

	render() {
		return <main>
			<Welcome/>
			<ListBooth handleBoothClick = {this.handleBoothClick}/>
			<Gallery selectedBooth={this.state.selectedBooth}/>
		</main>;
	}

	handleBoothClick = (boothName) => {
		this.setState({
			selectedBooth: boothName
		});
	}
}

export default Content;





