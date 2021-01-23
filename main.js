window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("nav_bar").style.padding = "30px 10px";
    document.getElementById("navbar_rightlinks").style.fontSize = "25px";
    document.getElementById("nav_bar").style.opacity=".6";
  } else {
    document.getElementById("nav_bar").style.padding = "80px 10px";
    document.getElementById("navbar_rightlinks").style.fontSize = "30px";
    document.getElementById("nav_bar").style.opacity=".9";
  }
} 