import React, {Component} from 'react';

class Facecards extends Component {
	render() {
		return (
			<section id="two" className="wrapper style1 special">
				<div className="inner">
					<header>
						<h2>Ipsum Feugiat</h2>
						<p>Semper suscipit posuere apede</p>
					</header>
					<div className="flex flex-4">
						<div className="box person">
							<div className="image round">
								<img src={require("../images/pic03.jpg")} alt="Person 1" />
							</div>
							<h3>Magna</h3>
							<p>Cipdum dolor</p>
						</div>
						<div className="box person">
							<div className="image round">
								<img src={require("../images/pic04.jpg")} alt="Person 2" />
							</div>
							<h3>Ipsum</h3>
							<p>Vestibulum comm</p>
						</div>
						<div className="box person">
							<div className="image round">
								<img src={require("../images/pic05.jpg")} alt="Person 3" />
							</div>
							<h3>Tempus</h3>
							<p>Fusce pellentes</p>
						</div>
						<div className="box person">
							<div className="image round">
								<img src={require("../images/pic06.jpg")} alt="Person 4" />
							</div>
							<h3>Dolore</h3>
							<p>Praesent placer</p>
						</div>
					</div>
				</div>
			</section>

		);
	}
}
export default Facecards;
