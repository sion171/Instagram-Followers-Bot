var page = require('webpage').create();
var url = 'http://www.instagram.com';

page.open(url, function (status) {
	
	function click(el){
		page.evaluate(function(el){
			var ev = document.createEvent("MouseEvents");
				ev.initMouseEvent(
					"click",
					true /* bubble */, true /* cancelable */,
					window, null,
					0, 0, 0, 0, /* coordinates */
					false, false, false, false, /* modifier keys */
					0 /*left*/, null
				);
			el.dispatchEvent(ev);
		}, el);
	}

	function getElementByInnerText(className, search){
		return page.evaluate(function(className, search){
			var classes = document.getElementsByClassName(className);
			console.log(classes);
			var found = classes[1];
			console.log(found);
			return found;
		}, className, search);
	}			

	function waitForPageLoad(){
		while(true){
			if (document.readyState==="complete"){
				break;
			}
			setTimeout(function(){},3000);
		};
	}
	
	console.log(status);
	waitForPageLoad();
    page.render('start.png');
	console.log('start.png saved.');
	var el = getElementByInnerText("_ah57t _84y62 _i46jh _rmr7s","Sign up")
	console.log(el);
	if (el != null){click(el);}
	waitForPageLoad();
	page.render('signup.png');
	console.log('signup.png saved.');
	phantom.exit();
});
