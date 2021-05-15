<!-- Begin HEADER OPTIONS CODE

// ONLY USE lowercase FOR ALL OPTIONS

// CHANGE ANY OF THESE VARIABLES TO "no" OR "yes" TO TURN AN OPTION OFF OR ON



var showsearch		= "yes"		// SHOW THE SEARCH FORM
var searchtext		= "Search:"	// TEXT FOR SEARCH FORM




// COPYRIGHT 2008 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law



// START SEARCH FORM

   if (showsearch == "yes") {
document.write('<TABLE cellpadding="0" cellspacing="2" border="0"><tr><td colspan="2" class="searchtext" nowrap>')
document.write(''+searchtext+'<br>')
document.write('</td><td align="left">')
document.write('<form action="http://www.google.com/search" name="f" target="_blank" style="margin: 0px">')
document.write('<input type="hidden" name="any selected">')
document.write('<input size="15" name="q" value="" class="searchform">')
document.write('</td><td align="left">')
document.write('<INPUT TYPE="image" SRC="picts/search-off.gif" border="0" onmouseover="this.src=\'picts/search-on.gif\'" onmouseout="this.src=\'picts/search-off.gif\'" alt="Search" style="margin-right:7px"><br>')
document.write('</form>')
document.write('</td></tr></table>')
}

// END SEARCH FORM


//  End -->