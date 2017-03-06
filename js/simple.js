 (function () {
  'use strict';

  var popupURL = chrome.extension.getURL('html/popup.html'),
    activeTabId,
    popup;
    
  function handleClick() {
    chrome.tabs.query({
      currentWindow: true,
      active: true
    }, function (tabs) {
      if (tabs.length > 0) {
        activeTabId = tabs[0].id;
        chrome.windows.create({
          url: popupURL,
          type: 'normal',
          height: 900,
          width: 680
        }, function (window) {
          popup = window;
        });
      }
    });
  }

  function initialize() {
    chrome.browserAction.onClicked.addListener(handleClick);
  }

  initialize();
}());
