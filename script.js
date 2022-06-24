const dob = new Date("01/23/2001");
function find_age(dob) {
  let diff_ms = Date.now() - dob.getTime();
  let age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

document.getElementById("age").innerText = find_age(dob);

function wink() {
  document.getElementById("profile-image").src = "images/bitmoji/wink.webp";
}
function smile() {
  document.getElementById("profile-image").src = "images/bitmoji/profile.webp";
}
function scream() {
  document.getElementById("profile-image").src = "images/bitmoji/scream.webp";
}

function show_skills() {
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const array_clone = numbers.slice();

  let len = numbers.length;

  let new_array = [];

  for (let i = 1; i <= 9; i++) {
    let arr = array_clone[Math.floor(Math.random() * len)];
    len -= 1;
    let index = array_clone.indexOf(arr);
    array_clone.splice(index, 1);
    new_array.push(arr);
  }

  for (let i = 0; i < 9; i++) {
    document.getElementById("lang-" + i).src =
      "../images/skills/" + new_array[i] + ".webp";
  }
}

function shuffle_skills() {
  setTimeout(shuffle_skills, 3000);
  show_skills();
}
document.getElementById("amatyc").classList.remove("hide");
document.getElementById("c").classList.add("hide");
function switch_school_projects(id) {
  if (id === "srl") {
    document.getElementById("amatyc").classList.remove("hide");
    document.getElementById("srl").classList.add("active");
    document.getElementById("c").classList.add("hide");
    document.getElementById("pi").classList.remove("active");
  } else if (id === "pi") {
    document.getElementById("c").classList.remove("hide");
    document.getElementById("pi").classList.add("active");
    document.getElementById("amatyc").classList.add("hide");
    document.getElementById("srl").classList.remove("active");
  }
}

shuffle_skills();
