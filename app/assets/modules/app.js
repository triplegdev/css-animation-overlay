/*

DESCRIPTION:

This is a challenge exercise for WIREWAX where we test your creative skills with HTML, CSS and Javascript. Please read the rules and challenges goals. You should spend no more than 4 hours on the challenge. If you have any questions, please don't hesitate to email me (john@wirewax.com). 

Once the exercise is complete, please either fork this JSFiddle or create a GitHub project and email us the URL.

Good luck :)

RULES:
 - You can use JQuery.
 - You can't edit the default HTML. New elements should be added using JQuery.
 - You can't edit the default CSS. Only add or edit CSS for your new elements.
 - The SVG icon can be found here: http://edge-assets.wirewax.com/creativeData/devChallenge/plusIcon.svg

CHALLENGE GOALS:
 - Create and style the tag content provided in the PDF. 
 - The tag content should be horizontally and vertically centered inside the myTag element.
 - The tag should be sized correctly and responsive - it should scale up or down relative to screen size.
 - The tag should have some kind of hover effect.
 - Style the overlay so that it matches the designs in the PDF. 
 
EXTRA CHALLENGE: 
 - The tag content should fade in from opacity 0 and fade out in the same way. This effect should be achieved with CSS.

*/

var myTag = $('#myTag');
var myOverlay = $('#myOverlay');
var tagStartTime = 2000;
var tagDuration = 5000;
var tagAnimateOutTime = 1000;

// Tag/Hotspot Alignment Container

myTag.append('<div class="hotspot"></div>');

var myHotspot = $('.hotspot');
myHotspot.append('<svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet"><polygon id="plus" fill="#FFFFFF" points="99.1,42.4 57.6,42.4 57.6,0.9 42.4,0.9 42.4,42.4 0.9,42.4 0.9,57.6 42.4,57.6 42.4,99.1 57.6,99.1 57.6,57.6 99.1,57.6 "/></svg>');
myHotspot.append('<p class="top-text">find out more about</p>');
myHotspot.append('<p class="bottom-text">killer whales</p>');

// Modal Container

myOverlay.append('<div class="modal-container"></div>');

var myModal = $('.modal-container');
myModal.append('<div class="whale-pic"></div>');
myModal.append('<div class="whale-info"></div>');

// Image Container

var myWhaleImage = $('.whale-pic');
myWhaleImage.append('<img src="./images/killerWhale.png">');

// Description Container

var myWhaleInfo = $('.whale-info');
myWhaleInfo.append('<div class="infoBox"></div>');
myWhaleInfo.append('<p class="close-infoBox">close</p>');

// Close/Exit Modal Label

var closeModal = $('.close-infoBox');

// Inner Description Container

var myInfoBox = $('.infoBox');
myInfoBox.append('<div class="topBox"></div>');
myInfoBox.append('<p class="bottomBox clearfix"></p>');

// Top Narrow Description Container

var myTopInfoBox = $('.topBox');
myTopInfoBox.append('<h1 class="info-title">The<span>Killer</span><span>Whale</span></h1>');
myTopInfoBox.append('<p class="info-species">orcinus orca</p>');
myTopInfoBox.append('<p class="info-text">The killer whale or orca (Orcinus orca) is a toothed whale belonging to the oceanic dolphin family, of which it is the largest member.</p>');

// Bottom Description Container

var myBottomInfoBox = $('.bottomBox');
myBottomInfoBox.append('<div class="lifespanBox"></div>');
myBottomInfoBox.append('<div class="lengthBox"></div>');

// Lifespan Container

var myLifespanBox = $('.lifespanBox');
myLifespanBox.append('<h4 class="bottomBox-text lifespan">Lifespan<span class="span-colon">:</span><span class="span-description"> 29 years</span></h4>');

// Length Container

var myLengthBox = $('.lengthBox');
myLengthBox.append('<h4 class="bottomBox-text length">Length<span class="span-colon">:</span><span class="span-description"> 5-8 meters</span></h4>');


function showTag() {
  myTag.css('display', 'block');
  myTag.addClass('show');
}

function animateOutTag() {
  myTag.addClass('animate-out');
}

function hideTag() {
  myTag.removeClass('show');
  myTag.removeClass('animate-out');
  myTag.css('display', 'none');
}

function showOverlay() {
  myOverlay.css('display', 'block');
}

function closeOverlay() {
  myOverlay.css('display', 'none');
}

myHotspot.click(showOverlay); // Changed to myHotspot so that only this area is clickable and not the whole myTag area
closeModal.click(closeOverlay); // Event Handler for close label
myOverlay.on('click', function(e) { // Checks only if user clicks outside of the modal container
	  if (e.target !== this)
	    return;

	  	closeOverlay();
	});
setTimeout(showTag, tagStartTime);
setTimeout(animateOutTag, tagStartTime + tagDuration - tagAnimateOutTime);
setTimeout(hideTag, tagStartTime + tagDuration);