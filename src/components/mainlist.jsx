import React from 'react';

class MainList extends React.Component{
	
	logData = () =>{
		console.log(this.props.data);
	}
	
	render(){
		return(
			<div className="container-div main-container">
				<h1 className="main-title">FIFA WORLD CUP</h1>
				<h1 className="main-year">2018 - RUSSIA</h1>
			</div>
		)
	}
}


export default MainList;