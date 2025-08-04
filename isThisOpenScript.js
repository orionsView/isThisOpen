// content-script.js

let originalTitle = document.title;
let isPrefixed = false;

chrome.runtime.onMessage.addListener((msg) => {
    if (msg.action === "prefixTitle") {
        // If not yet prefixed, add the marker
        if (!isPrefixed) {
            document.title = `${msg.marker}${originalTitle}`;
            isPrefixed = true;
        }
    }
});