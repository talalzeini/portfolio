
const yearBorn = 2001
var age = new Date().getFullYear()- yearBorn
document.getElementById("age").innerText = age

function wink(){
    document.getElementById('profile-image').src = "images/wink.jpg"
}
function smile(){
    document.getElementById('profile-image').src = "images/mainimage.jpg"
}
function scream(){
    document.getElementById('profile-image').src = "images/scream.jpg"
}