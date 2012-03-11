function FirstView (indicator, style) {
	
	var win = Ti.UI.createWindow({
		title: "ViewPager Demo",
		backgroundColor: "#000000",
		modal: true
	});
	
	var pagerModule = require("net.bajawa.pager");
	
	var tableData = (function () {
		var a = [];
		for (var i=0; i < 100; i++) a.push({ title: "I am item " + i });
		return a;
	}());
	
	var view = pagerModule.createViewPager({
		data: [
			{
				title: "First tab",
				view: Ti.UI.createTableView({ data: tableData })
			},
			{
				title: "Second tab",
				view: Ti.UI.createTableView({ data: tableData })
			},
			{
				title: "Third tab",
				view: Ti.UI.createTableView({ data: tableData })
			},
			{
				title: "Fourth tab",
				view: Ti.UI.createTableView({ data: tableData })
			}
		],
		indicator: indicator,
		style: style
	});
	
	win.add(view);
	
	return win;
}

module.exports = FirstView;
