let hashSet = new Set();
chrome.tabs.query({}, function (tabs) {

    console.log(tabs); // Logs an array of Tab objects



    for (let i = 0; i < tabs.length; i++) {
        let curURL = tabs[i].url;
        hashSet.add(curURL);

    }
});

let limit = 0;
chrome.tabs.onCreated.addListener((tab) => {
    let newURL
    if (tab.pendingUrl) {
        newURL = tab.pendingUrl;
        console.log("Pending URL:", tab.pendingUrl);
    } else if (tab.url) {
        newURL = tab.url;
        console.log("Final URL:", tab.url);
    } else {
        console.log("No URL available yet.");
    }
    if (hashSet.has(newURL)) {
        console.log("Already OPEN");

        let tabID = tab.id;
        console.log("ID: " + tabID);

    } else {
        hashSet.add(newURL);
    }


});




