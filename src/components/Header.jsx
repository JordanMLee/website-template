import React, {Component} from 'react';

class Header extends Component {
	render() {
		return (
			<header id="header">
				<div className="inner">
					<a href="index.html" className="logo">Company</a>
					<nav id="nav">
						<a href="index.html">Home</a>
						<a href="generic.html">Generic</a>
						<a href="elements.html">Elements</a>
					</nav>
					<a href="#navPanel" className="navPanelToggle"><span className="fa fa-bars"></span></a>
				</div>
			</header>

		);
	}
}

export default Header;
