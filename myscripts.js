let hashSet = new Set();
chrome.tabs.query({}, function (tabs) {
                // const text = document.getElementById("text1");
                console.log(tabs); // Logs an array of Tab objects
                // let urls = tabs.map(tab => tab.url)
                
    
                for (let i = 0; i < tabs.length; i++) {
                    let curURL = tabs[i].url;
                    hashSet.add(curURL);
                    // if (hashSet.has(curURL)) {
                    //     // testingText.textContent = "FLIPPED"
                    //     // text.innerHTML += i + ": " + curURL + "<br />";
                    //     // text.style.color = 'red';
                    //     // openPopup();
                    // } else {
                    //     hashSet.add(curURL);
                    //     // text.innerHTML += i + ": " + curURL + "<br />";
                    // }
    
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
        chrome.tabs.group({ tabIds: tabID });
    }
    hashSet.add(newURL);

    // let newURL = tab.pendingURL ? tab.pendingURL : tab.url; // newly created URL
    // // let tabID = tab[0].ID;
    // // if (hashSet.has(curURL)) {
    //     console.log(newURL);
    // }
});

// limit++;
// if (limit <= 1) {
//     console.log("New tab created:", tab.url);
//     openPopup();

// }

// function openPopup() {
//     console.log("Triggered");
//     chrome.windows.create({
//         url: "hello.html",
//         type: "popup",
//         width: 200,
//         height: 150
//     });
// }


