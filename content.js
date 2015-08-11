

$(document).ready(function() {
	$(".l-three-column").prepend("<div id='dlNotice'>Downloads: </div>");
	$('#dlNotice').hide();
	
	// var dlButtons = $(".sc-button-download.sc-button.sc-button-small.sc-button-responsive");

	var dlLabels = [];


	// TODO: Capture/draw each available button indiviually
	// TODO: eager load the whole profile to get all buttons.
	chrome.runtime.onMessage.addListener(
	  function(request, sender, sendResponse) {
	    if(request.message === "clicked_page_action") {


			$(".sc-button-download").each(function () {
				var arrayLike = [].slice.call(arguments);
				arrayLike[1].click();
				console.log(arrayLike[1]);

				// <span class="soundTitle__usernameText">pixelord</span>

				// console.log(this);
				// arrayLike[1].click();//.ownerDocument.activeElement.href
			});

	    		//remove dl button from view and scrape data
	    		// dlButtons.detach();
	    		// redraw dl button in dlNotice div with text identifier
	    		// $('#dlNotice').toggle();
	    		// $('#dlNotice').append($(dlButtons).attr("download"));  <--- this works for first element only
	    		// $(dlButtons).appendTo('#dlNotice');

		};
 	});


});