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

The main options for styling the tabs. Can have the following attributes:

<table>
	<tr>
		<td><b>Attribute</b></td>
		<td><b>Type</b></td>
		<td><b>Description</b></td>
	</tr>
	
	<tr>
		<td>style</td>
		<td>Integer constant</td>
		<td>Can be any of the following constants: <b>NONE</b>, <b>NORMAL</b>, <b>SCROLLING</b></td>
	</tr>
	
	<tr>
		<td>backgroundColor</td>
		<td>Hexadecimal string</td>
		<td>The background color of an unselected tab</td>
	</tr>
	
	<tr>
		<td>backgroundColorSelected</td>
		<td>Hexadecimal string</td>
		<td>The background color of the selected tab (Not if style is MARKET)</td>
	</tr>
	
	<tr>
		<td>lineColor</td>
		<td>Hexadecimal string</td>
		<td>The color of the line underneath the tab view</td>
	</tr>
	
	<tr>
		<td>lineColorSelected</td>
		<td>Hexadecimal string</td>
		<td>The color of the line between the selected tab and the bottom line</td>
	</tr>
	
	<tr>
		<td>lineHeight</td>
		<td>Integer</td>
		<td>Height of the bottom line</td>
	</tr>
	
	<tr>
		<td>lineHeightSelected</td>
		<td>Integer</td>
		<td>Height of the line of the selected tab</td>
	</tr>
	
	<tr>
		<td colspan="3">font (Object)</td>
	</tr>
	
	<tr>
		<td>size</td>
		<td>Integer</td>
		<td>The size of the font on the tab</td>
	</tr>
	
	<tr>
		<td>color</td>
		<td>Hexadecimal string</td>
		<td>The font color of an unselected tab</td>
	</tr>
	
	<tr>
		<td>colorSelected</td>
		<td>Hexadecimal string</td>
		<td>The font color of the selected tab.</td>
	</tr>
	
	<tr>
		<td>bold</td>
		<td>Boolean</td>
		<td>If the text should bold or not.</td>
	</tr>
	
	<tr>
		<td colspan="3">padding (Object)</td>
	</tr>
	
	<tr>
		<td>left</td>
		<td>Integer</td>
		<td>the left padding of a tab</td>
	</tr>
	
	<tr>
		<td>top</td>
		<td>Integer</td>
		<td>the top padding of a tab</td>
	</tr>
	
	<tr>
		<td>right</td>
		<td>Integer</td>
		<td>the right padding of a tab</td>
	</tr>
	
	<tr>
		<td>bottom</td>
		<td>Integer</td>
		<td>the bottom padding of a tab</td>
	</tr>
	
	<tr>
		<td>title</td>
		<td>Integer</td>
		<td>Padding between tabs. <b>NOTE: Only if style is MARKET</b></td>
	</tr>
	
	<tr>
		<td>clip</td>
		<td>Integer</td>
		<td>The padding of the left and right visible tabs. A negative value will push them ouside the view area and hide some (or all) of the text. <b>NOTE: Only if style is MARKET</b></td>
	</tr>
</table>

### indicator - Object

If you want your viewpager to have an indicator at the bottom of the view add this to the options.

For now you can use one attribute to the object, but more are planned.

<table>
	<tr>
		<td><b>Attribute</b></td>
		<td><b>Type</b></td>
		<td><b>Description</b></td>
	</tr>
	
	<tr>
		<td>style</td>
		<td>Integer constant</td>
		<td>Can be <b>NONE</b> or <b>LINE</b></td>
	</tr>
	
	<tr>
		<td>color</td>
		<td>Hexadecimal string</td>
		<td>The color of the line</td>
	</tr>
	
	<tr>
		<td>height</td>
		<td>Integer</td>
		<td>The height of the line</td>
	</tr>
	
	<tr>
		<td>fadeOutTime</td>
		<td>Integer (default: 200 miliseconds)</td>
		<td>In milliseconds. How long before the line starts to fade out</td>
	</tr>
	
	<tr>
		<td>fadingTime</td>
		<td>Integer (default 500 milliseconds)</td>
		<td>In milliseconds. How long the line should be fading.</td>
	</tr>
</table>

## Usage

See the demo project at [github](https://github.com/mudderman/ViewPager-Module-Demo)
