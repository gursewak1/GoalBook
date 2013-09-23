var firstShare = Ti.UI.currentWindow;

var title = Ti.App.Properties.getString('titl');
var description = Ti.App.Properties.getString('descriptio');
var affirmation = Ti.App.Properties.getString('affirmatio');
var imagepath = Ti.App.Properties.getString('imagepat');
var date = Ti.App.Properties.getString('dat');
var facebook_image = Ti.App.Properties.getString('facebook_imag');

var myDatabase = Ti.Database.install('/myDatabase.sqlite', 'myDatabase.sqlite');

var settingResultSet = myDatabase.execute('SELECT * FROM Background_images WHERE selected_view=?', '1');
var this_path = '';
var this_color = '';

while (settingResultSet.isValidRow()) {
	this_path = settingResultSet.fieldByName('path');
	this_color = settingResultSet.fieldByName('color_view');
	//   Ti.API.info(this_username + ' ' + this_user_name + ' ' + this_user_email  + ' ' + this_user_password);
	settingResultSet.next();
}
settingResultSet.close();

var tmp = (Titanium.Platform.displayCaps.platformHeight * 3.8) / 100;
var corner = Math.round(Ti.Platform.displayCaps.platformWidth * 0.025);
var width = Math.round(Ti.Platform.displayCaps.platformWidth * 0.005);

var AllView = Ti.UI.createView({
	backgroundImage : this_path,
	width : '100%',
	height : '100%'
});

firstShare.add(AllView);

var share = Ti.UI.createView({
	backgroundColor : 'black',
	opacity : 0.7,
	height : '45%',
	width : '85%',
	borderColor : '#000',
	borderWidth : width,
	borderRadius : corner,
});

// Create a Label.
var sharelabel = Ti.UI.createLabel({
	text : 'Please Share on Social Media',
	color : 'white',
	font : {
		fontSize : tmp
	},
	top : '7%',
	textAlign : 'center'
});

// Add to the parent view.
share.add(sharelabel);

// Create a Button.
var facebook = Ti.UI.createButton({
	backgroundImage : '/images/icon_facebook.png',
	height : '45%',
	width : '35%',
	left : '10%',
	bottom : '15%'
});
share.add(facebook);
// Listen for click events.
facebook.addEventListener('click', function(e) {
	temp = e.source.id;
	var msg = "I've just started using #MyGoalBook, Aristotle would use it too: \n\nGoal Description:\n" + description + "\n\nNext Step: \n" + affirmation + "\n";
	login(msg);
});
// Add to the parent view.

// Create a Button.
var twitter = Ti.UI.createButton({
	backgroundImage : '/images/icon_twitter.png',
	height : '45%',
	width : '35%',
	bottom : '15%',
	right : '10%'

});

// Listen for click events.
twitter.addEventListener('click', function(e) {
	temp = e.source.id;
	var txt = "I've just started using #MyGoalBook, Aristotle would use it too:\nGoal Title:\n" + title;
	update_tweets(txt);

});
share.add(twitter);

AllView.add(share);

function login(message) {
	var fb = require('facebook');
	fb.appid = 1399943216883877;
	fb.permissions = ['publish_stream'];
	fb.authorize();
	// Permissions your app needs
	var data = {
		link : "http://www.facebook.com/mygoalbook",
		name : "My Goal Book",
		message : message,
		description : "'I've been using MyGoalBook to help me achieve my Goals"
	};
	fb.requestWithGraphPath('me/feed', data, 'POST', function(e) {
		if (e.success) {
			var myDatabase = Ti.Database.install('/myDatabase.sqlite', 'myDatabase.sqlite');
			myDatabase.execute('INSERT INTO create_goal (title,description,affirmation,image,date,facebook_image) VALUES(?,?,?,?,?,?)', title, description, affirmation, imagepath, date, facebook_image);
			myDatabase.close();
			showAlert();

		}
	});

}

function update_tweets(txt) {

	var accessTokenKey = Ti.App.Properties.getString('twitterAccessTokenKey'), accessTokenSecret = Ti.App.Properties.getString('twitterAccessTokenSecret');

	var Twitter = require('twitter').Twitter;

	var client = Twitter({
		consumerKey : "aoCRlK8KBJwFe7QXHUFeRA",
		consumerSecret : "4dkV2R6O9IOnUbRNuOYYjtl1jTRhynE2jfXiu8pjcE",
		accessTokenKey : accessTokenKey,
		accessTokenSecret : accessTokenSecret
	});

	client.addEventListener('login', function(e) {
		if (e.success) {
			Ti.App.Properties.setString('twitterAccessTokenKey', e.accessTokenKey);
			Ti.App.Properties.setString('twitterAccessTokenSecret', e.accessTokenSecret);

			client.request("1.1/statuses/update.json", {
				'status' : txt
			}, 'POST', function(e) {
				if (e.success) {
					Ti.App.Properties.setString('twitterAccessTokenKey', null);
					Ti.App.Properties.setString('twitterAccessTokenSecret', null);
					var myDatabase = Ti.Database.install('/myDatabase.sqlite', 'myDatabase.sqlite');
					myDatabase.execute('INSERT INTO create_goal (title,description,affirmation,image,date,facebook_image) VALUES(?,?,?,?,?,?)', title, description, affirmation, imagepath, date, facebook_image);
					myDatabase.close();
					showAlert();
				} else {
					Ti.App.Properties.setString('twitterAccessTokenKey', null);
					Ti.App.Properties.setString('twitterAccessTokenSecret', null);
					alert('Tweet can not be Shared');
				}
			});
		} else {
			alert(e.error);
		}
	});

	client.authorize();

}

function showAlert() {

	var alertDialog = Titanium.UI.createAlertDialog({
		title : 'Create Goal',
		message : 'Do you want to add another goal?',
		buttonNames : ['yes', 'No'],
		cancel : 1
	});

	alertDialog.addEventListener('click', function(theEvent) {
		switch (theEvent.index) {
			case 0:
				Ti.App.Properties.setInt('start', 0);
				var app = Titanium.UI.createWindow({
					backgroundColor : 'white',
					url : 'app.js',
					navBarHidden : true,
					fullscreen : true,
					exitOnClose : true
				});
				app.open();

				break;
			//This will never be reached, if you specified cancel for index 1
			case 1:
				Ti.App.Properties.setInt('start', 1);
				var showGoal = Ti.UI.createWindow({
					backgroundColor : 'white',
					url : 'showGoal.js',
					navBarHidden : true,
					fullscreen : true,
					exitOnClose : true
				});
				showGoal.open();
				break;
			default:
				break;
		}
	});
	alertDialog.show();

}