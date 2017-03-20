var express = require("express");

var exports = {};
var router = express.Router();

router.get('/test', function (req, res, next) {
	db.collection("notes").find({}, function(err, docs) {
		console.log(docs);
	});
});

module.exports = router;