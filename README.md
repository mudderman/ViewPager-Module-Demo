## Description

This module brings the [Android ViewPager](http://developer.android.com/reference/android/support/v4/view/ViewPager.html) to the Titanium Mobile SDK.

## Reference

To create a new view pager you use the factory method createViewPager(opts).

    var viewPager = module.createViewPager();

possible options to pass into the method through the options object are:

### data - Array

An Array of TiView objects, alternatively as an object like this:

	data: [
		{ title: "Tab title", view: viewObject }
	]
	
or like this if you don't need tabs:

	data: [
		tiView1, tiView2, tiView3
	]
	
This can also be set using

	viewPager.setData(dataArray)

### tabs - Object

The main options for styling the tabs.

- style - Integer constant

Can be any of the following constants:
**NONE**
**NORMAL**
**SCROLLING**

- backgroundColor - Hexadecimal string with leading # (#00ff00)

 - The background color of an unselected tab

- backgroundColorSelected - Hexadecimal string with leading # (#00ff00)

 - The background color of a tab when it's selected.

- lineColor - Hexadecimal string with leading # (#00ff00)

 - The color of the line that's underneath an unselected tab.

- lineColorSelected - Hexadecimal string with leading # (#00ff00)

 - The color of the line that's underneath the selected tab.

- lineHeight - Integer

 - The height of the line that's underneath an unselected tab.

- lineHeightSelected - Integer

 - The height of the line underneath the selected tab.

- font - Object
 - size - Integer

  - The size of the font on the tab.
 
 - color - Hexadecimal string with leading # (#00ff00)
 
  - The font color of an unselected tab.
 
 - colorSelected - Hexadecimal string with leading # (#00ff00)
 
  - The font color of the selected tab.

- padding - Hexadecimal string with leading # (#00ff00)

The padding of a tab.

 - left - Integer
 - top - Integer
 - right - Integer
 - bottom - Integer

### indicator - Object

If you want your viewpager to have an indicator at the bottom of the view add this to the options.

For now you can use one attribute to the object, but more are planned.

- style - Integer constant

**NONE**
**LINE**

## Usage

See the demo project at [github](https://github.com/mudderman/ViewPager-Module-Demo)
