import React from 'react';

// TODO: THINK IF YOU NEED TO SPLIT OVERLAY FROM PLAYERS TO RE USE IT

class Players extends React.Component{
	
	render(){
		return(
			<div onClick={this.props.toggleOverlay} className="overlay">
				<div className="overlay_inner">
					<button className="overlay-close" onClick={this.props.toggleOverlay}>X</button>
					<ul className="player-container">
						{this.props.players.sort( (a,b) => {
							let first_name = a.name.split(" ");
							let second_name = b.name.split(" ");
							if (first_name[first_name.length-1] < second_name[second_name.length-1]) {
								return -1;
							}
							if (first_name[first_name.length-1] > second_name[second_name.length-1]) {
								return 1;
							}
							return 0;
						} ).map((player, index) => (
							<li className="player-name-pos" key={index}>
								<b className="player-name">{player.name}</b> <span className="player-dot">-</span> <span className="player-pos">{player.position}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		)
	}
}

export default Players;