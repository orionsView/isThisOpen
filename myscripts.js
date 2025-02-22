const button = document.getElementById('but1');
const text = document.getElementById('text1');


document.addEventListener('DOMContentLoaded', () => {
    button.addEventListener('click', () => {
        chrome.tabs.query({}, function(tabs) {
            console.log(tabs); // Logs an array of Tab objects
            // let urls = tabs.map(tab => tab.url)
            
            for(let i = 0; i < tabs.length; i++){
                text.innerHTML += i +": " + tabs[i].url + "<br />";
            }
        });        
    });
});

