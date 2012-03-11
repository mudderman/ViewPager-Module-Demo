function FirstView() {
	
	var self = Ti.UI.createView();

	var pagerModule = require("net.bajawa.pager");
	var ViewPagerView = require("ui/ViewPagerView");
	
	/*
	 * Vanilla viewpager
	 */
	var button = Ti.UI.createButton({
		title: '"Vanilla" ViewPager',
		top: 10
	});
	button.addEventListener("click", function (e) {
		new ViewPagerView(false, { tabStyle: pagerModule.STYLE_TABS_NONE }).open();
	});
	self.add(button);
	
	/*
	 * Vanilla viewpager with indicator
	 */
	button = Ti.UI.createButton({
		title: '"Vanilla" ViewPager w/ indicator',
		top: 80
	});
	button.addEventListener("click", function (e) {
		new ViewPagerView(true, { tabStyle: pagerModule.STYLE_TABS_NONE }).open();
	});
	self.add(button);
	
	/*
	 * viewpager with fixed tabs
	 */
	button = Ti.UI.createButton({
		title: 'ViewPager w/ fixed tabs',
		top: 150
	});
	button.addEventListener("click", function (e) {
		new ViewPagerView(false, { tabStyle: pagerModule.STYLE_TABS_NORMAL }).open();
	});
	self.add(button);
	
	/*
	 * viewpager with fixed tabs and indicator
	 */
	button = Ti.UI.createButton({
		title: 'ViewPager w/ fixed tabs and indicator',
		top: 220
	});
	button.addEventListener("click", function (e) {
		new ViewPagerView(true, { tabStyle: pagerModule.STYLE_TABS_NORMAL }).open();
	});
	self.add(button);
	
	/*
	 * viewpager with fixed tabs and custom colors
	 */
	button = Ti.UI.createButton({
		title: 'ViewPager w/ fixed tabs and custom colors',
		top: 290
	});
	button.addEventListener("click", function (e) {
		new ViewPagerView(false, { 
			tabStyle: pagerModule.STYLE_TABS_NORMAL,
			backgroundColor: "#0000ff",
			dividerColor: "#00ff00",
			lineColor: "#ffffff",
			lineColorSelected: "#ff0000",
			font: {
				size: 14,
				color: "#ff0000"
			}
		}).open();
	});
	self.add(button);
	
	return self;
}

module.exports = FirstView;
