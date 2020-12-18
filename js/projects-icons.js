



projectsArray =["Swift Beginner", "Good Designer", "Unity Expert", "Web Developer", "JS Experienced"]
document.getElementById('hovResult').style.color = "black"

function empty(){
    document.getElementById('hovResult').innerText = "Myself"
    document.getElementById('hovResult').style.color = "black"
}
function projectsIcon(aNumber){
    document.getElementById('hovResult').innerText = projectsArray[aNumber]
    document.getElementById('hovResult').style.color = "white"
}

