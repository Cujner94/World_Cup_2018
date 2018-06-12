import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './components/navbar.jsx';
import MainList from './components/mainlist.jsx';
import Teams from './components/teams.jsx'
import Groups from './components/groups.jsx'
import Fixtures from './components/fixtures.jsx'

const API_KEY = '658f018fb8a54c939b305707508ff79b';

class App extends React.Component {
	
	state = {
		data : undefined
	}
	
	getData = async (e) => {
		const queryValue = e.target.name;
		const api_call = await fetch(`https://api.football-data.org/v1/competitions/467/${queryValue}`, {headers: { 'X-Auth-Token': API_KEY }});
		const data = await api_call.json();
		
		console.log(data);
		
		this.setState({
			data: data
		})
	};
	
	resetState = () =>{
		this.setState({
			data: undefined
		})
	}
	
	render() {
		return(
			<div>
				<NavBar resetState={this.resetState} getData={this.getData}/>
				{!this.state.data && <MainList data={this.state.data}/>}
				{this.state.data && this.state.data.fixtures && <Fixtures data={this.state.data.fixtures}/>}
				{this.state.data && this.state.data.standings && <Groups data={this.state.data.standings}/>}
				{this.state.data && this.state.data.teams && <Teams data={this.state.data.teams.sort((a,b) => a.name > b.name ? 1 : -1)}/>}
			</div>
		)
	}
}


ReactDOM.render(<App/>, document.querySelector('.root'));