/* side bar nav */
var nav = document.getElementById("navigation");

document.getElementsByClassName("menu-icon").onclick = function() {
  nav.classList.add("opened")
};

document.getElementById("close-icon").onclick = function() {
  nav.classList.remove("opened")
};
