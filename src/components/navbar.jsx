import React from 'react';

class NavBar extends React.Component{
	
	render(){
		return(
			<nav className="nav-bar">
				<span>FIFA World Cup 2018</span>
				<button onClick={this.props.resetState} name="" id="home">Home</button>
				<button onClick={this.props.getData} name="fixtures" id="fixtures">Fixtures</button>
				<button onClick={this.props.getData} name="leagueTable" id="groups">Groups</button>
				<button onClick={this.props.getData} name="teams" id="teams">Teams</button>
			</nav>
		)
	}
}

export default NavBar;