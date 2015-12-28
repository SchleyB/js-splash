(jQuery(function(){

	console.log(reduxDemo);

	console.log('This is a test');

	var $j = jQuery.noConflict();

	//Check for cookie

	if($j.cookie('jssp')){
		$j('#splash-screen').hide();
	} else {

		var headerText = reduxDemo['header-text'];

		var subText = reduxDemo['sub-text'];

		var yesButton = reduxDemo['yes-text'];

		var noButton = reduxDemo['no-text'];

		var fullBackground = "";

		if (headerText === "") {
			headerText = "You must be 21 years or older to view this content.";
		} else {
			headerText = reduxDemo['header-text'];
		}

		if (subText === "") {
			subText = "Please verify your age:";
		} else {
			subText = reduxDemo['sub-text'];
		}

		if (yesButton === "") {
			yesButton = "Yes, I am over 21";
		} else {
			yesButton = reduxDemo['yes-text'];
		}

		if (noButton === "") {
			noButton = "I am under 21";
		} else {
			noButton = reduxDemo['no-text'];
		}

		if (reduxDemo['opt-media']['url'] === "" || reduxDemo['opt-media'] === "") {
			fullBackground = "rgba(0,0,0,0.8)";
		} else {
			fullBackground = "url(" + reduxDemo['opt-media']['url'] + ")";
		}


		//Splash page

		var splash_main = 	
		"<div id='splash-screen' style='background: "+ fullBackground + "; background-size: cover'>" +
			"<div id='splash-box'>" + 
				"<h1 id='splash-header'>" + headerText + "</h1>" +
				"<p id='splash-p'>" + subText + "</p>" +
				"<button id='yes-button' class='splash-button'>" + yesButton + "</button>" +
				"<button id='no-button' class='splash-button'>" + noButton + "</button>" +
			"</div>" +
		"</div>";

		$j('body').append(splash_main);

		//Set cookie if confirmed

		$j('#yes-button').click(function(){
			$j.cookie('jssp', Math.random().toString(36).slice(2), { expires: 7 });
			$j('#splash-screen').hide();
		});

		//Redirect to Google otherwise

		$j('#no-button').click(function(){
			window.location = 'http://google.com';
		});

	}

	

}));
