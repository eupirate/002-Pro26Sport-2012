<!-- // Begin

// NOTE: If you use a ' add a slash before it like this \'




var showsearch		= "yes"			// DISPLAY SEARCH
var searchdomain	= "xsbling.com"	// DOMAIN TO SEARCH
var searchname		= "XS Bling"		// SEARCH NAME DISPLAYED






// SIMPLE GOOGLE SITE SEARCH
// COPYRIGHT 2008 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law



   if (showsearch == "yes") {
document.write('<form method="get" action="http://www.google.com/search" class="formmargin" target="_top">');
document.write('<input type="hidden" name="ie" value="UTF-8">');
document.write('<input type="hidden" name="oe" value="UTF-8">');
document.write('<input type="hidden" name="domains" value="'+searchdomain+'">');

document.write('<table cellpadding="0" cellspacing="0" border="0" class="searchtext"><tr><td align="middle" valign="top">');
document.write('<table cellpadding="0" cellspacing="5" border="0"><tr><td valign="top">');

document.write('<input type="text" name="q" size="15" maxlength="255" class="searchsiteform">');

document.write('</td><td valign="top">');

document.write('<input type="image" src="picts/search-off.gif" border="0" onmouseover="this.src=\'picts/search-on.gif\'" onmouseout="this.src=\'picts/search-off.gif\'" alt="Search" style="margin-right:7px"><br>')

document.write('</td></tr></table>');

document.write('<input type="radio" name="sitesearch" value="">Google <input type="radio" name="sitesearch" value="'+searchdomain+'" checked>'+searchname+'<br>');

document.write('</td></tr></table>');

document.write('</form>');
}




//  End -->