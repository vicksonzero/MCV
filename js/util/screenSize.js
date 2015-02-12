var $ = require("jquery");
var config = require("../config");

module.exports = function resizeGameScreen(){
	var ratio = config.system.screenRatio;
	var win = {width: $(window).width(), height:$(window).height()};
	win.ratio = win.width/win.height;

	// if window is fatter than target
	if (win.ratio >ratio) {
		$("#game")
			.width(win.height*ratio)
			.height(win.height);
	}else {	// if window is taller than target
		$("#game")
			.width(win.width)
			.height(win.width/ratio);

	}
};
