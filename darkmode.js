const switchBtn = document.querySelector("#switch");
const background_color = document.getElementsByTagName("body");
const group_color = document.getElementsByClassName("group");
const image = document.querySelector(".instagram-logo");
const getapptext = document.querySelector(".get-app");
const instagramlogin = document.querySelector(".instagram-login");
const instagramlogout = document.querySelector(".instagram-logout");
const links = document.querySelectorAll(".link-blue");
const downloadBtns = document.querySelectorAll(".app-download");

switchBtn.onchange = () => {  
  if(switchBtn.checked) {
    background_color[0].style.backgroundColor = "#333333";
    group_color[0].style.backgroundColor = "#171717";
    group_color[0].style.borderColor = "transparent";
    group_color[1].style.backgroundColor = "#171717";
    group_color[1].style.borderColor = "transparent";
    image.src = "./img/instagram-logo-red.png";
    getapptext.style.color = "#d90e39";
    instagramlogin.style.backgroundColor = "#d90e39";
    instagramlogout.style.color = "#d90e39";
    links[0].style.color = "#d90e39";
    links[1].style.color = "#d90e39";
  } else {
    background_color[0].style.backgroundColor = "rgb(243, 243, 243)";
    group_color[0].style.backgroundColor = "#ffffff";
    group_color[0].style.borderColor = "lightgray";
    group_color[1].style.backgroundColor = "#ffffff";
    group_color[1].style.borderColor = "lightgray";
    image.src = "./img/instagram-logo.png";
    getapptext.style.color = "#000000";
    instagramlogin.style.backgroundColor = "rgb(0, 149, 246)";
    instagramlogout.style.color = "rgb(0, 149, 246)";
    links[0].style.color = "rgb(0, 149, 246)";
    links[1].style.color = "rgb(0, 149, 246)";
  }

}