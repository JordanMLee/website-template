import React, { Component } from 'react';
import { FaCloudDownloadAlt, FaCogs, FaWrench } from 'react-icons/fa';

class Subsection extends Component {
	render() {
		return (
			<section id="four" className="wrapper style2 special">
				<div className="inner">
					<header className="align-center">
						<h2>Fusce ultrices fringilla metus</h2>
						<span className="byline">Donec leo, vivamus fermentum nibh in augue praesent a lacus at urna congue</span>
					</header>
					<div className="flex flex-3">
						<article>
							<span> <FaCloudDownloadAlt /></span>
							<p>Praesent pellentesque facilisis elit. Class aptent taciti sociosqu ad torquent per conubia nostra.</p>
							<a href="#" className="button special">More Info</a>
						</article>
						<article>
							<span> <FaCogs /></span>
							<p>Etiam neque. Vivamus consequat lorem at nisl. Nullam wisi a sem semper eleifend. Donec mattis.</p>
							<a href="#" className="button special">More Info</a>
						</article>
						<article>
							<span> <FaWrench /></span>
							<p> Aenean lectus lorem, imperdiet at, ultrices eget, ornare et, wisi. Pellentesque adipiscing purus.</p>
							<a href="#" className="button special">More Info</a>
						</article>
					</div>
				</div>
			</section>
		);
	}

}

export default Subsection;
