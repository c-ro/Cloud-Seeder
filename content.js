

$(document).ready(function() {
	$(".l-three-column").prepend("<div id='dlNotice'>Downloads: </div>");
	$('#dlNotice').hide();
	
	var dlButtons = $(".sc-button-download.sc-button.sc-button-small.sc-button-responsive");
	// <a class="sc-button-download sc-button sc-button-small sc-button-responsive" tabindex="0" download="Pizza Mix 018 - Crush All Bits" title="Download this track (40.8MB)">Download</a>

	var dlLabels = [];

	$(".sc-button-download.sc-button.sc-button-small.sc-button-responsive").each(function () {
	  dlLabels.push($(this).attr("download"));
	});

	// TODO: Capture/draw each available button indiviually
	// TODO: eager load the whole profile to get all buttons.
	chrome.runtime.onMessage.addListener(
	  function(request, sender, sendResponse) {
	    if(request.message === "clicked_page_action") {
	    		//remove dl button from view and scrape data
	    		dlButtons.detach();
	    		// redraw dl button in dlNotice div with text identifier
	    		$('#dlNotice').toggle();
	    		// $('#dlNotice').append($(dlButtons).attr("download"));  <--- this works for first element only
	    		$(dlButtons).appendTo('#dlNotice');

		};
 	});


});