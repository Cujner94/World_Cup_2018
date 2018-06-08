import React from 'react';

class MainList extends React.Component{
	
	logData = () =>{
		console.log(this.props.data);
	}
	
	render(){
		return(
			<button onClick={this.logData}>This is MainList</button>
		)
	}
}


export default MainList;