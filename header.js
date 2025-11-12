function toggleMenu() {
  var links = document.getElementById("myLinks");
  var icon = document.getElementById("menuIcon");

  if (links.style.display === "block") {
    links.style.display = "none";
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  } else {
    links.style.display = "block";
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  }
}
