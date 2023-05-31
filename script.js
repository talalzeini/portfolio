//
//
//
//
//
//
const body = document.querySelector("body");
const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
const amatyc = document.getElementById("amatyc");
const profileImage = document.getElementById("profile-image");
const srl = document.getElementById("srl");
const c = document.getElementById("c");
const pi = document.getElementById("pi");
const dob = new Date("01/23/2001");
const bitmojiPath = "images/bitmoji/";
const age = document.getElementById("age");
age.innerText = getAge(dob);
//
body.ondragstart = () => {
  return false;
};

function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

setInterval(function () {
  profileImage.src = bitmojiPath + "wink" + ".webp";
}, 3000);

setInterval(function () {
  profileImage.src = bitmojiPath + "smile" + ".webp";
}, 1750);

function showSkills() {
  let arrayOfIndexes = [];
  const arrayClone = numbers.slice();
  let len = numbers.length;
  for (let i = 1; i <= 9; i++) {
    let randomInteger = arrayClone[Math.floor(Math.random() * len)];
    len -= 1;
    let index = arrayClone.indexOf(randomInteger);
    arrayClone.splice(index, 1);
    arrayOfIndexes.push(randomInteger);
  }

  for (let i = 0; i < 9; i++) {
    document.getElementById("lang-" + i).src =
      "../images/skills/" + arrayOfIndexes[i] + ".webp";
  }
}

function activate(elements) {
  elements[0].classList.add("active");
  elements[1].classList.remove("hide");
}
function desactivate(elements) {
  elements[0].classList.remove("active");
  elements[1].classList.add("hide");
}

function shuffleSkills() {
  setTimeout(shuffleSkills, 3000);
  showSkills();
}

function switch_school_projects(id) {
  if (id === "srl") {
    activate([srl, amatyc]);
    desactivate([pi, c]);
    return;
  }
  desactivate([srl, amatyc]);
  activate([pi, c]);
}

shuffleSkills();

var now = new Date();
var hour = now.getHours();
var image = document.getElementById("landing-image");
if (hour >= 6 && hour < 18) {
  image.src = "images/bitmoji/plane.webp";
} else {
  image.src = "images/bitmoji/parachute.webp";
}
