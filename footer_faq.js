<!-- Begin

// NOTE: If you use a ' add a slash before it like this \'



var buttonwidth		= "100"	// WIDTH OF THE FAQ BUTTONS




document.write('<TABLE cellpadding="2" cellspacing="0" border="0"><tr><td align="center">');

document.write('<form style="margin: 0px">');
document.write('<input type="button" value="Print" onClick=\'window.print()\' class="button-popups" onmouseover="this.className=\'buttonon-popups\'" onmouseout="this.className=\'button-popups\'" style="width: '+buttonwidth+'"><br>');
document.write('</form>');

document.write('<td align="center">');

document.write('<form style="margin: 0px">');
document.write('<input type="button" value="Close" onClick=\'window.close()\' class="button-popups" onmouseover="this.className=\'buttonon-popups\'" onmouseout="this.className=\'button-popups\'" style="width: '+buttonwidth+'"><br>');
document.write('</form>');

document.write('</td></tr></table><br>');

//  End -->