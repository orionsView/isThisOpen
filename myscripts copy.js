// const button = document.getElementById('but1');
// const text = document.getElementById('text1');
// const testingText = document.getElementById('text2');


// document.addEventListener('DOMContentLoaded', () => {
//     button.addEventListener('click', () => {
//         chrome.tabs.query({}, function (tabs) {
//             console.log(tabs); // Logs an array of Tab objects
//             // let urls = tabs.map(tab => tab.url)
//             let hashSet = new Set();

//             for (let i = 0; i < tabs.length; i++) {
//                 let curURL = tabs[i].url;
//                 if (hashSet.has(curURL)) {
//                     testingText.textContent = "FLIPPED"
//                     text.innerHTML += i + ": " + curURL + "<br />";
//                     text.style.color = 'red';
//                     openPopup();
//                 } else {
//                     hashSet.add(curURL);
//                     text.innerHTML += i + ": " + curURL + "<br />";
//                 }

//             }
//         });
//     });
// });


// chrome.tabs.query({}, function (tabs) {
//     console.log(tabs); // Logs an array of Tab objects

// });
chrome.tabs.onCreated.addListener((tab) => {
    console.log("New tab created:", tab.url);
});


// let hashSet = new Set();
// chrome.tabs.query({}, function (tabs) {
//     for (let i = 0; i < tabs.length; i++) {
//         let curURL = tabs[i].url;
//         hashSet.add(curURL);
//     }
// });


// chrome.tabs.onCreated.addListener((newTab) => {
//     let newURL;
//     if (newTab.pendingUrl) {
//         newURL = newTab.pendingUrl;
//     } else {
//         newURL = newTab.url;
//     }

//     if (hashSet.has(newURL)) {
//         openPopup();
//     } else {
//         hashSet.add(newURL);
//     }
// });


