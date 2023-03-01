import {dbCon} from './connectDB.js';

var mysql = require('mysql');

var dbCon = mysql.createConnection({
	connectionLimit: 200,
	host: 'localhost',
	database: 'event_db'
})

export class Event {
	// public participantsList: User[];

	constructor(title, date, description, location, imgurl, category) {
		try {
			if (isTitleValid(title)) {
				this.title = title;
			} else {
				throw "invalid title"
			}

			if (isDateValid(date)) {
				this.date = date;
			} else {
				throw "invalid date"
			}

			this.description = description;
			this.location = location;
			this.image = imgurl;
			this.category = category;

			// dbCon.connect(function(err) {
			// 	if (err) throw err;
			// 	var sql = "Event object with title, date, description, location, and img"
			// 	var json_data = JSON.stringify(this);

			// 	dbCon.query(sql, [json_data], function(err, result) {
			// 		if (err) throw err;
			// 		console.log("Data inserted");
			// 	});
			// });

			dbCon.connect(function(err) {
				if (err) throw err;
				var sql = "Event object with title, date, description, location, and img";
				var json_data = JSON.stringify(this);

				dbCon.query(sql, [json_data], function(err, result) {
					if (err) throw err;
					console.log("Data inserted");
				})
			})
			
		} catch(err) {
			message.innerHTML = "Input has " + err;
		}
	};
}

function isTitleValid(title) {
	return typeof title == string && !(title === "")
	// if type is string and not empty
}

function isDateValid(date) {
	const now = Date.now()
	return typeof date == Date && date.get() > now
	//if type is date and later than now
}