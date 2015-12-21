$(document).ready(function() {
	$(document.body).prepend("<div id='cs-downloads'></div>");
		
	var dlLabels = [];

	function buildList() {

		dlLabels = [];

		$(".sc-button-download").each(function () {
			var arrayLike = [].slice.call(arguments);
			var dlElement = arrayLike[1];
			// arrayLike[1].click();
			
			dlLabels.push(dlElement);

			console.log(dlLabels);
		});

		renderButtons();
	}

	function downloadAll(){
		$(dlLabels).each(function(){
			this.click();
		});
	}

	function renderButtons(){

		$('#cs-downloads').empty();

		$('#cs-downloads').prepend("<div id='download-all' class='button'>Download All</div>");
		$('#download-all').on('click', function(){
			downloadAll();
		});
		
		$(dlLabels).each(function(index){
			var download = $("#cs-downloads").append("<div class='button' id='btn" + index +"'></div>");
			var id = "#btn" + index;
			var button = $(id);

			$(button).append(this).append(" - " + this.download);

			console.log(dlLabels.length);
			console.log($('#cs-downloads').children().length);
		});
	}

	renderButtons();

// TODO: get a promise for the whole profile to get all buttons.
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
		if(request.message) {
			buildList();
			$("#cs-downloads").show();
		} else {
			$("#cs-downloads").hide();
		}
});

});

