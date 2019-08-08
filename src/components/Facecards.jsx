import React, {Component} from 'react';

import Card from './subcomponents/Card';
import man from "../images/pic03.jpg";
import woman from "../images/pic06.jpg"
import selfie from "../images/selfie.jpg"

class Facecards extends Component {
	constructor() {
		super();
		this.state = {
			pictures: {
				man1: man,
				woman1:woman,
				jordan:selfie
			}
		}
	}

	render() {
		return (
			<section id="two" className="wrapper style1 special">
				<div className="inner">
					<header>
						<h2>Development Team</h2>
						<p>We really like to code cool things</p>
					</header>
					<div className="flex flex-4">
						<Card image={this.state.pictures.man1}/>
						<Card image={this.state.pictures.woman1}/>
						<Card image={this.state.pictures.jordan} name={"Jordan"} description={"the Real React Guru"}/>
						<Card image={this.state.pictures.woman1}/>
					</div>
				</div>
			</section>

		);
	}
}
export default Facecards;
