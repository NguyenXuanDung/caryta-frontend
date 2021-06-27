import React from 'react';

class GetLink extends React.Component {
	constructor(props) {
		super(props);
	}

	getLocation = () => {
		navigator.geolocation.getCurrentPosition((pos) => {
			console.log(pos);
		});
	}

	render() {
		return (
			<div>
				<h1>IndexedDB</h1>
				<button
					onClick={this.getLocation}
				>
					getLocation
				</button>
			</div>
		);
	}
}

export default GetLink;