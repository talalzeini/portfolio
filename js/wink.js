setTimeout(function() { smileFunc(); });

function smileFunc(){
    document.getElementById('image').src="../images/mainimage.jpg"
    setTimeout(function() { winkFunc(); }, 4000);
}
function winkFunc(){
    document.getElementById('image').src="../images/wink.jpg"
    setTimeout(function() { smileFunc(); }, 500);
}