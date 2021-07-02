import React from 'react';
import Welcome from './welcome';
import ListBooth from './listbooth';
import Gallery from './gallery';
class Content extends React.Component {

	state = {
		selectedBooth: "DO_NUONG"
	}

	render() {
		return <main>
			<Welcome/>
			<ListBooth
				handleBoothClick = {this.handleBoothClick}
				selectedBooth={this.state.selectedBooth}
			/>
			<Gallery
				selectedBooth={this.state.selectedBooth}
			/>
		</main>;
	}

	handleBoothClick = (boothName) => {
		this.setState({
			selectedBooth: boothName
		});
	}
}

export default Content;





