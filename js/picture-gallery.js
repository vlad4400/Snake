console.log("[picture-gallery.js]# start reading script");

let SIZE_GALERY = 4;

window.onload = initiation;

function initiation() {
  /*START MAIN PART*/
  createGalleryPictures();
  /*END MAIN PART*/
}

/*create gallery picture*/
function createGalleryPictures() {
  for (let i = 0; i < SIZE_GALERY; i++) {
    let img = document.createElement("img");
    img.alt = "#";
    img.className = "small-img-item";
    img.id = `small-img-${i}`;
    img.src = `img/small/image-${i}.jpg`;
    img.onclick = openBigImg;

    document.getElementById("small-img-wrapper").appendChild(img);
  }

  /*on action click*/
  function openBigImg(event) {
    let img = document.createElement("img");
    img.alt = "#";
    img.src = event.target.src.replace("img/small/image-", "img/big/image-");
    img.id = event.target.id.replace("small", "big");
    img.className = "big-img";
    img.onerror = function() {
      alert("File not found!");
    };

    let bigImg = document.getElementById("big-img-wrapper");
    bigImg.innerText = "";
    bigImg.appendChild(img);
  }

}

console.log("[picture-gallery.js]# end reading script");
