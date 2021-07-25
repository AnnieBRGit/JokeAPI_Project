

const API_ENDPOINT ="https://icanhazdadjoke.com"; // declare constants up here
const XHR = new XMLHttpRequest();


function getJoke() { // Step 1: calling the API with a function
    XHR.open('GET', API_ENDPOINT);

    XHR.setRequestHeader('Accept', 'application/json');
    XHR.responseType = 'json';
    XHR.onload = function() {
        showJoke(XHR.response.joke)
    }
    XHR.onerror = function(){
        console.log('An error occurred');
    }

    XHR.send()
}
document.getElementById('button').addEventListener('click', function(){
    getJoke(); // STEP2: getJoke function activated when button clicked
    
});

function showJoke(joke){ // STEP 3: 
    document.getElementById('joke').innerHTML = joke;
   }