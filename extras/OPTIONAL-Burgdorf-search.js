<!-- // Begin

// NOTE: If you use a ' add a slash before it like this \'




var showsearch		= "yes"			// DISPLAY SEARCH
var searchdomain	= "xsbling.com"	// DOMAIN TO SEARCH
var searchname		= "Search Website"		// SEARCH NAME DISPLAYED






// SITE SEARCH
// COPYRIGHT 2008 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law



   if (showsearch == "yes") {
document.write('<form method="post" action="http://'+searchdomain+'/cgi-bin/websearch.pl" class="formmargin" target="_top">');

document.write('<input type="hidden" name="DateRange" VALUE="All">');
document.write('<input type="hidden" name="hits" value="25">');
document.write('<input type="hidden" name="any terms" value="any terms">');

document.write('<table cellpadding="0" cellspacing="0" border="0" class="searchtext"><tr><td align="left" valign="top">');
document.write('<table cellpadding="0" cellspacing="0" border="0"><tr><td valign="top">');

document.write('<input type="text" name="terms" size="15" maxlength="255" class="searchsiteform">');

document.write('</td><td valign="top">');

document.write('<input type="image" src="picts/search-off.gif" border="0" onmouseover="this.src=\'picts/search-on.gif\'" onmouseout="this.src=\'picts/search-off.gif\'" alt="Search"  style="margin-right:7px"><br>')

document.write('</td></tr></table>');

document.write(''+searchname+'<br>');

document.write('</td></tr></table>');

document.write('</form>');
}




//  End -->