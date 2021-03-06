var Create_Goal = Ti.UI.currentWindow;

var show = Ti.App.Properties.getBool('show');

var myDatabase = Ti.Database.install('/myDatabase.sqlite', 'myDatabase.sqlite');
var create_goalResultSet = myDatabase.execute('SELECT * FROM create_goal');
var this_title = [];
while (create_goalResultSet.isValidRow()) {
	this_title.push(create_goalResultSet.fieldByName('title'));
	create_goalResultSet.next();
}
var count = this_title.length;
create_goalResultSet.close();

Create_Goal.orientationModes = [Ti.UI.PORTRAIT];

var tmp = (Titanium.Platform.displayCaps.platformHeight * 3.8) / 100;
var tmp2 = (Titanium.Platform.displayCaps.platformHeight * 2.3) / 100;
var tmp3 = (Titanium.Platform.displayCaps.platformHeight * 1) / 100;
var corner = Math.round(Ti.Platform.displayCaps.platformWidth * 0.025);
var width = Math.round(Ti.Platform.displayCaps.platformWidth * 0.005);
var corner1 = Math.round(Ti.Platform.displayCaps.platformWidth * 0.01);
var title = '';
var description = '';
var affirmation = '';
var imagepath = '';
var date = '';
var achieved = '';
var check = false;
var viewdata = '';

check = Ti.App.Properties.getBool('check');
var viewdat = Ti.App.Properties.getString('data');
viewdata = parseInt(viewdat) + 1

var myDatabase = Ti.Database.install('/myDatabase.sqlite', 'myDatabase.sqlite');

var settingResultSet = myDatabase.execute('SELECT * FROM Background_images WHERE selected_view=?', '1');
var this_path = '';
var this_name = '';
var this_selected_view = '';

while (settingResultSet.isValidRow()) {
	this_path = settingResultSet.fieldByName('path');
	this_name = settingResultSet.fieldByName('name');
	this_selected_view = settingResultSet.fieldByName('selected_view');
	settingResultSet.next();
}
var count = this_path.length;
settingResultSet.close();

var create_goalResultSet = myDatabase.execute('SELECT * FROM create_goal where rowid=?', viewdata);
var this_title = '';
var this_description = '';
var this_affirmation = '';
var this_image = '';
var this_date = '';
var this_achieved = '';
while (create_goalResultSet.isValidRow()) {
	this_title = create_goalResultSet.fieldByName('title');
	this_description = create_goalResultSet.fieldByName('description');
	this_affirmation = create_goalResultSet.fieldByName('affirmation');
	this_image = create_goalResultSet.fieldByName('image');
	this_date = create_goalResultSet.fieldByName('date');
	this_achieved = create_goalResultSet.fieldByName('achieved');
	create_goalResultSet.next();
}
var count = this_title.length;
create_goalResultSet.close();

//****************************************************************************Fonts***************************************************

var fontsResultSet = myDatabase.execute('SELECT * FROM fonts WHERE selected=?', '1');
var this_font = '';
while (fontsResultSet.isValidRow()) {
	this_font = fontsResultSet.fieldByName('name');
	fontsResultSet.next();
}
fontsResultSet.close();

//*****************************************************************Reminder*************************************************

var reminderResultSet = myDatabase.execute('SELECT * FROM Reminder WHERE rowid=?', '1');
var this_reminder = '';
while (reminderResultSet.isValidRow()) {
	this_reminder = reminderResultSet.fieldByName('reminder');
	reminderResultSet.next();
}
reminderResultSet.close();

var image = '';
var filePath = '';
var myDatabase;
var scrollView = Titanium.UI.createView({
	backgroundColor : 'black',
	width : '100%',
	height : '100%',
});

var subself = Titanium.UI.createView({
	backgroundColor : 'white',
	width : '96%',
	height : '96%',
	backgroundImage : this_path,
});
scrollView.add(subself);

var moveableview = Titanium.UI.createScrollView({
	width : '100%',
	height : '89%',
	Top : '0%',
	layout : 'vertical'
});
subself.add(moveableview);

var new_goal = Ti.UI.createLabel({
	text : 'Set new Goal :',
	color : 'black',
	font : {
		fontSize : tmp,
		fontFamily : this_font
	},
	left : '3%'
});
moveableview.add(new_goal);

var aLabel_name = Ti.UI.createLabel({
	text : 'Goal Title :',
	color : 'black',
	font : {
		fontSize : tmp2,
		fontFamily : this_font
	},
	left : '3%',
	top : '2%'
});
moveableview.add(aLabel_name);

var edit_name = Titanium.UI.createTextField({
	backgroundColor : 'white',
	font : {
		fontSize : tmp2,
		fontFamily : this_font
	},
	width : '90%',
	height : '9%',
	borderColor : '#000',
	borderWidth : width,
	borderRadius : corner,
	keyboardType : Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
moveableview.add(edit_name);

var aLabel_description = Ti.UI.createLabel({
	text : 'Goal Description :',
	color : 'black',
	font : {
		fontSize : tmp2,
		fontFamily : this_font
	},
	left : '3%',
	top : '2%'
});
moveableview.add(aLabel_description);

var edit_description = Titanium.UI.createTextArea({
	backgroundColor : 'white',
	width : '90%',
	font : {
		fontSize : tmp2,
		fontFamily : this_font
	},
	borderColor : '#000',
	borderWidth : width,
	borderRadius : corner,
	height : '22%',
	keyboardType : Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
moveableview.add(edit_description);

var aLabel_affirmation = Ti.UI.createLabel({
	text : 'Next Step :',
	color : 'black',
	font : {
		fontSize : tmp2,
		fontFamily : this_font
	},
	left : '3%',
	top : '2%'
});
moveableview.add(aLabel_affirmation);

var edit_affirmation = Titanium.UI.createTextArea({
	backgroundColor : 'white',
	width : '90%',
	font : {
		fontSize : tmp2,
		fontFamily : this_font
	},
	borderColor : '#000',
	borderWidth : width,
	borderRadius : corner,
	height : '16%',
	keyboardType : Ti.UI.KEYBOARD_APPEARANCE_DEFAULT,
	returnKeyType : Ti.UI.RETURNKEY_DEFAULT,
	borderStyle : Ti.UI.INPUT_BORDERSTYLE_ROUNDED
});
moveableview.add(edit_affirmation);

var labelView = Ti.UI.createView({
	height : '6%',
	width : '100%',
	top : '2%'
});
moveableview.add(labelView);
var aLabel_photograph = Ti.UI.createLabel({
	text : 'Upload Photo :',
	color : 'black',
	font : {
		fontSize : tmp2,
		fontFamily : this_font
	},
	left : '3%',

});
labelView.add(aLabel_photograph);

var aLabel_Date = Ti.UI.createLabel({
	text : 'Date to be achieved :',
	color : 'black',
	font : {
		fontSize : tmp2,
		fontFamily : this_font
	},
	height : 'auto',
	width : 'auto',
	left : '50%'

});
labelView.add(aLabel_Date);

var editView = Ti.UI.createView({
	height : '11%',
	width : '100%'
});
moveableview.add(editView);

var edit_uploadImage = Titanium.UI.createButton({
	backgroundColor : 'white',
	width : '40%',
	font : {
		fontSize : tmp2,
		fontFamily : this_font
	},
	height : '100%',
	title : 'Choose Image',
	borderWidth : width,
	borderRadius : corner,
	borderColor : 'black',
	left : '5%'
});
edit_uploadImage.addEventListener('click', function() {
	var alertDialog = Titanium.UI.createAlertDialog({
		title : 'Upload Image',
		message : 'Choose Image From ?',
		buttonNames : ['Gallery', 'Camera', 'Cancel'],
		cancel : 1
	});

	alertDialog.addEventListener('click', function(theEvent) {
		switch (theEvent.index) {
			case 0:
				//obtain an image from the gallery
				Titanium.Media.openPhotoGallery({
					success : function(event) {
						image = event.media;
						var parse = JSON.stringify(image);
						var jsonObj = JSON.parse(parse);
						filePath = jsonObj.nativePath;
						edit_uploadImage.title = 'Image Selected';

					},
					cancel : function() {

					}
				});

				break;
			//This will never be reached, if you specified cancel for index 1
			case 1:
				Titanium.Media.showCamera({
					success : function(event) {
						image = event.media;
						var parse = JSON.stringify(image);
						var jsonObj = JSON.parse(parse);
						filePath = jsonObj.nativePath;
						edit_uploadImage.title = 'Image Selected';
					},
					cancel : function() {
						//getting image from camera was cancelled
					},
					error : function(error) {
						//create alert
						var a = Titanium.UI.createAlertDialog({
							title : 'Camera'
						});
						// set message
						if (error.code == Titanium.Media.NO_CAMERA) {
							a.setMessage('Device does not have image recording capabilities');
						} else {
							a.setMessage('Unexpected error: ' + error.code);
						}
						// show alert
						a.show();
					},
					allowImageEditing : true,
					saveToPhotoGallery : false
				});
				break;
			default:
				break;
		}
	});
	alertDialog.show();
});

editView.add(edit_uploadImage);

var edit_date = Titanium.UI.createButton({
	backgroundColor : 'white',
	width : '40%',
	font : {
		fontSize : tmp2,
		fontFamily : this_font
	},
	height : '100%',
	title : 'Include Calender',
	borderWidth : width,
	borderRadius : corner,
	borderColor : 'black',
	left : '55%'
});
edit_date.addEventListener('click', function() {

	var alldateview = Ti.UI.createView({
		bottom : '0%',
		height : '52%',
		width : 'auto',
		layout : 'vertical'
	});
	Create_Goal.add(alldateview);

	var buttondateview = Ti.UI.createView({
		height : '20%',
		width : 'auto',
	});
	alldateview.add(buttondateview);

	// Create a Button.
	var set = Ti.UI.createButton({
		title : 'set',
		height : '80%',
		font:{
			fontSize:tmp2
		},
		width : '20%',
		top : '10%',
		right : '5%'
	});
	// Listen for click events.
	set.addEventListener('click', function() {
		var pickerdate = picker.value;
		var day = pickerdate.getDate();
		var months = pickerdate.getMonth();
		var month = months + parseInt('1');
		var year = pickerdate.getFullYear();
		newdate = day + "/" + month + "/" + year;
		date = newdate;
		edit_date.title = date;
		Create_Goal.remove(alldateview)
	});

	// Add to the parent view.
	buttondateview.add(set);

	var CancelPicker = Ti.UI.createButton({
		title : 'Cancel',
		height : '80%',
		width : '25%',
		font:{
			fontSize:tmp2
		},
		top : '10%',
		left : '5%'
	});
	// Listen for click events.
	CancelPicker.addEventListener('click', function() {
		Create_Goal.remove(alldateview)
	});

	// Add to the parent view.
	buttondateview.add(CancelPicker);

	var minDate = new Date();
	minDate.setFullYear(2000);
	minDate.setMonth(0);
	minDate.setDate(1);

	var maxDate = new Date();
	maxDate.setFullYear(2050);
	maxDate.setMonth(11);
	maxDate.setDate(31);

	var value = new Date();
	value.getFullYear();
	value.getMonth();
	value.getDay();

	var picker = Ti.UI.createPicker({
		width : '100%',
		type : Ti.UI.PICKER_TYPE_DATE,
		minDate : minDate,
		maxDate : maxDate,
		value : value
	});
	var newdate = '';
	picker.addEventListener('change', function(e) {
		var pickerdate = e.value;
		var day = pickerdate.getDate();
		var months = pickerdate.getMonth();
		var month = months + parseInt('1');
		var year = pickerdate.getFullYear();
		newdate = day + "/" + month + "/" + year;
	});

	alldateview.add(picker);

});

editView.add(edit_date);

var secondsubselfBottom = Titanium.UI.createView({
	width : '100%',
	height : '11%',
	bottom : '0%',
	backgroundImage : '/images/topbar.png'
});
subself.add(secondsubselfBottom);
// Create a Button.
var Cancel = Ti.UI.createButton({
	backgroundImage : '/images/cancel.png',
	height : 65,
	width : 65,
	left : '2%',
});

// Listen for click events.
Cancel.addEventListener('click', function() {
	if (show) {
		Create_Goal.close();
	} else {
		indicator();
		var showGoal = Ti.UI.createWindow({
			backgroundColor : 'white',
			url : 'showGoal.js',
			navBarHidden : true,
			fullscreen : true,
			exitOnClose : true
		});
		showGoal.open();
	}
});

// Add to the parent view.
secondsubselfBottom.add(Cancel);

if (check) {
	edit_name.value = this_title;
	edit_description.value = this_description;
	edit_affirmation.value = this_affirmation;
	filePath = this_image;
	date = this_date;
	if (this_image != '') {
		edit_uploadImage.title = 'Image Selected';
	}
	if (this_date != '') {
		edit_date.title = this_date;
	}

} else {
	edit_name.setvalue = '';
	edit_description.setvalue = '';
	edit_affirmation.setvalue = '';
	imagepath = '';
	date = '';
}

// Create a Button.
var Save = Ti.UI.createButton({
	backgroundImage : '/images/save.png',
	height : 65,
	width : 65,
	right : '2%'
});

// Listen for click events.
Save.addEventListener('click', function() {

	title = edit_name.value;
	description = edit_description.value;
	affirmation = edit_affirmation.value;
	imagepath = filePath;
	facebook_image = image;
	//achieved = Achieved;
	// /*
	// // // create database============
	// */

	if (title == '' || date == '') {
		alert('Please Enter Goal Title and Date');
	} else {
		indicator();

		if (check) {
			myDatabase.execute('UPDATE create_goal SET title=?,description=?,affirmation=?,image=?,date=?,facebook_image=? WHERE rowid=?', title, description, affirmation, imagepath, date, facebook_image, viewdata);
			var showGoal = Ti.UI.createWindow({
				backgroundColor : 'white',
				url : 'showGoal.js',
				navBarHidden : true,
				fullscreen : true,
				exitOnClose : true
			});
			showGoal.open();

		} else {
			Ti.App.Properties.setString('titl', title);
			Ti.App.Properties.setString('descriptio', description);
			Ti.App.Properties.setString('affirmatio', affirmation);
			Ti.App.Properties.setString('imagepat', imagepath);
			Ti.App.Properties.setString('dat', date);
			Ti.App.Properties.setString('facebook_imag', facebook_image);

			var firstShare = Ti.UI.createWindow({
				backgroundColor : 'black',
				url : 'firstShare.js',
				navBarHidden : true,
				fullscreen : true,
				exitOnClose : true
			});
			firstShare.open();

		}
		myDatabase.close();
		var come = Ti.App.Properties.setBool('come', false);
		//alert('Name' + ': ' + title + ',' + 'Description' + ': ' + description + ',' + 'Affirmation' + ': ' + affirmation + 'imagepath' + ': ' + imagepath + ',' + 'date' + ': ' + date + ',' + 'achieved' + ': ' + achieved);

	}
});

// Add to the parent view.
secondsubselfBottom.add(Save);

Create_Goal.add(scrollView);

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
		style : Ti.UI.ActivityIndicatorStyle.BIG,

	});
	indicatorView.add(activityIndicator);
	activityIndicator.show();
}
