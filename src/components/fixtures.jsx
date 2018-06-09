import React from 'react';

class Fixtures extends React.Component{
	
	getInfo = () => {
		console.log(this.props.data);
	}
	
	convertDate = (date) => {
		const newDate = new Date(`${date}`);
		const day = newDate.getDate();
		const month = newDate.getMonth()+1;
		const hours = newDate.getHours();
		const minutes = newDate.getMinutes();
		const dayName = newDate.toDateString().split(' ')[0];
		
		return `${dayName} ${day}/${month}  ${hours}:${minutes==0 ? "0" + minutes : minutes}`
	}
	
	render(){
		return(
			<div className="container-div">
				<button onClick={this.getInfo}>Fixtures</button>
				<ul>
					{this.props.data.map(fixture => (
						<li className="fixture">
							<p>{fixture.homeTeamName ? fixture.homeTeamName : "TBA"} - {fixture.awayTeamName ? fixture.awayTeamName: "TBA"}</p>
							<p>{this.convertDate(fixture.date)}</p>
						</li>
					))}
				</ul>
			</div>
		)
	}
}

export default Fixtures;