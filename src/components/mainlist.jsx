import React from 'react';

class MainList extends React.Component{
	
	logData = () =>{
		console.log(this.props.data);
	}
	
	render(){
		return(
			<button className="container-div" onClick={this.logData}>This is MainList</button>
		)
	}
}


export default MainList;