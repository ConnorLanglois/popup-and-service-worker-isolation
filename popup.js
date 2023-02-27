// Comment out this file to test content script

chrome.storage.onChanged.addListener(changes => {
  // Simulating slow code
  while (true) {}
});

chrome.runtime.sendMessage({ type: 'runTest' });
