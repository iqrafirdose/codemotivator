document.addEventListener('DOMContentLoaded', function() {
    // Add event listener for the "Generate" button
    document.getElementById('generateBtn').addEventListener('click', function() {
      // Communicate with the background script to get a new quote
      chrome.runtime.sendMessage({ action: 'getRandomQuote' }, function(response) {
        document.getElementById('quote').innerText = response.quote;
      });
    });
  
    // Display a random quote on popup open
    chrome.runtime.sendMessage({ action: 'getRandomQuote' }, function(response) {
      document.getElementById('quote').innerText = response.quote;
    });
  });
  