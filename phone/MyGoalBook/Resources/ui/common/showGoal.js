var showGoal = Ti.UI.currentWindow;
showGoal.orientationModes = [Titanium.UI.PORTRAIT, Titanium.UI.UPSIDE_PORTRAIT, Titanium.UI.LANDSCAPE_LEFT, Titanium.UI.LANDSCAPE_RIGHT];

var temp = '';
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

//****************************************************************************Fonts***************************************************

var fontsResultSet = myDatabase.execute('SELECT * FROM fonts WHERE selected=?', '1');
var this_font = '';
while (fontsResultSet.isValidRow()) {
	this_font = fontsResultSet.fieldByName('name');
	fontsResultSet.next();
}
fontsResultSet.close();

var reminderResultSet = myDatabase.execute('SELECT * FROM Reminder WHERE rowid=?', '1');
var this_reminder = '';
while (reminderResultSet.isValidRow()) {
	this_reminder = reminderResultSet.fieldByName('reminder');
	reminderResultSet.next();
}
reminderResultSet.close();

var create_goalResultSet = myDatabase.execute('SELECT rowid,* FROM create_goal');
var this_row = [];
var this_title = [];
var this_description = [];
var this_affirmation = [];
var this_image = [];
var this_date = [];
var this_achieved = [];
var facebook_image = [];
while (create_goalResultSet.isValidRow()) {
	this_row.push(create_goalResultSet.fieldByName('rowid'));
	this_title.push(create_goalResultSet.fieldByName('title'));
	this_description.push(create_goalResultSet.fieldByName('description'));
	this_affirmation.push(create_goalResultSet.fieldByName('affirmation'));
	this_image.push(create_goalResultSet.fieldByName('image'));
	this_date.push(create_goalResultSet.fieldByName('date'));
	this_achieved.push(create_goalResultSet.fieldByName('achieved'));
	facebook_image.push(create_goalResultSet.fieldByName('facebook_image'));
	create_goalResultSet.next();
}
var count = this_title.length;
create_goalResultSet.close();

buy = Ti.App.Properties.getBool('buy', false);

var tmp = (Titanium.Platform.displayCaps.platformHeight * 3.8) / 100;
var tmp2 = (Titanium.Platform.displayCaps.platformHeight * 2.2) / 100;
var corner = Math.round(Ti.Platform.displayCaps.platformWidth * 0.01);
var corner1 = Math.round(Ti.Platform.displayCaps.platformWidth * 0.02);
var width = Math.round(Ti.Platform.displayCaps.platformWidth * 0.003);
//create object instance, a parasitic subclass of Observable
var second = Titanium.UI.createView({
	backgroundColor : 'black',
	width : '100%',
	height : '100%'
});
showGoal.add(second);

var secondsubself = Titanium.UI.createView({
	backgroundColor : 'white',
	top : '2%',
	width : '96%',
	height : '96%',
	backgroundImage : this_path
});
second.add(secondsubself);

var secondsubselfBottom = Titanium.UI.createView({
	width : '100%',
	height : '11%',
	bottom : '0%',
	backgroundImage : '/images/topbar.png',
	layout : 'horizontal'
});
secondsubself.add(secondsubselfBottom);

var secondmyGoalBook = Ti.UI.createView({
	backgroundColor : this_color,
	height : '96%',
	width : '20%',
	borderRadius : corner,
	top : '2%'
});

// Add to the parent view.
secondsubselfBottom.add(secondmyGoalBook);

var secondmyGoalBookicon = Ti.UI.createView({
	backgroundImage : '/images/MyGoalBook1.png',
	height : 35,
	width : 35
});
secondmyGoalBook.add(secondmyGoalBookicon);

// Create a Button.
var secondCreate_goal = Ti.UI.createView({
	height : '96%',
	width : '20%',
	borderRadius : corner,
});

// Listen for click events.
secondCreate_goal.addEventListener('click', function() {

	indicator();

	var check = Ti.App.Properties.setBool('check', false);
	var Create_Goal = Titanium.UI.createWindow({
		backgroundColor : 'white',
		url : 'Create_Goal.js',
		navBarHidden : true,
		fullscreen : true,
		exitOnClose : true
	});
	Create_Goal.open();
});

// Add to the parent view.
secondsubselfBottom.add(secondCreate_goal);

var secondCreate_goalicon = Ti.UI.createView({
	backgroundImage : '/images/createGoal.png',
	height : 35,
	width : 35

});
secondCreate_goal.add(secondCreate_goalicon);

var secondcompleteGoal = Ti.UI.createView({
	height : '96%',
	width : '19.5%',
	borderRadius : corner,
});

// Listen for click events.
secondcompleteGoal.addEventListener('click', function() {

	indicator();

	var Goalcomplete = Titanium.UI.createWindow({
		backgroundColor : 'white',
		url : 'Goalcomplete.js',
		navBarHidden : true,
		fullscreen : true,
		exitOnClose : true
	});
	Goalcomplete.open();
});

// Add to the parent view.
secondsubselfBottom.add(secondcompleteGoal);

var secondcompleteGoalicon = Ti.UI.createView({
	backgroundImage : '/images/Goal_complete.png',
	height : 35,
	width : 35
});
secondcompleteGoal.add(secondcompleteGoalicon);

// Create a Button.
var secondsetting = Ti.UI.createView({
	height : '96%',
	width : '19.5%',
	borderRadius : corner,

});

// Listen for click events.
secondsetting.addEventListener('click', function() {

	indicator();

	var Settings = Titanium.UI.createWindow({
		backgroundColor : 'white',
		url : 'Setting.js',
		navBarHidden : true,
		fullscreen : true,
		exitOnClose : true
	});
	Settings.open();
});

// Add to the parent view.
secondsubselfBottom.add(secondsetting);

var secondsettingicon = Ti.UI.createView({
	backgroundImage : '/images/settings.png',
	height : 35,
	width : 35
});
secondsetting.add(secondsettingicon);

// Create a Button.
var secondhome = Ti.UI.createView({
	height : '96%',
	width : '20%',
	borderRadius : corner,

});

// Listen for click events.
secondhome.addEventListener('click', function() {

	indicator();

	var first_text_view = Ti.UI.createWindow({
		backgroundColor : 'white',
		url : 'first_text_view.js',
		navBarHidden : true,
		fullscreen : true,
		exitOnClose : true
	});
	first_text_view.open();
});

// Add to the parent view.
secondsubselfBottom.add(secondhome);

var secondhomeicon = Ti.UI.createView({
	backgroundImage : '/images/home.png',
	height : 35,
	width : 35
});
secondhome.add(secondhomeicon);

var tftModule = require('com.tapfortap.ti');
Ti.API.info("module is => " + tftModule);

var tft = tftModule.createTapForTap();
tft.initializeWithApiKey("9b510387a2449fa08cc3be137c35b760");

var interstitial = tftModule.createInterstitial();
interstitial.addEventListener("receive", function(d) {
	Ti.API.info("Interstitial received");
});

interstitial.addEventListener("show", function(d) {
	Ti.API.info("Interstitial shown");
});

interstitial.addEventListener("dismiss", function(d) {
	Ti.API.info("Interstitial dismissed");
});

interstitial.addEventListener("fail", function(d) {
	Ti.API.info("Interstitial dismissed failed because: ", JSON.stringify(d, null, 2));
});
var adView = tftModule.createAdView({
	width : '100%',
	height : '12%',
	top : 0,
	left : 0
});

Ti.API.info("adView is => " + adView);

adView.addEventListener("tap", function(d) {
	Ti.API.info("Banner was tapped");
});

adView.addEventListener("receive", function(d) {
	Ti.API.info("Banner was received");
});

adView.addEventListener("error", function(d) {
	Ti.API.info("Failed to receive banner because ", JSON.stringify(d, null, 2));
});

Titanium.Gesture.addEventListener('orientationchange', function(e) {
	switch(e.orientation) {
		case Ti.UI.PORTRAIT:
		case Ti.UI.UPSIDE_PORTRAIT:
			secondsubselfBottom.height = '11%';
			var cardopen = CARDs.getCurrentPage();
			secondsubself.remove(secondsubselfcenterLandscape);
			secondsubself.add(secondsubselfcenter);
			CARD.setCurrentPage(cardopen);

			break;
		case Ti.UI.LANDSCAPE_LEFT:
		case Ti.UI.LANDSCAPE_RIGHT:
			secondsubselfBottom.height = '13%';
			var cardop = CARD.getCurrentPage();
			secondsubself.remove(secondsubselfcenter);
			secondsubself.add(secondsubselfcenterLandscape);
			CARDs.setCurrentPage(cardop);

			break;
		case Ti.UI.UNKNOWN:
		default:
			break;
	}
});

//*******************************************************POTRAIT MODE****************************************************
var secondsubselfcenter = Titanium.UI.createView({
	width : '100%',
	height : '85%',
	top : '2%',
});

var view = [];
for (var i = 0; i < count; i++) {
	view[i] = Ti.UI.createView({
		height : '100%',
		width : '100%',
	});

	var TitleView = Ti.UI.createView({
		width : '85%',
		left : '5%',
		id : i,
		height : '6.7%',
		top : '0%',
		rowid:this_row[i]
	});
	view[i].add(TitleView);

	var Getting_Started = Ti.UI.createLabel({
		text : this_title[i],
		color : 'black',
		font : {
			fontSize : tmp,
			fontFamily : this_font
		},
		left : '0%',
		height : '100%',
		top : '0%'
	});
	TitleView.add(Getting_Started);

	var GoalImage = Ti.UI.createImageView({
		backgroundImage : '/images/noImage.png',
		image : this_image[i],
		width : '90%',
		left : '5%',
		id : i,
		height : '46%',
		top : '8%',
		borderRadius : corner1,
		rowid:this_row[i]
		// borderWidth : width,
		// borderColor : 'black',
	});
	GoalImage.addEventListener('click', function(e) {
		temp = e.source.rowid;
		var check = Ti.App.Properties.setBool('check', true);
		var viewdata = Ti.App.Properties.setString('data', temp);
		var Create_Goal = Titanium.UI.createWindow({
			backgroundColor : 'white',
			url : 'Create_Goal.js',
			navBarHidden : true,
			fullscreen : true,
			exitOnClose : true
		});
		Create_Goal.open();
	});
	view[i].add(GoalImage);

	var deleteImage = Ti.UI.createImageView({
		image : '/images/delete-icon.png',
		width : '8%',
		id : i,
		height : '6%',
		right : '1%',
		top : '0%',
		rowid:this_row[i]
	});
	view[i].add(deleteImage);

	deleteView = Ti.UI.createView({
		width : '12%',
		id : i,
		height : '10%',
		right : '0%',
		top : '0%',
		rowid:this_row[i]
	});
	deleteView.addEventListener('click', function(e) {
		complt = e.source.rowid;
		var alertDialog = Titanium.UI.createAlertDialog({
			title : 'Delete Goal',
			message : 'Do you want to delete this Goal?',
			buttonNames : ['Yes', 'No'],
			cancel : 1
		});

		alertDialog.addEventListener('click', function(theEvent) {
			switch (theEvent.index) {
				case 0:
					if (count > 0) {
						myDatabase.execute('DELETE FROM create_goal WHERE rowid=?', complt);
					} else {
						myDatabase.execute('DELETE FROM create_goal');
					}
					var showGoal = Ti.UI.createWindow({
						backgroundColor : 'white',
						url : 'showGoal.js',
						navBarHidden : true,
						fullscreen : true,
						exitOnClose : true
					});
					showGoal.open();
					break;
				//This will never be reached, if you specified cancel for index 1
				case 1:

					break;
				default:
					break;
			}
		});
		alertDialog.show();
	});
	view[i].add(deleteView);

	// Create a Label.
	var Description = Ti.UI.createLabel({
		text : 'Goal Description:',
		color : 'black',
		font : {
			fontSize : tmp2,
			fontFamily : this_font
		},
		left : '5%',
		top : '55%',
		id : i,
		rowid:this_row[i]
	});
	Description.addEventListener('click', function(e) {
		temp = e.source.rowid;
		var check = Ti.App.Properties.setBool('check', true);
		var viewdata = Ti.App.Properties.setString('data', temp);
		var Create_Goal = Titanium.UI.createWindow({
			backgroundColor : 'white',
			url : 'Create_Goal.js',
			navBarHidden : true,
			fullscreen : true,
			exitOnClose : true
		});
		Create_Goal.open();
	});
	view[i].add(Description);

	detailView = Ti.UI.createScrollView({
		bottom : '0%',
		backgroundColor : 'white',
		height : '40%',
		width : '43%',
		left : '5%',
		id : i,
		rowid:this_row[i],
		// borderRadius : corner1,
		// borderWidth : width,
		// borderColor : 'black',
		layout : 'vertical'
	});
	detailView.addEventListener('click', function(e) {
		temp = e.source.rowid;
		var check = Ti.App.Properties.setBool('check', true);
		var viewdata = Ti.App.Properties.setString('data', temp);
		var Create_Goal = Titanium.UI.createWindow({
			backgroundColor : 'white',
			url : 'Create_Goal.js',
			navBarHidden : true,
			fullscreen : true,
			exitOnClose : true
		});
		Create_Goal.open();
	});
	view[i].add(detailView);

	// Create a Label.
	var Goal_Description = Ti.UI.createLabel({
		text : this_description[i],
		color : 'black',
		font : {
			fontSize : tmp2,
			fontFamily : this_font
		},
		left : 0,
		id : i,
		rowid:this_row[i]
	});

	// Add to the parent view.
	detailView.add(Goal_Description);

	var AffirmationTitle = Ti.UI.createLabel({
		text : 'Next Step:',
		color : 'black',
		font : {
			fontSize : tmp2,
			fontFamily : this_font
		},
		left : '51%',
		top : '55%',
		id : i,
		rowid:this_row[i]
	});
	AffirmationTitle.addEventListener('click', function(e) {
		temp = e.source.rowid;
		var check = Ti.App.Properties.setBool('check', true);
		var viewdata = Ti.App.Properties.setString('data', temp);
		var Create_Goal = Titanium.UI.createWindow({
			backgroundColor : 'white',
			url : 'Create_Goal.js',
			navBarHidden : true,
			fullscreen : true,
			exitOnClose : true
		});
		Create_Goal.open();
	});
	view[i].add(AffirmationTitle);

	affirmationView = Ti.UI.createScrollView({
		top : '60%',
		backgroundColor : 'white',
		height : '20%',
		width : '44%',
		right : '5%',
		id : i,
		rowid:this_row[i],
		// borderRadius : corner1,
		// borderWidth : width,
		// borderColor : 'black',
		layout : 'vertical'
	});
	affirmationView.addEventListener('click', function(e) {
		temp = e.source.rowid;
		var check = Ti.App.Properties.setBool('check', true);
		var viewdata = Ti.App.Properties.setString('data', temp);
		var Create_Goal = Titanium.UI.createWindow({
			backgroundColor : 'white',
			url : 'Create_Goal.js',
			navBarHidden : true,
			fullscreen : true,
			exitOnClose : true
		});
		Create_Goal.open();
	});
	view[i].add(affirmationView);

	var Affirmation = Ti.UI.createLabel({
		text : this_affirmation[i],
		color : 'black',
		font : {
			fontSize : tmp2,
			fontFamily : this_font
		},
		left : 0,
		id : i,
		rowid:this_row[i]
	});

	affirmationView.add(Affirmation);

	dateView = Ti.UI.createView({
		top : '79%',
		height : '12%',
		width : '44%',
		right : '5%',
		id : i,
		rowid:this_row[i],
		layout : 'vertical'
	});

	dateView.addEventListener('click', function(e) {
	});
	view[i].add(dateView);

	var DateCompletion = Ti.UI.createLabel({
		text : 'Date for completion:',
		color : 'black',
		font : {
			fontSize : tmp2,
			fontFamily : this_font
		},
		left : '0%',
		top : '10%',
		
	});

	// Add to the parent view.
	dateView.add(DateCompletion);

	var datelabel = Ti.UI.createLabel({
		text : this_date[i],
		color : 'black',
		font : {
			fontSize : tmp2,
			fontFamily : this_font
		},
		left : '0%'
	});

	// Add to the parent view.
	dateView.add(datelabel);

	checkImageView = Ti.UI.createView({
		top : '90%',
		height : '4%',
		width : '44%',
		right : '5%',
		id : i,
		rowid:this_row[i],
		layout : 'horizontal'
	});

	var pickerdate = new Date();
	var day = pickerdate.getDate();
	var months = pickerdate.getMonth();
	var month = months + parseInt('1');
	var year = pickerdate.getFullYear();
	newdate = day + "/" + month + "/" + year;
	var date = newdate;

	checkImageView.addEventListener('click', function(e) {
		var comp = e.source.id;
		var compltg = e.source.rowid;
		indicator();

		myDatabase.execute('INSERT INTO complete_goal (title,description,affirmation,image,date,facebook_image) VALUES(?,?,?,?,?,?)', this_title[comp], this_description[comp], this_affirmation[comp], this_image[comp], date, facebook_image[comp]);
		if (count > 0) {
			myDatabase.execute('DELETE FROM create_goal WHERE rowid=?', compltg);
		} else {
			myDatabase.execute('DELETE FROM create_goal');
		}
		myDatabase.close();

		var Goalcomplete = Titanium.UI.createWindow({
			backgroundColor : 'white',
			url : 'Goalcomplete.js',
			navBarHidden : true,
			fullscreen : true,
			exitOnClose : true
		});
		Goalcomplete.open();
	});
	view[i].add(checkImageView);

	var checkImage = Ti.UI.createImageView({
		image : '/images/checkboxs-1.png',
		width : '16%',
		id : i,
		height : '100%',
		top : '0%',
		left : '0%',
		borderColor : 'black',
		borderWidth : width,
		rowid:this_row[i]
	});
	checkImage.addEventListener('click', function(e) {
	});
	checkImageView.add(checkImage);

	// Create a Label.
	var narrative = Ti.UI.createLabel({
		text : 'Check box when',
		color : 'black',
		font : {
			fontSize : tmp2,
			fontFamily : this_font
		},
		textAlign : 'center',
		left : '3%',
		id : i,
		rowid:this_row[i]
	});

	// Add to the parent view.
	checkImageView.add(narrative);

	// Create a Label.
	var narrative2 = Ti.UI.createLabel({
		text : 'goal is completed',
		color : 'black',
		font : {
			fontSize : tmp2,
			fontFamily : this_font
		},
		textAlign : 'center',
		top : '95%',
		left : '51%',
		id : i,
		rowid:this_row[i]
	});
	narrative2.addEventListener('click', function(e) {
		indicator();
		var comp = e.source.id;
		var complt = e.source.rowid;
		myDatabase.execute('INSERT INTO complete_goal (title,description,affirmation,image,date,facebook_image) VALUES(?,?,?,?,?,?)', this_title[comp], this_description[comp], this_affirmation[comp], this_image[comp], date, facebook_image[comp]);
		if (count > 0) {
			myDatabase.execute('DELETE FROM create_goal WHERE rowid=?', complt);
		} else {
			myDatabase.execute('DELETE FROM create_goal');
		}
		myDatabase.close();

		var Goalcomplete = Titanium.UI.createWindow({
			backgroundColor : 'white',
			url : 'Goalcomplete.js',
			navBarHidden : true,
			fullscreen : true,
			exitOnClose : true
		});
		Goalcomplete.open();
	});
	// Add to the parent view.
	view[i].add(narrative2);
}

var CARD = Ti.UI.createScrollableView({
	views : view,
	//showPagingControl : true
});

if (!buy) {
	viewNumber = 0;
	var swipecount = 0;
	CARD.addEventListener('scroll', function(e) {
		if (viewNumber != e.currentPage) {
			viewNumber = e.currentPage;
			swipecount++;
			// And saving for next time change notification
			if (swipecount > 4) {
				swipecount = 0;
				CARD.fireEvent('pageChanged', e);
			}
			// And I am fire my pageChanged event on scroller
		}
		//Do something here
	});

	CARD.addEventListener('pageChanged', function(e) {
		interstitial.show();
		//Do something here
	});
}
if (count == 0) {

	// Create a Label.
	var No_Goals = Ti.UI.createLabel({
		text : 'No Goals',
		color : 'black',
		font : {
			fontSize : tmp,
			fontFamily : this_font
		},
		textAlign : 'center'
	});

	// Add to the parent view.
	secondsubselfcenter.add(No_Goals);

} else {
	secondsubselfcenter.add(CARD);
}

//*************************************************LANDSCAPE MODE ******************************************************************

var secondsubselfcenterLandscape = Titanium.UI.createView({
	width : '100%',
	height : '85%',
	top : '1%',
});

var pWidth = Ti.Platform.displayCaps.platformWidth;
var pHeight = Ti.Platform.displayCaps.platformHeight;
if (pWidth > pHeight) {
	var oriCurrent = 'landscape';
	secondsubself.add(secondsubselfcenterLandscape);
} else {
	var oriCurrent = 'portrait';
	secondsubself.add(secondsubselfcenter);
	if (!buy) {
		secondsubself.add(adView);
		setTimeout(function() {
			secondsubself.remove(adView);
		}, 15000);
	}

}

var viewer = [];
for (var r = 0; r < count; r++) {

	viewer[r] = Ti.UI.createView({
		height : '100%',
		width : '100%'
	});

	var TitleView_land = Ti.UI.createView({
		width : '45%',
		left : '3%',
		id : r,
		height : '10%',
		top : '1%',
		rowid:this_row[r]

	});
	viewer[r].add(TitleView_land);

	var Getting_Started = Ti.UI.createLabel({
		text : this_title[r],
		color : 'black',
		font : {
			fontSize : tmp,
			fontFamily : this_font
		},
		left : '0%',
		height : '100%',
		top : '0%'
	});
	TitleView_land.add(Getting_Started);

	// Create an ImageView.
	var GoalImage = Ti.UI.createImageView({
		backgroundImage : '/images/noImage.png',
		image : this_image[r],
		width : '45%',
		id : r,
		height : '88%',
		top : '12%',
		left : '3%',
		rowid:this_row[r]
		// borderWidth : width,
		// borderColor : 'black',
	});
	GoalImage.addEventListener('click', function(e) {
		temp = e.source.rowid;
		var check = Ti.App.Properties.setBool('check', true);
		var viewdata = Ti.App.Properties.setString('data', temp);
		var Create_Goal = Titanium.UI.createWindow({
			backgroundColor : 'white',
			url : 'Create_Goal.js',
			navBarHidden : true,
			fullscreen : true,
			exitOnClose : true
		});
		Create_Goal.open();
	});
	viewer[r].add(GoalImage);

	// Create a Label.
	var Description = Ti.UI.createLabel({
		text : 'Goal Description:',
		color : 'black',
		font : {
			fontSize : tmp2,
			fontFamily : this_font
		},
		left : '52%',
		top : '5%',
		id : r,
		rowid:this_row[r]
	});
	Description.addEventListener('click', function(e) {
		temp = e.source.rowid;
		var check = Ti.App.Properties.setBool('check', true);
		var viewdata = Ti.App.Properties.setString('data', temp);
		var Create_Goal = Titanium.UI.createWindow({
			backgroundColor : 'white',
			url : 'Create_Goal.js',
			navBarHidden : true,
			fullscreen : true,
			exitOnClose : true
		});
		Create_Goal.open();
	});
	viewer[r].add(Description);

	detailView = Ti.UI.createScrollView({
		top : '12%',
		backgroundColor : 'white',
		height : '36%',
		width : '45%',
		right : '3%',
		id : r,
		rowid:this_row[r],
		// borderWidth : width,
		// borderColor : 'black',
		layout : 'vertical'
	});
	detailView.addEventListener('click', function(e) {
		temp = e.source.rowid;
		var check = Ti.App.Properties.setBool('check', true);
		var viewdata = Ti.App.Properties.setString('data', temp);
		var Create_Goal = Titanium.UI.createWindow({
			backgroundColor : 'white',
			url : 'Create_Goal.js',
			navBarHidden : true,
			fullscreen : true,
			exitOnClose : true
		});
		Create_Goal.open();
	});
	viewer[r].add(detailView);

	// Create a Label.
	var Goal_Description = Ti.UI.createLabel({
		text : this_description[r],
		color : 'black',
		font : {
			fontSize : tmp2,
			fontFamily : this_font
		},
		left : 0,
	});

	// Add to the parent view.
	detailView.add(Goal_Description);

	var deleteImage = Ti.UI.createImageView({
		image : '/images/delete-icon.png',
		width : '6%',
		id : r,
		rowid:this_row[r],
		height : '9%',
		right : '0.5%',
		top : '2.5%',
	});
	viewer[r].add(deleteImage);

	deleteView = Ti.UI.createView({
		width : '10%',
		id : i,
		height : '13%',
		right : '0%',
		top : '0%',
		rowid:this_row[r]
	});
	deleteView.addEventListener('click', function(e) {
		comp = e.source.id;
		complt = e.source.rowid;
		var alertDialog = Titanium.UI.createAlertDialog({
			title : 'Delete Goal',
			message : 'Do you want to delete this Goal?',
			buttonNames : ['Yes', 'No'],
			cancel : 1
		});

		alertDialog.addEventListener('click', function(theEvent) {
			switch (theEvent.index) {
				case 0:
					if (count > 0) {
						myDatabase.execute('DELETE FROM create_goal WHERE rowid=?', complt);
					} else {
						myDatabase.execute('DELETE FROM create_goal');
					}
					var showGoal = Ti.UI.createWindow({
						backgroundColor : 'white',
						url : 'showGoal.js',
						navBarHidden : true,
						fullscreen : true,
						exitOnClose : true
					});
					showGoal.open();
					break;
				//This will never be reached, if you specified cancel for index 1
				case 1:

					break;
				default:
					break;
			}
		});
		alertDialog.show();
	});
	viewer[r].add(deleteView);

	var AffirmationTitle = Ti.UI.createLabel({
		text : 'Next Step:',
		color : 'black',
		font : {
			fontSize : tmp2,
			fontFamily : this_font
		},
		left : '52%',
		top : '49%',
		id : r,
		rowid:this_row[r]
	});
	AffirmationTitle.addEventListener('click', function(e) {
		temp = e.source.rowid;
		var check = Ti.App.Properties.setBool('check', true);
		var viewdata = Ti.App.Properties.setString('data', temp);
		var Create_Goal = Titanium.UI.createWindow({
			backgroundColor : 'white',
			url : 'Create_Goal.js',
			navBarHidden : true,
			fullscreen : true,
			exitOnClose : true
		});
		Create_Goal.open();
	});

	// Add to the parent view.
	viewer[r].add(AffirmationTitle);

	affirmationView = Ti.UI.createScrollView({
		top : '55%',
		backgroundColor : 'white',
		height : '22%',
		width : '45%',
		right : '3%',
		id : r,
		// borderWidth : width,
		// borderColor : 'black',
		layout : 'vertical',
		rowid:this_row[r]
	});
	affirmationView.addEventListener('click', function(e) {
		temp = e.source.rowid;
		var check = Ti.App.Properties.setBool('check', true);
		var viewdata = Ti.App.Properties.setString('data', temp);
		var Create_Goal = Titanium.UI.createWindow({
			backgroundColor : 'white',
			url : 'Create_Goal.js',
			navBarHidden : true,
			fullscreen : true,
			exitOnClose : true
		});
		Create_Goal.open();
	});
	viewer[r].add(affirmationView);

	var Affirmation = Ti.UI.createLabel({
		text : this_affirmation[r],
		color : 'black',
		font : {
			fontSize : tmp2,
			fontFamily : this_font
		},
		left : 0
	});

	affirmationView.add(Affirmation);

	dateView = Ti.UI.createView({
		top : '77%',
		height : '13%',
		width : '30%',
		right : '18%',
		layout : 'vertical'
	});
	dateView.addEventListener('click', function(e) {

	});
	viewer[r].add(dateView);

	var DateCompletion = Ti.UI.createLabel({
		text : 'Date for completion:',
		color : 'black',
		font : {
			fontSize : tmp2,
			fontFamily : this_font
		},
		left : '0%',
		top : '5%',
		id : r,
		rowid:this_row[r]
	});
	DateCompletion.addEventListener('click', function(e) {
	});
	// Add to the parent view.
	dateView.add(DateCompletion);

	var datelabel = Ti.UI.createLabel({
		text : this_date[r],
		color : 'black',
		font : {
			fontSize : tmp2,
			fontFamily : this_font
		},
		left : '0%',
		id : r,
		rowid:this_row[r]
	});
	datelabel.addEventListener('click', function(e) {
	});
	// Add to the parent view.
	dateView.add(datelabel);

	checkImageView = Ti.UI.createView({
		top : '92%',
		height : '8%',
		width : '12%',
		left : '52%',
		id : r,
		rowid:this_row[r]
	});
	checkImageView.addEventListener('click', function(e) {

	});
	viewer[r].add(checkImageView);

	var checkImage = Ti.UI.createImageView({
		image : '/images/checkboxs-1.png',
		width : '50%',
		height : '100%',
		borderColor : 'black',
		borderWidth : width
	});
	checkImageView.add(checkImage);

	narrative_label = Ti.UI.createLabel({
		text : 'Check box when goal',
		color : 'black',
		font : {
			fontSize : tmp2,
			fontFamily : this_font
		},
		top : '89%',
		height : '6%',
		width : '40%',
		left : '65%',
		id : r,
		rowid:this_row[r]
	});
	viewer[r].add(narrative_label);
	narrative_label = Ti.UI.createLabel({
		text : 'is completed',
		color : 'black',
		font : {
			fontSize : tmp2,
			fontFamily : this_font
		},
		top : '95%',
		height : '5%',
		width : '40%',
		left : '65%',
		id : r,
		rowid:this_row[r]
	});
	viewer[r].add(narrative_label);

	checktickView = Ti.UI.createView({
		top : '90%',
		height : '10%',
		width : '44%',
		left : '52%',
		id : r,
		rowid:this_row[r]
	});
	checktickView.addEventListener('click', function(e) {

		indicator();

		var comp = e.source.id;
		var complt = parseInt(comp + 1);
		myDatabase.execute('INSERT INTO complete_goal (title,description,affirmation,image,date) VALUES(?,?,?,?,?)', this_title[comp], this_description[comp], this_affirmation[comp], this_image[comp], date);
		if (count > 0) {
			myDatabase.execute('DELETE FROM create_goal WHERE rowid=?', complt);
		} else {
			myDatabase.execute('DELETE FROM create_goal');
		}
		myDatabase.close();

		var Goalcomplete = Titanium.UI.createWindow({
			backgroundColor : 'white',
			url : 'Goalcomplete.js',
			navBarHidden : true,
			fullscreen : true,
			exitOnClose : true
		});
		Goalcomplete.open();
	});
	viewer[r].add(checktickView);
}

var CARDs = Ti.UI.createScrollableView({
	views : viewer,
	//showPagingControl : true
});
CARDs.addEventListener('click', function(e) {
});

if (count == 0) {
	// Create a Label.
	var No_Goals = Ti.UI.createLabel({
		text : 'No Goals',
		color : 'black',
		font : {
			fontSize : tmp,
			fontFamily : this_font
		},
		textAlign : 'center'
	});

	// Add to the parent view.
	secondsubselfcenterLandscape.add(No_Goals);

} else {
	secondsubselfcenterLandscape.add(CARDs);
}

function indicator() {
	var indicatorView = Ti.UI.createView({
		backgroundColor : 'black',
		height : '25%',
		width : '40%',
		opacity : 0.7,
		borderRadius : 10
	});
	secondsubself.add(indicatorView);
	var activityIndicator = Ti.UI.createActivityIndicator({
		style : Ti.UI.ActivityIndicatorStyle.BIG,

	});
	indicatorView.add(activityIndicator);
	activityIndicator.show();
}
