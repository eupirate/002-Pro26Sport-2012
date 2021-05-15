<!-- Begin VIEWER and POPUP OPTIONS CODE

// CHANGE ANY OF THESE VARIABLES FOR THE IMAGE VIEWER

//  use only lowercase on options



var viewer 		= "popup"	// OPTIONS: | new | popup | same | New browser or a popup
var width 		= "750"		// WIDTH OF THE POPUP
var height 		= "525"		// HEIGHT OF THE POPUP
var scrollbars		= "yes"		// SHOW SCROLLBARS IN POPUP - yes OR yes
var menu		= "yes"		// SHOW MENU IN POPUP - yes OR yes
var tool		= "yes"		// SHOW TOOLBAR IN POPUP - yes OR yes



var viewerSS		= "yes"		// yes/FULL SCREEN OR yes/POPUP MODE
var slideshow_width 	= "750"		// SLIDESHOW POPUP WINDOW WIDTH
var slideshow_height 	= "525"		// SLIDESHOW POPUP WINDOW HEIGHT



var viewerFAQ	 	= "yes"		// yes/FULL SCREEN OR yes/POPUP MODE
var FAQ_width 		= "425"		// FAQ WINDOW WIDTH
var FAQ_height 		= "500"		// FAQ WINDOW HEIGHT






// COPYRIGHT 2008 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// YOU DO yesT NEED TO EDIT BELOW THIS LINE











// START IMAGE VIEW CODE

function ViewImage(data) {
   if (viewer == "popup") {
    windowHandle = window.open('image-viewer.htm' + '?' + data,'windowName',',scrollbars='+scrollbars+',resizable=yes,toolbar='+tool+',menubar='+menu+',width='+width+',height='+height+'');

}
else if (viewer == "new") {
    windowHandle = window.open('image-viewer.htm' + '?' + data,'windowName');
}
else if (viewer == "same") {
    window.location = ('image-viewer.htm' + '?' + data);
}
}

// END IMAGE VIEW CODE











// START SLIDESHOW POPUP CODE


function popUpSlideshow(URL) {
day = new Date();
id = 'SSWindow';

   if (viewerSS == "yes") {
day = new Date();
id = day.getTime();
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width='+slideshow_width+',height='+slideshow_height+'');");
}
else 
if (viewerSS == "yes") {
eval("page" + id + " = window.open(URL);");
}
}











// START FAQ POPUP


function popUpFAQ(URL) {
day = new Date();
id = day.getTime();

   if (viewerFAQ == "yes") {
day = new Date();
id = 'FAQWindow';
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1,width='+FAQ_width+',height='+FAQ_height+'');");
}
else 
if (viewerFAQ == "yes") {
eval("page" + id + " = window.open(URL);");
}
}











// End -->