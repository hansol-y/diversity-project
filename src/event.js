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


/* BELOW IS THE DB INTEGRATION CODE SUGGESTED BY CHATGPT

In the code, replace <username> and <password> with your MongoDB Atlas account's username and password, 
<cluster> with the name of your MongoDB Atlas cluster, and <database> with the name of the database you want to connect to.

Note that the above code only connects to the database and inserts data into it. 
You'll need to modify your existing code to use the MongoDB driver's methods for interacting with the database,
such as collection.find() to retrieve data from the collection.

BELOW IS THE ACTUAL CODE
   
import { MongoClient } from 'mongodb';

const uri = 'mongodb+srv://<username>:<password>@<cluster>/<database>?retryWrites=true&w=majority';

const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

export class Event {
  constructor(title, date, description, location, imgurl, category) {
    try {
      if (isTitleValid(title)) {
        this.title = title;
      } else {
        throw 'invalid title';
      }

      if (isDateValid(date)) {
        this.date = date;
      } else {
        throw 'invalid date';
      }

      this.description = description;
      this.location = location;
      this.image = imgurl;
      this.category = category;

      client.connect(function (err) {
        if (err) throw err;
        console.log('Connected to MongoDB');

        const events = client.db('<database>').collection('events');
        const event = {
          title: title,
          date: date,
          description: description,
          location: location,
          imgurl: imgurl,
          category: category
        };
        events.insertOne(event, function (err, res) {
          if (err) throw err;
          console.log('Event inserted');
          client.close();
        });
      });
    } catch (err) {
      console.error('Error:', err);
    }
  }
}

function isTitleValid(title) {
  return typeof title == 'string' && !(title === '');
  // if type is string and not empty
}

function isDateValid(date) {
  const now = Date.now();
  return date instanceof Date && date.getTime() > now;
  // if type is Date and later than now
} */
