<!-- Begin

// NOTE: If you use a ' add a slash before it like this \'


var flashcolor		= "26558B"		// FLASH BACKGROUND COLOR
var color		= "26558B"		// HEADER BACKGROUND COLOR
var headerheight	= "35"			// HEADER HEIGHT (IN PIXELS)
var flashheight		= "35"			// HEIGHT OF THE FLASH (IN PIXELS)
var flashwidth		= "600"			// WIDTH OF THE FLASH (IN PIXELS)



// COPYRIGHT 2004 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO NOT NEED TO EDIT BELOW THIS LINE

// START FLASH HEADER

document.write('<TABLE cellpadding="0" cellspacing="0" border="0" width="100%" height="'+headerheight+'" bgcolor="#'+color+'"><tr><td ALIGN="left" VALIGN="center">');
document.write('<OBJECT classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,0,0" WIDTH="'+flashwidth+'" HEIGHT="'+flashheight+'" id="logo-tour" ALIGN="">');
document.write('<PARAM NAME=movie VALUE="logo-tour.swf"><PARAM NAME=quality VALUE=high>');
document.write('<PARAM NAME=scale VALUE=exactfit><PARAM NAME=bgcolor VALUE=#'+flashcolor+'>');
document.write('<EMBED src="logo-tour.swf" quality=high scale=exactfit bgcolor=#'+flashcolor+'  WIDTH="'+flashwidth+'" HEIGHT="'+flashheight+'" NAME="logo-tour" ALIGN="" TYPE="application/x-shockwave-flash" PLUGINSPAGE="http://www.macromedia.com/go/getflashplayer">');
document.write('</EMBED>');
document.write('</OBJECT><br>');
document.write('</td></tr></table>');


//  End -->