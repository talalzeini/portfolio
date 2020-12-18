



aboutArray = ["I travel a lot", "Soccer is my passion", "I work at Target", "Graduating in 2023", "I code for fun"]

projectsArray =["Swift Beginner", "Web Developer", "Unity Expert", "Good Designer", "Js Experience"]



document.getElementById('hoverResult').style.color = "black"
document.getElementById('hovResult').style.color = "black"

function aboutIcons(number){
    document.getElementById('hoverResult').innerText = aboutArray[number]
    document.getElementById('hoverResult').style.color = "white"
}
function empty(){
    document.getElementById('hoverResult').innerText = "Myself"
    document.getElementById('hoverResult').style.color = "black"
    document.getElementById('hovResult').innerText = "Myself"
    document.getElementById('hovResult').style.color = "black"
}
function projectsIcons(aNumber){
    document.getElementById('hovResult').innerText = projectsArray[aNumber]
    document.getElementById('hovResult').style.color = "white"
}