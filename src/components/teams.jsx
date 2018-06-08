import React from 'react';

class Teams extends React.Component{
	
	logData = () =>{
		console.log(this.props.data[0]);
	}
	
	render(){
		return(
			<button onClick={this.logData}>These are Teams</button>
		)
	}
}

export default Teams;