import React from 'react';

// TODO: THINK IF YOU NEED TO SPLIT OVERLAY FROM PLAYERS TO RE USE IT

class Players extends React.Component{
	
	render(){
		return(
			<div onClick={this.props.toggleOverlay} className="overlay">
				<div className="overlay_inner">
					<button onClick={this.props.toggleOverlay}>Close</button>
					<ul>
						{this.props.players.map((player, index) => (
							<li key={index}>
								<b>{player.name}</b> - {player.position}
							</li>
						))}
					</ul>
				</div>
			</div>
		)
	}
}

export default Players;