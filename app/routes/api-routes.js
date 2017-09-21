// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

var accountSid = 'ACcd119963f73bce8878e3f8614fd43ae4'; // Your Account SID from www.twilio.com/console
var authToken = '6182b6f25375db1809956cfe4524544f';   // Your Auth Token from www.twilio.com/console

var twilio = require('twilio');
var client = new twilio(accountSid, authToken);
var schedule = require('node-schedule');
var j;

var connection = require("../connection/connection.js");




// Routes
// =============================================================
module.exports = function(app) {


  app.post("/new", function(req,res){
  	var number = req.body.number;
  	var message = req.body.message;
    console.log(number);
    console.log(message);

  var rule = new schedule.RecurrenceRule();
	rule.second = 50;

  j = schedule.scheduleJob(rule, function(){
	   client.messages.create({
				    body: message,
				    to: number,  // Text this number
				    from: '+19725444597 ' // From a valid Twilio number   
				})
				.then(
					(message) => console.log(message.sid)
					);
		});

    });


  app.post("/cancel", function(req,res){
  	console.log("cancel");
  	j.cancel();
  })
  




  
};



