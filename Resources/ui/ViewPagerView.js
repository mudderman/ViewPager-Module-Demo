function FirstView (options) {
	
	var win = Ti.UI.createWindow({
		title: "ViewPager Demo",
		backgroundColor: "#000000",
		modal: true
	});
	
	var pagerModule = require("net.bajawa.pager");

	var viewPager = pagerModule.createViewPager(options);
	
	win.add(viewPager);
	
	return win;
}

module.exports = FirstView;
