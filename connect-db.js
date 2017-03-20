var db = null;

var MongoClient = require('mongodb').MongoClient
  , assert = require('assert');
 
var url = 'mongodb://localhost:27017/aghome';

var Connection = {
	connectMongo: function() {
		MongoClient.connect(url, function(err, database) {
			assert.equal(null, err);
			console.log("Connected correctly to server");
			db = database;
			database.close();
		});
	}
}
module.exports = Connection;