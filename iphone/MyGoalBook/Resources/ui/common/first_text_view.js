//FirstView Component Constructor
var first_text_view = Ti.UI.currentWindow;

first_text_view.orientationModes = [Titanium.UI.PORTRAIT, Titanium.UI.UPSIDE_PORTRAIT, Titanium.UI.LANDSCAPE_LEFT, Titanium.UI.LANDSCAPE_RIGHT];
var tmp = 18;
var tmp1 = 16;
var hgt = (Titanium.Platform.displayCaps.platformHeight * 6) / 100;
var tmp2 = (Titanium.Platform.displayCaps.platformHeight * 2.5) / 100;
var corner = Math.round(Ti.Platform.displayCaps.platformWidth * 0.01);

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
var count = this_path.length;
settingResultSet.close();

//****************************************************************************Fonts***************************************************

var fontsResultSet = myDatabase.execute('SELECT * FROM fonts WHERE selected=?', '1');
var this_font = '';
while (fontsResultSet.isValidRow()) {
	this_font = fontsResultSet.fieldByName('name');
	//   Ti.API.info(this_username + ' ' + this_user_name + ' ' + this_user_email  + ' ' + this_user_password);
	fontsResultSet.next();
}
fontsResultSet.close();

//****************************************************************************Fonts***************************************************

//create object instance, a parasitic subclass of Observable
AddViews();

var subself;

Titanium.Gesture.addEventListener('orientationchange', function(e) {
	switch(e.orientation) {
		case Ti.UI.PORTRAIT:
		case Ti.UI.UPSIDE_PORTRAIT:
			AddViews();
			break;
		case Ti.UI.LANDSCAPE_LEFT:
		case Ti.UI.LANDSCAPE_RIGHT:
			AddViews();
			break;
		case Ti.UI.UNKNOWN:
		default:
			break;
	}
});

function AddViews() {
	var first = Titanium.UI.createView({
		backgroundColor : 'black',
		width : '100%',
		height : '100%',
	});
	first_text_view.add(first);

	subself = Titanium.UI.createView({
		backgroundColor : 'white',
		Left : '2%',
		right : '2%',
		width : '96%',
		height : '96%',
		backgroundImage : this_path
	});
	first.add(subself);

	var subselfcenter = Titanium.UI.createScrollView({
		width : '90%',
		height : '65%',
		top : '18%',
		backgroundImage : '/images/topbar.png'
	});
	subself.add(subselfcenter);

	//**************************************************************View 1*************************************************************

	var Topsubself1 = Titanium.UI.createView({
		width : '100%',
		height : '95%',
		top : '0%',
	});

	var Getting_Started = Ti.UI.createLabel({
		text : 'Say YES to Your DREAMS',
		color : 'black',
		font : {
			fontSize : tmp,
			fontWeight : 'bold',
			fontFamily : this_font
		},
		left : '2%',
		right : '2%',
		top : '4%'
	});
	Topsubself1.add(Getting_Started);

	var subselfcenter = Titanium.UI.createView({
		width : '90%',
		height : '77%',
		top : '23%',
		//backgroundImage : '/images/topbar.png'
	});
	subselfcenter.addEventListener('click', function() {
	});
	Topsubself1.add(subselfcenter);

	// Create a Label.
	var bodyText = Ti.UI.createLabel({
		text : "You have the power to create whatever you want…greater happiness, more joy, deeper fulfillment and more abundance. \n \nMyGoalBook provides you with a unique visualization tool to allow you to embrace the principles of the Law of Attraction.",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		right : '5%',
	});

	// Add to the parent view

	subselfcenter.add(bodyText);

	//**************************************************************View 2*************************************************************

	var Topsubself2 = Titanium.UI.createView({
		width : '100%',
		height : '95%',
		top : '0%',
	});

	var Getting_Started = Ti.UI.createLabel({
		text : 'Empower Yourself. Envision Your Future',
		color : 'black',
		font : {
			fontSize : tmp,
			fontWeight : 'bold',
			fontFamily : this_font

		},
		left : '2%',
		right : '2%',
		top : '4%',
	});
	Topsubself2.add(Getting_Started);

	var subselfcenter = Titanium.UI.createView({
		width : '90%',
		height : '77%',
		top : '23%',
		//backgroundImage : '/images/topbar.png'
	});
	subselfcenter.addEventListener('click', function() {
	});
	Topsubself2.add(subselfcenter);

	// Create a Label.
	var bodyText = Ti.UI.createLabel({
		text : "Personal Success results from the ability to act, the ability to take action and the ability to produce results. ",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		right : '5%',
	});

	// Add to the parent view

	subselfcenter.add(bodyText);

	//**************************************************************View 3*************************************************************

	var Topsubself3 = Titanium.UI.createView({
		width : '100%',
		height : '95%',
		top : '0%',
	});

	var Getting_Started = Ti.UI.createLabel({
		text : 'Applying the Laws of Attraction',
		color : 'black',
		font : {
			fontSize : tmp,
			fontWeight : 'bold',
			fontFamily : this_font
		},
		left : '2%',
		right : '2%',
		top : '4%'
	});
	Topsubself3.add(Getting_Started);

	var subselfcenter = Titanium.UI.createView({
		width : '90%',
		height : '77%',
		top : '23%',
		//backgroundImage : '/images/topbar.png'
	});
	subselfcenter.addEventListener('click', function() {
	});
	Topsubself3.add(subselfcenter);

	// Create a Label.
	var bodyText = Ti.UI.createLabel({
		text : "By making simple, small changes daily, you will absolutely transform the quality of your life more quickly than you ever thought possible. Not only will you learn to take control of your own life through personal development, but you’ll learn to help others make life-altering changes as well. ",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		right : '5%',
	});

	// Add to the parent view

	subselfcenter.add(bodyText);

	//**************************************************************View 4*************************************************************

	var Topsubself4 = Titanium.UI.createView({
		width : '100%',
		height : '95%',
		top : '0%',
	});

	var Getting_Started = Ti.UI.createLabel({
		text : 'A Powerful and Versatile Visualization Tool',
		color : 'black',
		font : {
			fontSize : tmp,
			fontWeight : 'bold',
			fontFamily : this_font
		},
		left : '0%',
		right : '0%',
		top : '4%'
	});
	Topsubself4.add(Getting_Started);

	var subselfcenter = Titanium.UI.createScrollView({
		width : '90%',
		height : '77%',
		top : '23%',
		//backgroundImage : '/images/topbar.png'
	});
	subselfcenter.addEventListener('click', function() {
	});
	Topsubself4.add(subselfcenter);

	// Create a Label.
	var bodyText = Ti.UI.createLabel({
		text : "Often the biggest challenge to achieving what we desire is our ability to repeatedly review our Goals on a daily basis - if you don’t see them, they will soon be out of sight… and out of mind. \n \nMyGoalBook removes this obstacle by providing you with access to your Goals Wherever and Whenever You Like – it will even remind you to Visualize What You Desire. ",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		right : '5%',
	});

	// Add to the parent view

	subselfcenter.add(bodyText);

	//**************************************************************View 5*************************************************************

	var Topsubself5 = Titanium.UI.createView({
		width : '100%',
		height : '95%',
		top : '0%',
	});

	var Getting_Started = Ti.UI.createLabel({
		text : 'It Only Works',
		color : 'black',
		font : {
			fontSize : tmp,
			fontWeight : 'bold',
			fontFamily : this_font
		},
		left : '2%',
		top : '4%',
		right : '2%'
	});
	Topsubself5.add(Getting_Started);

	var subselfcenter = Titanium.UI.createScrollView({
		width : '90%',
		height : '77%',
		top : '23%',
		//backgroundImage : '/images/topbar.png'
	});
	subselfcenter.addEventListener('click', function() {
	});
	Topsubself5.add(subselfcenter);

	// Create a Label.
	var bodyText = Ti.UI.createLabel({
		text : "MyGoalBook keeps you focused and on track towards achieving your goals. Don’t downplay the simplicity of MyGoalBook.\n\nIt works, and there are countless examples of high achievers who have put these principles into play in their lives and are reaping great rewards as a result.",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		right : '5%'
	});

	// Add to the parent view

	subselfcenter.add(bodyText);

	//**************************************************************View 6*************************************************************

	var Topsubself6 = Titanium.UI.createView({
		width : '100%',
		height : '95%',
		top : '0%',
	});

	var Getting_Started = Ti.UI.createLabel({
		text : 'How to use MyGoalBook',
		color : 'black',
		font : {
			fontSize : tmp,
			fontWeight : 'bold',
			fontFamily : this_font
		},
		left : '2%',
		top : '4%',
		right : '2%'
	});
	Topsubself6.add(Getting_Started);

	var subselfcenter = Titanium.UI.createScrollView({
		width : '90%',
		height : '77%',
		top : '23%',
		layout : 'vertical'
	});
	subselfcenter.addEventListener('click', function() {
	});
	Topsubself6.add(subselfcenter);

	// Create a Label.
	var bodyText = Ti.UI.createLabel({
		text : "Think about your Goals – it’s always worth starting out with a clean piece of paper and writing constantly for 10 minutes a list of all the things that you desire, want to achieve, would like to experience, places to visit etc.\n\nOnce you are happy with this list, prioritise them – which ones are you determined to achieve?\n\nFor each one of these, write a brief description, find a suitable image and identify a step that you can take soon to move forward towards your goal. Finally attach a date by which you wish to achieve this goal. \n\nGo to ‘Create Goal’ and upload all of this within the app. Press ‘Save’ Congratulations, you’ve just created your first Goal Card within MyGoalBook. Repeat for as many Goals as you like.\n\nNow go to ‘Settings’ and set specific times and frequencies that you would like to be reminded to “Visualise” your Goals.\n\nYou can also upload a copy of your Goal Card to the most popular Social Media sites.",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		right : '5%',
		top : '3%'
	});

	// Add to the parent view

	subselfcenter.add(bodyText);

	// Create a Label.
	var bodyText2 = Ti.UI.createLabel({
		text : "Once you have achieved individual Goals, click on the ‘Achieved’ button within the Goal Card. You can see all of your completed Goals by clicking on the Completed Goals icon.",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		right : '5%',
		top : '3%'
	});

	// Add to the parent view

	subselfcenter.add(bodyText2);

	// Create a Label.
	var bodyText3 = Ti.UI.createLabel({
		text : " ",
		color : 'black',
		height : 'auto',
		width : 'auto',
		top : '3%'
	});

	// Add to the parent view

	subselfcenter.add(bodyText3);

	//**************************************************************View 7*************************************************************

	var Topsubself7 = Titanium.UI.createView({
		width : '100%',
		height : '95%',
		top : '0%',
	});

	var Getting_Started = Ti.UI.createLabel({
		text : 'About MyGoalBook',
		color : 'black',
		font : {
			fontSize : tmp,
			fontWeight : 'bold',
			fontFamily : this_font
		},
		left : '2%',
		top : '4%',
		right : '2%'
	});
	// Add to the parent view.
	Topsubself7.add(Getting_Started);

	//Topsubself7.add(decorateLabel_sec(Getting_Started,'#FFF'));

	var subselfcenter = Titanium.UI.createScrollView({
		width : '90%',
		height : '77%',
		top : '23%',
		//backgroundImage : '/images/topbar.png',
		layout : 'vertical'
	});
	subselfcenter.addEventListener('click', function() {
	});
	Topsubself7.add(subselfcenter);

	// Create a Label.
	var bodyText = Ti.UI.createLabel({
		text : "Version – 2.5",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		top : '3%'
	});
	subselfcenter.add(bodyText);

	// Create a Label.
	var bodyText2 = Ti.UI.createLabel({
		text : "Send us your feedback ",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		right : '5%',
		top : '3%'
	});
	bodyText2.addEventListener('click', function(e) {
		//open link in safari - application will close
		var emailDialog = Ti.UI.createEmailDialog();
		emailDialog.subject = "My Goal Book Feedback";
		emailDialog.toRecipients = ['feedback@mygoalbook.net'];
		emailDialog.messageBody = '';
		emailDialog.open();
	});
	subselfcenter.add(bodyText2);

	var bottom_line = Ti.UI.createView({
		backgroundColor : 'black',
		height : 1,
		width : 165,
		left : '5%',
		right : '5%',
	});
	subselfcenter.add(bottom_line);

	var bodyText3 = Ti.UI.createLabel({
		text : "Help",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		right : '5%',
		top : '3%'
	});
	bodyText3.addEventListener('click', function(e) {
		//open link in safari - application will close
		Titanium.Platform.openURL('http://www.mygoalbook.net/help');
	});

	subselfcenter.add(bodyText3);

	var bottom_line = Ti.UI.createView({
		backgroundColor : 'black',
		height : 1,
		width : 35,
		left : '5%',
		right : '5%',
	});
	subselfcenter.add(bottom_line);

	var bodyText4 = Ti.UI.createLabel({
		text : "Terms & Conditions",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		right : '5%',
		top : '3%'
	});
	bodyText4.addEventListener('click', function(e) {
		//open link in safari - application will close
		Titanium.Platform.openURL('http://www.mygoalbook.net/terms');
	});

	subselfcenter.add(bodyText4);

	var bottom_line = Ti.UI.createView({
		backgroundColor : 'black',
		height : 1,
		width : 150,
		left : '5%',
		right : '5%',
	});
	subselfcenter.add(bottom_line);

	var bodyText5 = Ti.UI.createLabel({
		text : "Feedback",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		right : '5%',
		top : '3%'
	});
	bodyText5.addEventListener('click', function(e) {
		//open link in safari - application will close
		Titanium.Platform.openURL('http://www.mygoalbook.net/feedback');
	});

	subselfcenter.add(bodyText5);

	var bottom_line = Ti.UI.createView({
		backgroundColor : 'black',
		height : 1,
		width : 72,
		left : '5%',
		right : '5%',
	});
	subselfcenter.add(bottom_line);

	var bodyText6 = Ti.UI.createLabel({
		text : "Review this App",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		right : '5%',
		top : '3%'
	});
	bodyText6.addEventListener('click', function(e) {
		Titanium.Platform.openURL('http://www.mygoalbook.net/feedback');
	});

	subselfcenter.add(bodyText6);

	var bottom_line = Ti.UI.createView({
		backgroundColor : 'black',
		height : 1,
		width : 120,
		left : '5%',
		right : '5%',
	});
	subselfcenter.add(bottom_line);

	var bodyText7 = Ti.UI.createLabel({
		text : "Follow us on Twitter ",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		right : '5%',
		top : '3%'
	});
	bodyText7.addEventListener('click', function(e) {
		//open link in safari - application will close
		Titanium.Platform.openURL('http://www.twitter.com/mygoalbook');
	});

	subselfcenter.add(bodyText7);

	var bottom_line = Ti.UI.createView({
		backgroundColor : 'black',
		height : 1,
		width : 152,
		left : '5%',
		right : '5%',
	});
	subselfcenter.add(bottom_line);

	var bodyText8 = Ti.UI.createLabel({
		text : "Follow us on Facebook ",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		right : '5%',
		top : '3%'
	});
	bodyText8.addEventListener('click', function(e) {
		//open link in safari - application will close
		Titanium.Platform.openURL('https://facebook.com/MyGoalBook');
	});

	subselfcenter.add(bodyText8);

	var bottom_line = Ti.UI.createView({
		backgroundColor : 'black',
		height : 1,
		width : 165,
		left : '5%',
		right : '5%',
	});
	subselfcenter.add(bottom_line);

	var bodyText9 = Ti.UI.createLabel({
		text : "Visit MyGoalBook.net",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		right : '5%',
		top : '3%'
	});
	bodyText9.addEventListener('click', function(e) {
		//open link in safari - application will close
		Titanium.Platform.openURL('http://www.mygoalbook.net');
	});
	subselfcenter.add(bodyText9);

	var bottom_line = Ti.UI.createView({
		backgroundColor : 'black',
		height : 1,
		width : 160,
		left : '5%',
		right : '5%',
	});
	subselfcenter.add(bottom_line);

	var bodyText10 = Ti.UI.createLabel({
		text : " ",
		color : 'black',
		font : {
			fontSize : tmp1,
			fontFamily : this_font
		},
		height : 'auto',
		width : 'auto',
		left : '5%',
		right : '5%',
		top : '3%'
	});

	subselfcenter.add(bodyText10);
	var fronts = Ti.UI.createScrollableView({
		//backgroundColor:'red',
		height : '89%',
		width : '90%',
		top : '0%',
		views : [Topsubself1, Topsubself2, Topsubself3, Topsubself4, Topsubself5, Topsubself6, Topsubself7],
		showPagingControl : true,
		pagingControlColor : 'transparent'
	});
	fronts.addEventListener('click', function(e) {
	});
	subself.add(fronts);

	//*********************************************************bottom View*********************************************

	var secondsubselfBottom = Titanium.UI.createView({
		width : '100%',
		height : '11%',
		bottom : '0%',
		backgroundImage : '/images/topbar.png',
		layout : 'horizontal'
	});
	subself.add(secondsubselfBottom);

	var secondmyGoalBook = Ti.UI.createView({
		height : '100%',
		width : '20%',
		borderRadius : corner,
	});

	// Listen for click events.
	secondmyGoalBook.addEventListener('click', function() {
		indicator();

		var showGoal = Ti.UI.createWindow({
			backgroundColor : 'white',
			url : 'showGoal.js',
			exitOnClose : true,
			navBarHidden : true,
			fullscreen : true
		});
		showGoal.open();
	});

	// Add to the parent view.
	secondsubselfBottom.add(secondmyGoalBook);
	var secondmyGoalBookicon = Ti.UI.createView({
		backgroundImage : '/images/MyGoalBook.png',
		height : 35,
		width : 35,

	});
	secondmyGoalBook.add(secondmyGoalBookicon);

	// Create a Button.
	var secondCreate_goal = Ti.UI.createView({
		height : '100%',
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
			orientationModes : 'PORTRAIT',
			exitOnClose : true,
			navBarHidden : true,
			fullscreen : true
			//windowSoftInputMode : softInput
		});
		Create_Goal.open();
	});

	// Add to the parent view.
	secondsubselfBottom.add(secondCreate_goal);

	var secondCreate_goalicon = Ti.UI.createView({
		backgroundImage : '/images/createGoal.png',
		height : 35,
		width : 35,

	});
	secondCreate_goal.add(secondCreate_goalicon);

	var secondcompleteGoal = Ti.UI.createView({
		height : '100%',
		width : '20%',
		borderRadius : corner,
	});

	// Listen for click events.
	secondcompleteGoal.addEventListener('click', function() {
		indicator();

		var Goalcomplete = Titanium.UI.createWindow({
			backgroundColor : 'white',
			url : 'Goalcomplete.js',
			exitOnClose : true,
			navBarHidden : true,
			fullscreen : true
		});
		Goalcomplete.open();
	});

	// Add to the parent view.
	secondsubselfBottom.add(secondcompleteGoal);

	var secondcompleteGoalicon = Ti.UI.createView({
		backgroundImage : '/images/Goal_complete.png',
		height : 35,
		width : 35,

	});
	secondcompleteGoal.add(secondcompleteGoalicon);

	// Create a Button.
	var secondsetting = Ti.UI.createView({
		height : '100%',
		width : '20%',
		borderRadius : corner,
	});

	// Listen for click events.
	secondsetting.addEventListener('click', function() {

		indicator();

		var Settings = Titanium.UI.createWindow({
			backgroundColor : 'white',
			url : 'Setting.js',
			orientationModes : 'PORTRAIT',
			exitOnClose : true,
			navBarHidden : true,
			fullscreen : true
		});
		Settings.open();
	});

	// Add to the parent view.
	secondsubselfBottom.add(secondsetting);

	var secondsettingicon = Ti.UI.createView({
		backgroundImage : '/images/settings.png',
		height : 35,
		width : 35,

	});
	secondsetting.add(secondsettingicon);

	// Create a Button.
	var secondhome = Ti.UI.createView({
		//backgroundImage : '/images/home.png',
		backgroundColor : this_color,
		height : '96%',
		width : '20%',
		borderRadius : corner,
	});

	// Listen for click events.
	secondhome.addEventListener('click', function() {
	});

	// Add to the parent view.
	secondsubselfBottom.add(secondhome);

	var secondhomeicon = Ti.UI.createView({
		backgroundImage : '/images/home.png',
		height : 35,
		width : 35,

	});
	secondhome.add(secondhomeicon);
}

function Showalert() {
	var alertDialog = Titanium.UI.createAlertDialog({
		title : 'Upload Image',
		message : 'Would you want to parmanently hide this page  ?',
		buttonNames : ['Yes', 'No'],
		cancel : 1
	});

	alertDialog.addEventListener('click', function(theEvent) {
		if (theEvent.index !== theEvent.cancel) {
			//alert('hello');
		}
		switch (theEvent.index) {
			case 0:
				page = 'yes';
				myDatabase = Ti.Database.open('myDatabase');
				var sql = 'CREATE TABLE IF NOT EXISTS pages(page TEXT)';
				myDatabase.execute(sql);
				myDatabase.execute('INSERT INTO pages (page) VALUES(?)', page);
				myDatabase.close();
				var showGoal = Ti.UI.createWindow({
					backgroundColor : 'white',
					url : Ti.Filesystem.resourcesDirectory + 'ui/common/showGoal.js',
					exitOnClose : true,
					navBarHidden : true,
					fullscreen : true
				});
				showGoal.open();
				break;
			//This will never be reached, if you specified cancel for index 1
			case 1:
				page = 'no';
				myDatabase = Ti.Database.open('myDatabase');
				var sql = 'CREATE TABLE IF NOT EXISTS pages(page TEXT)';
				myDatabase.execute(sql);
				myDatabase.execute('INSERT INTO pages (page) VALUES(?)', page);
				myDatabase.close();
				break;
			default:
				break;
		}
	});
	alertDialog.show();
}

function indicator() {
	var indicatorView = Ti.UI.createView({
		backgroundColor : 'black',
		height : '25%',
		width : '40%',
		opacity : 0.7,
		borderRadius : 10
	});
	subself.add(indicatorView);
	var activityIndicator = Ti.UI.createActivityIndicator({
		style : Ti.UI.iPhone.ActivityIndicatorStyle.BIG,

	});
	indicatorView.add(activityIndicator);
	activityIndicator.show();
}