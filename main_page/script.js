let terms_div = document.getElementById("terms");
let youtube_div = document.getElementById("youtube");
let twitter_div = document.getElementById("twitter");

terms_div.addEventListener("click", onTermsClick);
youtube_div.addEventListener("click", onYoutubeClick);
twitter_div.addEventListener("click", onTwitterClick);

function onTermsClick(){
    console.log("terms clicked");
}

function onYoutubeClick(){
    console.log("Youtube clicked")
    let youtube_link = document.getElementById("youtube_hyperlink");
    youtube_link.click();
}

function onTwitterClick(){
    console.log("Twitter clicked");
    let twitter = document.getElementById("twitter_hyperlink");
    twitter.click();
}