var activeTab;

// DISPLAY PAGE ACTION ICON
function showPageAction( tabId, changeInfo, tab ) {
    chrome.pageAction.show(tabId);
};

chrome.tabs.onUpdated.addListener(showPageAction);

// FETCH TAB ID for GLOBAL
chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
  activeTab = tabs[0].id;
});

// SET ONCLICK ACTION(S)
chrome.pageAction.onClicked.addListener(function(tab) {
  
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      activeTab = tabs[0].id;
    });

    chrome.tabs.sendMessage(activeTab, {"message": "clicked_page_action"});

  console.log("Sent Message from Bg.js");

});