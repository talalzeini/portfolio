//
//
//
//
//
//
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
function getAge(dateString) {
  var today = new Date();
  var birthDate = new Date(dateString);
  var age = today.getFullYear() - birthDate.getFullYear();
  console.log(age);
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}

function animateBitmoji(expression) {
  profileImage.src = bitmojiPath + expression + ".webp";
}

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
