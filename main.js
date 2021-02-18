window.onscroll = function() {scrollFunction()};
onclick = alert("hello!");

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("nav_bar").style.padding = "40px 10px";
    document.getElementById("nav_bar").style.fontSize = "30px";
    document.getElementById("navbar_rightlinks").style.fontSize = "15px";
    document.getElementById("nav_bar").style.opacity=".6";
  }
  else {
    document.getElementById("nav_bar").style.padding = "50px 10px";
    document.getElementById("nav_bar").style.fontSize = "40px";
    document.getElementById("navbar_rightlinks").style.fontSize = "15px";
    document.getElementById("nav_bar").style.opacity=".6";
  }
} 