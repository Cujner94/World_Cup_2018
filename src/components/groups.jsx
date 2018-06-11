import React from 'react';

class Group extends React.Component{
	
	getData = () => {
		console.log(this.props.group);
	}
	
	render(){
		let counter = 1;
		
		return(
			<ul onClick={this.getData} className="group-container">
				<h3>Group {this.props.groupName}</h3>
				<div className="group-statistic">
					<p>#</p>
					<p>Team</p>
					<p>Goals</p>
					<p>Points</p>
				</div>
				{this.props.group.sort((a,b)=> b.points-a.points).map(el => (
					<li className="group-team" key={el.team}>
						<p className="group-position">{counter++}.</p>
						<p className="group-team-name">{el.team}</p>
						<p className="group-goals">{el.goals}:{el.goals-el.goalDifference}</p>
						<p className="group-points">{el.points}</p>
					</li>
				))}
			</ul>
		)
	}
}



class Groups extends React.Component{
	
	createComponent = () => {
		let components = [];
		for (const key in this.props.data) {
			components.push(<Group groupName={key} group={this.props.data[key]} />)
		}
		
		return components
	}
	
	render(){
		return(
			<div className="container-div groups-container">
				{this.createComponent()}
			</div>
		)
	}
}

export default Groups;