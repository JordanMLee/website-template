import React, { Component } from 'react';

class Midsection extends Component {
	render() {
		return (
			<section id="three" className="wrapper special">
				<div className="inner">
					<header className="align-center">
						<h2>Data Is Everything</h2>
						<p>Let us show how it's done</p>
					</header>
					<div className="flex flex-2">
						<article>
							<div className="image fit">
								<img src={require("../images/pic01.jpg")} alt="Pic 01" />
							</div>
							<header>
								<h3>Praesent placerat magna</h3>
							</header>
							<p>Praesent dapibus, neque id cursus faucibus, tortor neque egestas augue, eu vulputate magna eros eu erat. Aliquam erat volutpat. Nam dui mi, tincidunt quis, accumsan porttitor lorem ipsum.</p>
							<footer>
								<a href="#" className="button special">More</a>
							</footer>
						</article>
						<article>
							<div className="image fit">
								<img src={require("../images/pic02.jpg")} alt="Pic 02" />
							</div>
							<header>
								<h3>Fusce pellentesque tempus</h3>
							</header>
							<p>Sed adipiscing ornare risus. Morbi est est, blandit sit amet, sagittis vel, euismod vel, velit. Pellentesque egestas sem. Suspendisse commodo ullamcorper magna non comodo sodales tempus.</p>
							<footer>
								<a href="#" className="button special">More</a>
							</footer>
						</article>
					</div>
				</div>
			</section>

		);
	}
 }
 export default Midsection;
