import React from 'react';
import ReactDOM from 'react-dom';

const API_KEY = '658f018fb8a54c939b305707508ff79b';


// TODO: Get each button name attribute to match other link extensions


class MyButton extends React.Component{
	
	render(){
		
		return(
			<div>
				<button onClick={this.props.getData}>CLICK ME </button>
			</div>
		)
		
	}
	
}

class App extends React.Component {
	
	getData = async () => {
		const api_call = await fetch('http://api.football-data.org/v1/competitions/467', {headers: { 'X-Auth-Token': API_KEY }});
		const data = await api_call.json();
		console.log(data);
	};
	
	// TODO: PASS LINK TO NAV COMPONENT TO ALTER IT..SET STATE FROM THAT NAV AND PASS IT INTO ANOTHER DIV
	
	render() {
		
		return(
			<div>
				<MyButton getData={this.getData}/>
			</div>
		)
		
	}
}


ReactDOM.render(<App/>, document.querySelector('.root'));