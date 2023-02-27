chrome.runtime.onMessage.addListener(async ({ type }) => {
  if (type === 'runTest') {
    console.log('before set');
    chrome.storage.local.set({ test: 'test' });
    console.log('after set');
    console.log('before get');
    await chrome.storage.local.get({ test: '' });
    console.log('after get'); // This code is never reached when popup code runs,
                              // but is reached when content script runs.

                              // So, content script runs in separate thread than service worker,
                              // but popup runs in same thread?
  }
});
