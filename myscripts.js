
let i = 0;
chrome.tabs.onCreated.addListener((tab) => {
    i++;
    if (i <= 1) {
        console.log("New tab created:", tab.url);
        openPopup();

    }
});

// function openPopup() {
//     console.log("Triggered");
//     chrome.windows.create({
//         url: "hello.html",
//         type: "popup",
//         width: 200,
//         height: 150
//     });
// }