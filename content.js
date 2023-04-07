document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('checkPage');
  checkPageButton.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      const panel = tabs[0].querySelector("#root > div > div.Layout-sc-1xcs6mc-0.htmBdw > div > div > section > div > div:nth-child(1)");
      panel.style.display = "none";
    });
  }, false);
}, false);