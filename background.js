// background.js

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    console.log("onUpdated fired:", { tabId, changeInfo, tab });

    if (!tab.url) {
        console.log("Tab has no URL yet, skipping.");
        return;
    }

    chrome.tabs.query({ url: tab.url }, (tabs) => {
        console.log("Tabs with same URL:", tabs);

        // If more than one tab shares the URL, it's a duplicate
        if (tabs.length > 1) {
            tabs.forEach(t => {
                if (t.url.startsWith("http")) {
                    chrome.tabs.sendMessage(t.id, {
                        action: "prefixTitle",
                        marker: "🔴 "
                    }, (response) => {
                        if (chrome.runtime.lastError) {
                            console.warn("SendMessage error:", chrome.runtime.lastError.message, "Tab ID:", t.id);
                        } else {
                            console.log("Message sent to tab:", t.id, "Response:", response);
                        }
                    });
                } else {
                    console.log("Content script not injected in this tab type:", t.url);
                }
            });
        } else {
            console.log("No duplicate tabs found for URL:", tab.url);
        }
    });
});
