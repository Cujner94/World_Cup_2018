import React from 'react';
import Players from './players.jsx';
import Fixtures from './fixtures.jsx'

// class Overlay extends React.Component{
	
// 	render(){
// 		return(
// 			<div onClick={this.props.toggleOverlay} className="overlay">
// 				<div className="overlay_inner">
// 					<button className="overlay-close" onClick={this.props.toggleOverlay}>X</button>
// 					{this.props.players && <Players players={this.props.players}/>}
// 					{this.props.fixtures && <Fixtures data={this.props.fixtures} />}
// 				</div>
// 			</div>
// 		)
// 	}
// }

const Overlay = (props) => (
	<div onClick={props.toggleOverlay} className="overlay">
		<div className="overlay_inner">
			<button className="overlay-close" onClick={props.toggleOverlay}>X</button>
			{props.players && <Players players={props.players}/>}
			{props.fixtures && <Fixtures data={props.fixtures} />}
		</div>
	</div>
)

export default Overlay;