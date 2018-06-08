import React from 'react';

class Group extends React.Component{
	
	getData = () => {
		console.log(this.props.group);
	}
	
	render(){
		return(
			<ul className="group">
				<h3>Group : {this.props.groupName}</h3>
				{this.props.group.map(el => (
					<li>
						<p>{el.team}</p>
						<img width="100px" height="100px" src={el.crestURI} alt="Team"/>
						<p>Points : {el.points}</p>
					</li>
				))}
			</ul>
		)
	}
}



class Groups extends React.Component{
	
	createComponent = () => {
		let components = [];
		for (const key in this.props.data) {
			components.push(<Group groupName={key} group={this.props.data[key]} />)
		}
		
		return components
	}
	
	render(){
		return(
			<div>
				{this.createComponent()}
			</div>
		)
	}
}

export default Groups;