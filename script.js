const dob = new Date("01/23/2001");
function find_age(dob) {
  var diff_ms = Date.now() - dob.getTime();
  var age_dt = new Date(diff_ms);
  return Math.abs(age_dt.getUTCFullYear() - 1970);
}

document.getElementById("age").innerText = find_age(dob);

var title = document.getElementById("job-title");
var paragraph = document.getElementById("job-paragraph");
title.innerHTML = "Technical Specialist at Apple";
paragraph.innerHTML =
  "Assessed the situation of customers that need assistance and helped customers by advising them and positioning solutions on the spot, using my technical knowledge of current and old Apple technologies to help with iPod, iPhone, and iPad devices. Reassured Apple customers when delivering product diagnoses and potential solutions and maintained composure and customer focus while troubleshooting and solving issues.";

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

  for (var i = 1; i <= 9; i++) {
    let arr = array_clone[Math.floor(Math.random() * len)];
    len -= 1;
    let index = array_clone.indexOf(arr);
    array_clone.splice(index, 1);
    new_array.push(arr);
  }

  for (var i = 0; i < 9; i++) {
    document.getElementById("lang-" + i).src =
      "../images/skills/" + new_array[i] + ".webp";
  }
}

function shuffle_skills() {
  setTimeout(shuffle_skills, 3000);
  show_skills();
}
shuffle_skills();

function deactivate_job(ids) {
  for (var i = 0; i < ids.length; i++) {
    document.getElementById(ids[i]).classList.remove("active");
  }
  title.innerHTML = "";
  paragraph.innerHTML = "";
}

function choose_job(id) {
  ids = ["target", "amazon", "apple"];
  var activeID = document.getElementById(id);
  if (id === "target") {
    deactivate_job(ids);
    activeID.classList.add("active");
    title.innerHTML = "Retail Associate at Target";
    paragraph.innerHTML =
      "Learned outstanding customer service by engaging with customers and helping them, by providing the right answers for their questions regarding merchandise, and also directing them to the area within the store where they will find the item they are looking for.<br><br>Maintained accurate and attractive merchandise displays, ensuring strategic placement of products to make the store more appealing and to drive sales and provide a stimulating and enjoyable shopping experience for the customers. ";
  } else if (id === "amazon") {
    deactivate_job(ids);
    activeID.classList.add("active");
    title.innerHTML = "Fulfillment Associate at Amazon";
    paragraph.innerHTML =
      "Communicated with customers about their order and quickly prepared their orders for delivery.";
  } else if (id === "apple") {
    deactivate_job(ids);
    activeID.classList.add("active");
    title.innerHTML = "Technical Specialist at Apple";
    paragraph.innerHTML =
      "Assessed the situation of customers that need assistance and helped customers by advising them and positioning solutions on the spot, using my technical knowledge of current and old Apple technologies to help with iPod, iPhone, and iPad devices. Reassured Apple customers when delivering product diagnoses and potential solutions and maintained composure and customer focus while troubleshooting and solving issues.";
  }
}
