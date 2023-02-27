# popup-and-service-worker-isolation

From some testing, it appears that the action popup runs in the same thread as the background service worker.

A slow callback for storage.onChanged.addListener in action popup causes subsequent storage.local.get in service worker to hang, but using a slow callback in content script works just fine.

Isn't popup now supposed to be isolated from service worker in ManifestV3? (https://groups.google.com/a/chromium.org/g/chromium-extensions/c/umZocTE74ng)
