<!-- Begin HEADER OPTIONS CODE

// ONLY USE lowercase FOR ALL OPTIONS

// CHANGE ANY OF THESE VARIABLES TO "no" OR "yes" TO TURN AN OPTION OFF OR ON




var flashcolor		= "FF0000"	// FLASH HEADER BACKGROUND COLOR (also edit css)
var flashheight		= "50"		// HEIGHT OF THE FLASH (IN PIXELS)
var flashwidth		= "500"		// WIDTH OF THE FLASH (IN PIXELS)

var showdate		= "yes"		// SHOW DATE AT THE TOP




// COPYRIGHT 2008 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law



// YOU DO NOT NEED TO EDIT BELOW THIS LINE


document.write('<a href="index.html"><img src="picts/logo.jpg" border="0"></a><br>');





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