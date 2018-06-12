import React from 'react';

class Fixtures extends React.Component{
	
	state = {
		fixtureDates : undefined
	}
	
	getInfo = () => {
		// console.log(this.props.data);
		console.log(this.state);
	}
	
	convertDate = (date) => {
		const newDate = new Date(`${date}`);
		const day = newDate.getDate();
		const month = newDate.getMonth()+1;
		const dayName = newDate.toDateString().split(' ')[0];
		const days = {
			'Mon' : 'Monday',
			'Tue' : 'Tuesday',
			'Wed' : 'Wednesday',
			'Thu' : 'Thursday',
			'Fri' : 'Friday',
			'Sat' : 'Saturday',
			'Sun' : 'Sunday'
		};
		
		return `${days[dayName]} ${day}.0${month}`;
	}
	
	convertTime = (date) => {
		const newDate = new Date(`${date}`);
		const hours = newDate.getHours();
		const minutes = newDate.getMinutes();
		
		
		return `${hours}:${minutes==0 ? "0" + minutes : minutes}`;
	}
	
	componentWillMount() {
		
		let newArr = this.props.data.map(element => (
			this.convertDate(element.date)
		));
		
		let filteredArr = [...new Set(newArr)];
		
		this.setState({
			fixtureDates: filteredArr
		})
	}
	
	// TODO: WHEN CLICKING ON GROUP EXPAND POPOUT WITH FIXTURES FOR THAT TEAM
	render(){
		return(
			<div className="container-div">
				<h1>Matches</h1>
				<ul className="fixture-all-container">
					{this.state.fixtureDates &&
						this.state.fixtureDates.map(date => (
							<div className="fixture-container">
								<h3 className="fixture-date">{date}</h3>
								{this.props.data.map(fixture => (
									this.convertDate(fixture.date)==date && 
											<div className="fixture-text">
												<div className="fixture-time-and-home">
													<p className="fixture-time">{this.convertTime(fixture.date)}</p>
													<p className="fixture-home-team fixture-team-name">{fixture.homeTeamName ? fixture.homeTeamName : "TBA"}</p>
												</div>
												<p className="fixture-goals-home">{fixture.result.goalsHomeTeam ? fixture.result.goalsHomeTeam : " "}</p>
												<p className="fixture-dot"> - </p>
												<p className="fixture-goals-away">{fixture.result.goalsAwayTeam ? fixture.result.goalsAwayTeam : " "}</p>
												<p className="fixture-away-team fixture-team-name">{fixture.awayTeamName ? fixture.awayTeamName: "TBA"}</p>
											</div>
								 ) )}
							</div>
						))
					}
				</ul>
			</div>
		)
	}
}

export default Fixtures;