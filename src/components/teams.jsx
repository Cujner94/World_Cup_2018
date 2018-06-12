import React from 'react';
import Overlay from './overlay.jsx';

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
	
	addActive = (e) => {
		e.currentTarget.classList.add("active");
	}
	
	removeActive = (e) => {
		e.currentTarget.classList.remove("active");
	}
	
	isShowing = (e) =>{
		console.log(e);
	}
	
	render(){
		return(
			<div className="container-div">
				<ul className="team-container">
					{this.props.data.map(team => (
						<li onMouseLeave={this.removeActive}  onMouseOver={this.addActive}  className="team-main" key={team.code}>
							<div className="team-img-container">
								<img className="teamImg" src={team.crestUrl} alt="Team Logo"/>
							</div>
							<div className="team-name">
								<p>{team.name}</p>
								<button className="team-button" onClick={this.getPlayers} value={team._links.players.href}>Team</button>
							</div>
						</li>
					))}
				</ul>
				{this.state.showPopup && this.state.players &&
					<Overlay players={this.state.players} toggleOverlay={this.toggleOverlay} />
				}
			</div>
		)
	}
}

export default Teams;