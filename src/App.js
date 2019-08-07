import React, { Component } from 'react';
import './css/App.css';

import Header from './components/Header';
import Banner from './components/Banner';
import Section from './components/Section'
import Footer from './components/Footer';
import Facecards from './components/Facecards';
import Midsection from './components/Midsection';
import Subsection from './components/Subsection';

class App extends Component {
	render() {
		return (
			<div className="App">
				<Header />
				<Banner/>
				<Section/>
				<Facecards/>
				<Midsection/>
				<Subsection/>
				<Footer/>
			</div>
		);
	}
}

export default App;
