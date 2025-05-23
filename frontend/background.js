chrome.extension.onRequest.addListener(function(prediction){
    if (prediction == 1){
        alert("Warning!! Phishing Alert!!");
    }
    else if (prediction == -1){
        alert("You are enjoying safe browsing!!♥");
    }
});
