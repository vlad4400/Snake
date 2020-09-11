console.log("[slider.js]# start reading script");

let SIZE_GALERY = 3;

window.onload = initiation;

function initiation() {
  /*START MAIN PART*/
  createGalleryPictures();
  createButtons();
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

    document.getElementById("small-img").appendChild(img);
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

function createButtons() {
  let btnLeft = document.createElement("button");
  btnLeft.innerText = "<";
  btnLeft.onclick = function() {
    bigImg = document.querySelector(".big-img");

    let index = +bigImg.id.split("-")[2];
    let indexNext = (index > 0)? index - 1 : SIZE_GALERY - 1;

    bigImg.setAttribute("src", bigImg.src.replace(`img/big/image-${index}`, `img/big/image-${indexNext}`));
    bigImg.setAttribute("id", bigImg.id.replace(index, indexNext));
  }

  let btnRight = document.createElement("button");
  btnRight.innerText = ">";
  btnRight.onclick = function() {
    bigImg = document.querySelector(".big-img");

    let index = +bigImg.id.split("-")[2];
    let indexNext = (index == SIZE_GALERY - 1)? 0 : index + 1;

    bigImg.setAttribute("src", bigImg.src.replace(`img/big/image-${index}`, `img/big/image-${indexNext}`));
    bigImg.setAttribute("id", bigImg.id.replace(index, indexNext));
  }

  let body = document.querySelector("body");
  body.appendChild(btnLeft);
  body.appendChild(btnRight);
}


console.log("[slider.js]# end reading script");
