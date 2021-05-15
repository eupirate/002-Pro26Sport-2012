<!-- Begin POP-UP SIZES AND OPTIONS CODE

// ONLY USE lowercase FOR ALL OPTIONS

// CHANGE ANY OF THESE VARIABLES FOR THE TOUR POPUPS



var Tour_width 		= 750		// Tour POPUP WIDTH
var Tour_height 	= 425		// Tour POPUP HEIGHT
var Tour_viewer	 	= "no"		// yes/FULL SCREEN OR no/POPUP MODE
var Tour_scrollbarS 	= "0"		// TURN ON Tour SCROLLBARS "1" FOR ON "0" FOR OFF




// YOU DO NOT NEED TO EDIT BELOW THIS LINE

// COPYRIGHT 2005 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law

// START TOUR POPUP CODE




// START Tour POPUP

function popUpTour(URL) {

day = new Date();
id = day.getTime();
   if (Tour_viewer == "no") {
eval("page" + id + " = window.open(URL, '" + id + "', 'toolbar=0,scrollbars=' + Tour_scrollbarS + ',location=0,statusbar=0,menubar=0,resizable=1,width='+Tour_width+',height='+Tour_height+'');");
}
else 
if (Tour_viewer == "yes") {
eval("page" + id + " = window.open(URL);");
}
}






//  End -->