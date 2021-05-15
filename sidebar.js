<!-- Begin

// NOTE: These are the view cart buttons and sidebar area under the menu


var paypal		= "yes"				// SHOW THE PAYPAL VIEW CART BUTTON
var paypal_email	="shanghaikid1@yahoo.com"	// ADD YOUR PAYPAL E-MAIL FOR THE VIEW CART

var TWOCO		= "no"			// SHOW THE 2CO VIEW CART BUTTON
var TWOCO_sellerID	= "999999"		// YOUR 2CO SELLER ID

var showimage		= "yes"			// SHOW A LINKED SIDEBAR IMAGE
var imagelink		= "contact.htm"		// PAGE TO LINK IMAGE TO

var showline		= "yes"			// SHOW LINE AFTER THE VIEW CART







// YOU DO NOT NEED TO EDIT BELOW THIS LINE

// COPYRIGHT 2006 © Allwebco Design Corporation
// Unauthorized use or sale of this script is strictly prohibited by law





document.write('<TABLE cellpadding="0" cellspacing="0" border="0" width="156"><tr><td align="center">');


// PAYPAL VIEW CART FORM
if (paypal == "yes") {
document.write('<br><a href="https://www.paypal.com/cart/business='+paypal_email+'&display=1" target="paypal"><img src="picts/cartview-Paypal-off.gif" border="0" onmouseover="this.src=\'picts/cartview-Paypal-on.gif\'" onmouseout="this.src=\'picts/cartview-Paypal-off.gif\'"></a><br>');
}



// 2CO VIEW CART FORM
if (TWOCO == "yes") {
document.write('<br><a href="https://www.2checkout.com/2co/buyer/purchase?sid='+TWOCO_sellerID+'" target="TWOCO"><img src="picts/cartview-2CO-off.gif" border="0" onmouseover="this.src=\'picts/cartview-2CO-on.gif\'" onmouseout="this.src=\'picts/cartview-2CO-off.gif\'"></a><br>');
}



// MENU LINE
   if (showline == "yes") {
document.write('<br><img src="picts/menu-line.gif" width="156" height="2" vspace="4"><br>');
}



// SMALL PICTURE AREA
   if (showimage == "yes") {
document.write('<br><center><a href="'+imagelink+'"><img src="picts/sidebar.jpg" border="0" class="borders"></a><br><br></center>');
}


document.write('</td></tr></table>');


//  End -->