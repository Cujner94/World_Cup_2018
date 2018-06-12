import React from 'react';

class Players extends React.Component{
	
	sortPlayers = () => {
		
		let newArr = this.props.players.sort( (a,b) => {
			let first_name = a.name.split(" ");
			let second_name = b.name.split(" ");
			
			if (first_name[first_name.length-1] < second_name[second_name.length-1]) {
				return -1;
			}
			if (first_name[first_name.length-1] > second_name[second_name.length-1]) {
				return 1;
			}
			return 0;
		} )
		
		return newArr;
	}
	
	render(){
		return(
			<ul className="player-container">
				{this.sortPlayers().map((player, index) => (
					<li className="player-name-pos" key={index}>
						<b className="player-name">{player.name}</b> <span className="player-dot">-</span> <span className="player-pos">{player.position}</span>
					</li>
				))}
			</ul>
		)
	}
}

export default Players;