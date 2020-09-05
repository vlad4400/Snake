console.log("[add-backgound-image.js]# start reading script");

setDefaultBackgroundImage();

function setDefaultBackgroundImage() {
  console.log("[add-backgound-image.js]# start executing func 'setDefaultBackgroundImage'");
  var html = document.querySelector("html");
  html.style.backgroundImage = "url('img/html-background.jpeg')";
  console.log("[add-backgound-image.js]# end executing func 'setDefaultBackgroundImage'")
}

console.log("[add-backgound-image.js]# end reading script");
