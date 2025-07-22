document.getElementById("aboutus").addEventListener("click", function () {
  document
    .getElementById("aboutSection")
    .scrollIntoView({ behavior: "smooth" });
});

document.getElementById("contactus").addEventListener("click", function () {
  document
    .getElementById("contactSection")
    .scrollIntoView({ behavior: "smooth" });
});

var slider = document.getElementById("slider");
var buttons = document.querySelectorAll(".menu button");
var videos = document.querySelectorAll(".slide video");
let currentIndex = 0;
var totalSlides = videos.length;
function showSlide(index) {
  slider.style.transform = `translateX(-${index * 100}%)`;
  buttons.forEach((btn, i) => {
    btn.classList.toggle("active", i === index);
  });
  videos.forEach((vid) => {
    vid.pause();
    vid.currentTime = 0;
  });
  videos[index].play();
  currentIndex = index;
}
buttons.forEach((button, index) => {
  button.addEventListener("click", () => {
    showSlide(index);
  });
});
videos.forEach((video, index) => {
  video.addEventListener("ended", () => {
    var nextIndex = (index + 1) % totalSlides;
    showSlide(nextIndex);
  });
});
window.addEventListener("load", () => {
  showSlide(0);
});

var hoverboxes = document.querySelectorAll(".hover-box");
var overlays = document.querySelectorAll(".overlay");
var hovertexts = document.querySelectorAll(".hover-text");
var rightarrows = document.getElementById("rightarrows");
hoverboxes.forEach(function (box, index) {
  box.addEventListener("mouseover", function () {
    overlays[index].style.display = "none";
    hovertexts.style.display = "block";
    rightarrows.style.display = "block";
  });
  box.addEventListener("mouseleave", function () {
    overlays[index].style.display = "block";
  });
});

var querybtn = document.getElementById("querybtn");
var errorMsg = document.getElementById("error-msg");
querybtn.addEventListener("click", function () {
  var name = document.getElementById("name").value.trim();
  var email = document.getElementById("email").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var date = document.getElementById("date").value.trim();
  var people = document.getElementById("people").value.trim();
  errorMsg.style.display = "none";
  if (!name || !email || !phone || !date || !people) {
    errorMsg.style.display = "block";
    errorMsg.textContent = "🅧 Please fill in all required fields.";
    return;
  }
  var dateRegex = /^\d{2}-\d{2}-\d{2}$/;
  if (!dateRegex.test(date)) {
    errorMsg.style.display = "block";
    errorMsg.textContent = "🅧 Please enter the date in dd-mm-yy format.";
    return;
  }
  var parts = date.split("-");
  var day = parseInt(parts[0], 10);
  var month = parseInt(parts[1], 10) - 1;
  var year = 2000 + parseInt(parts[2], 10);
  var dateObj = new Date(year, month, day);
  if (
    dateObj.getFullYear() !== year ||
    dateObj.getMonth() !== month ||
    dateObj.getDate() !== day
  ) {
    errorMsg.style.display = "block";
    errorMsg.textContent = "🅧 Please enter a valid calendar date.";
    return;
  }
  if (parseInt(people) <= 0) {
    errorMsg.style.display = "block";
    errorMsg.textContent = "🅧 Number of people must be greater than 0.";
    return;
  }
  alert("Form submitted successfully!");
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("date").value = "";
  document.getElementById("people").value = "";
  document.getElementById("city").value = "";
  document.getElementById("whatsapp").value = "";
  document.getElementById("destination").value = "";
  document.getElementById("vacationtype").value = "";
});
