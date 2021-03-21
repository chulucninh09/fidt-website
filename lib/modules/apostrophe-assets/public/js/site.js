$(function() {
  // Start with your project-level client-side javascript here.
  // JQuery and lodash (_) are both included with Apostrophe, so no need to
  // worry about including them on your own.
  
  // console.log('Hello world.');

});

function toggleSideMenu() {
  sideMenu = document.getElementById("side-menu")
  overlay = document.getElementById("blur-overlay")
  if (sideMenu.style.marginLeft == "0px") {
    sideMenu.style.marginLeft = "-270px"
    overlay.style.display = "none"
  }
  else {
    sideMenu.style.marginLeft = "0px"
    overlay.style.display = "block"
  }
}

function expandDropdownMenu(elem) {
  if (elem.nextElementSibling.style.display === "block") {
    // elem.nextElementSibling.style.height = "0px"
    elem.nextElementSibling.style.display = "none"
    // elem.nextElementSibling.style.transform = "scaleY(0)"
    elem.getElementsByTagName("i")[0].style.transform = "rotate(0deg)"
  }
  else {
    elem.nextElementSibling.style.display = "block"
    // elem.nextElementSibling.style.transform = "scaleY(100%)"
    elem.getElementsByTagName("i")[0].style.transform = "rotate(90deg)"
  }
}