import React, {Component} from 'react';
import Article from './subcomponents/Article';

class Section extends Component {
	constructor(){
		super();
		this.state = {
			location: ["two","three","four"],
			specialities: ["Software Development", "Data Analytics", "Cloud Migration"],
			descriptions:[
				"Our team of expert software developers will work to bring your ideas to life. Let us do the heavy-lifting while you sit back and relax!",
				"Data-driven analytics is crucial to maintaining a competitive advantage in the global market. We will help you extract meaningful insights",
				"Having trouble migrating to the cloud? Let us show you how its done! With our help, it'll be a painless process"
			],
		}
	}

	render() {
		return(
			<section id="one" className="wrapper">
				<div className="inner">
					<div className="flex flex-3">
						<Article location={this.state.location[0] } topic={this.state.specialities[0]} description={this.state.descriptions[0]}/>
						<Article location={this.state.location[1]} topic={this.state.specialities[1]} description={this.state.descriptions[1]}/>
						<Article location={this.state.location[2]} topic={this.state.specialities[2]} description={this.state.descriptions[2]}/>
					</div>
				</div>
			</section>

		)
	}
}
export default Section;
