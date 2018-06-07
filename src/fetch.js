import $ from 'jquery';
let data;

function getData(callback) {
	
	$.ajax({
		headers: { 'X-Auth-Token': '658f018fb8a54c939b305707508ff79b' },
		url: 'http://api.football-data.org/v1/competitions/467',
		dataType: 'json',
		type: 'GET',
		success: function(someData) {
			callback(someData);
		}
	})
}

data = getData(function(callbackData) {
	return callbackData;
});

export {data};

// .done(function(response) {
// 	return response
// })