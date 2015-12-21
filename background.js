var activeTab;

// DISPLAY PAGE ACTION ICON
function showPageAction( tabId, changeInfo, tab ) {
	if(tab.url.indexOf("https://soundcloud.com") >= 0){
		chrome.pageAction.show(tabId);
	}
}

chrome.tabs.onUpdated.addListener(showPageAction);

// FETCH TAB ID for GLOBAL
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  activeTab = tabs[0].id;
});

// SET ONCLICK ACTION(S)
var scOpen = false;

chrome.pageAction.onClicked.addListener(function(tab) {
  
	if(scOpen){
		scOpen = false;
	} else {
		scOpen = true;
	}

	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		activeTab = tabs[0].id;
	});

    chrome.tabs.sendMessage(activeTab, {"message": scOpen});
});