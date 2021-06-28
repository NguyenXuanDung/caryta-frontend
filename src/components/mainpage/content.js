import React from 'react';
import Welcome from './welcome';
import ListBooth from './listbooth';
import Gallery from './gallery';
class Content extends React.Component {

	render() {
		return <main>
			<Welcome/>
			<ListBooth/>
			<Gallery/>
		</main>;
	}
}

export default Content;





