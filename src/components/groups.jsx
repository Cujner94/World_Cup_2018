import React from 'react';
import Overlay from './overlay.jsx';

const API_KEY = '658f018fb8a54c939b305707508ff79b';


class Group extends React.Component{
	
	state = {
		showPopup : false,
		fixtures: undefined
	};
	
	getData = async (e) => {
		const target = e.target.textContent;
		const api_call = await fetch(`https://api.football-data.org/v1/competitions/467/fixtures`, {headers: { 'X-Auth-Token': API_KEY }});
		const data = await api_call.json();
		const filteredFixtures = await data.fixtures.filter(fixture => fixture.awayTeamName == target || fixture.homeTeamName == target)
		
		this.toggleOverlay(e);
		
		console.log(filteredFixtures);
		
		this.setState({
			fixtures: filteredFixtures
		})
	};
	
	toggleOverlay = (e) => {
		if (e.target === e.currentTarget) {
			this.setState({
				showPopup : !this.state.showPopup
			})
		}
	}
	
	render(){
		let counter = 1;
		
		return(
			<ul className="group-container">
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
						<p onClick={this.getData} className="group-team-name">{el.team}</p>
						<p className="group-goals">{el.goals}:{el.goals-el.goalDifference}</p>
						<p className="group-points">{el.points}</p>
					</li>
				))}
				{this.state.showPopup &&
					<Overlay toggleOverlay={this.toggleOverlay} fixtures={this.state.fixtures} />
				}
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