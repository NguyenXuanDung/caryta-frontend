import React from 'react';
import '../../styles/about/about.css';
import Person from './person';
import Welcome from '../mainpage/welcome';

class About extends React.Component {

	render() {
		return <div className="tm-container-inner tm-persons">
			<Welcome/>
			<div className="row">
				<Person/>
				<Person/>
				<Person/>
				<Person/>
			</div>
		</div>;
	}
}

export default About;





