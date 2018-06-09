import React from 'react';
import Players from './players.jsx';

const API_KEY = '658f018fb8a54c939b305707508ff79b';

class Teams extends React.Component{
	
	state = {
		showPopup : false,
		players : undefined
	};
	
	getPlayers = async (e) => {
		const playerUrl = e.target.value;
		const api_call = await fetch(playerUrl, {headers: { 'X-Auth-Token': API_KEY }});
		const data = await api_call.json();
		
		this.toggleOverlay(e);
		console.log(data.players);
		
		this.setState({
			players : data.players
		})
	}
	
	toggleOverlay = (e) => {
		if (e.target === e.currentTarget) {
			this.setState({
				showPopup : !this.state.showPopup
			})
		}
	}
	
	render(){
		return(
			<div>
				<ul>
					{this.props.data.map(team => (
						<li className="teams" key={team.code}>
							<p>{team.name}</p>
							<button onClick={this.getPlayers} value={team._links.players.href}>Team</button>
							<img className="teamImg" src={team.crestUrl} alt="Team Logo"/>
						</li>
					))}
				</ul>
				{this.state.showPopup && this.state.players &&
					<Players players={this.state.players} toggleOverlay={this.toggleOverlay} />
				}
			</div>
		)
	}
}

export default Teams;