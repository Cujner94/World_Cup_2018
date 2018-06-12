import React from 'react';

const NavBar = props => (
	<nav className="nav-bar">
		<span>FIFA World Cup 2018</span>
		<button onClick={props.resetState} name="" id="home">Home</button>
		<button onClick={props.getData} name="fixtures" id="fixtures">Fixtures</button>
		<button onClick={props.getData} name="leagueTable" id="groups">Groups</button>
		<button onClick={props.getData} name="teams" id="teams">Teams</button>
	</nav>
)

export default NavBar;