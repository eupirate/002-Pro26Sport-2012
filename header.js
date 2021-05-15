<!-- Begin HEADER OPTIONS CODE

// ONLY USE lowercase FOR ALL OPTIONS

// CHANGE ANY OF THESE VARIABLES TO "no" OR "yes" TO TURN AN OPTION OFF OR ON




var flashcolor		= "009900"	// FLASH HEADER BACKGROUND COLOR (also edit css)
var flashheight		= "60"		// HEIGHT OF THE FLASH (IN PIXELS)
var flashwidth		= "500"		// WIDTH OF THE FLASH (IN PIXELS)

var showdate		= "yes"		// SHOW DATE AT THE TOP




// COPYRIGHT 2008 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law



// YOU DO NOT NEED TO EDIT BELOW THIS LINE


document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" WIDTH="'+flashwidth+'" HEIGHT="'+flashheight+'" id="logo">');
document.write('<PARAM NAME="movie" VALUE="logo.swf">');
document.write('<PARAM NAME="quality" VALUE="high">');
document.write('<PARAM NAME="wmode" VALUE="transparent">');
document.write('<PARAM NAME="bgcolor" VALUE="#'+flashcolor+'">');
document.write('<EMBED src="logo.swf" quality="high"  wmode="transparent" bgcolor="#'+flashcolor+'"  WIDTH="'+flashwidth+'" HEIGHT="'+flashheight+'" NAME="logo" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer"></EMBED></OBJECT><br>');





// START DATE SCRIPT

   if (showdate == "yes") {
document.write('<div id="date-location">');
var d=new Date()
var weekday=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")
var monthname=new Array("January","February","March","April","May","June","July","August","September","October","November","December")
document.write("<span class=\"date-font\"><nobr>" + weekday[d.getDay()] + " ")
document.write(d.getDate() + ". ")
document.write(monthname[d.getMonth()] + " ")
document.write(d.getFullYear())
document.write("</nobr><br></span>")
document.write('</div>');
}

//  End -->