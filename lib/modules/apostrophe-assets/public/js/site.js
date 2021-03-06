$(function() {
  // Start with your project-level client-side javascript here.
  // JQuery and lodash (_) are both included with Apostrophe, so no need to
  // worry about including them on your own.
  
  // console.log('Hello world.');

});

var isSidebarOpen = false;
function toggleSidebar() {
  if (isSidebarOpen) {
    closeSidebar()
    console.log("Sidebar closed")
  }
  if (!isSidebarOpen) {
    openSidebar()
    console.log("Sidebar opened")
  }
  isSidebarOpen = !isSidebarOpen
}

function openSidebar() {
  document.getElementById("gl-sidebar").classList.remove("gl-sidebar-inactive")
  document.getElementById("gl-sidebar").classList.add("gl-sidebar-active")
  // document.getElementById("gl-main-content").style.marginLeft = "250px"
  // document.body.style.backgroundColor = "rgba(0,0,0,0.4)"
}

function closeSidebar() {
  // document.getElementById("gl-sidebar").style.marginLeft = "-250px"
  // document.getElementById("gl-main-content").style.marginLeft = "0px"
  // document.body.style.backgroundColor = "white"
  
  document.getElementById("gl-sidebar").classList.add("gl-sidebar-inactive")
  document.getElementById("gl-sidebar").classList.remove("gl-sidebar-active")
}