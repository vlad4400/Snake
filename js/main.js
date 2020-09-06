console.log("[main.js]# start reading script");

function initiation() {
  createChessBoard(8);
  addCaptionToChessBoard();
  addChessPieceToChessBoard();
}

function createChessBoard(SIZE_BOARD = 8) {
  console.log("[main.js]# start executing func 'createChessBoard'");
  var table = document.createElement("table");
  var body = document.querySelector("body");
  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  body.appendChild(table);
  table.appendChild(tbody);

  for (var i = 0; i < SIZE_BOARD + 2; i++) {
    tbody.appendChild(tr.cloneNode());
  }
  var trArr = tbody.getElementsByTagName("tr");
  for (var i = 0; i < SIZE_BOARD + 2; i++) {
    for (var i2 = 0; i2 < SIZE_BOARD + 2; i2++) {
      trArr[i].appendChild(td.cloneNode());
    }
  }
  var trArr;
  for (var i = 0; i < SIZE_BOARD + 2; i++) {
    tdArr = trArr[i].childNodes;
    for (var i2 = 0; i2 < SIZE_BOARD + 2; i2++) {
      if (i == 0 || i2 == 0 || i == SIZE_BOARD + 2 - 1 || i2  == SIZE_BOARD + 2 - 1) {
        tdArr[i2].className = "background-color-dark-transparent";
        continue;
      }
      if (i % 2) {
        if (i2 % 2) {
          tdArr[i2].className = "background-color-light";
        } else {
          tdArr[i2].className = "background-color-dark";
        }
      } else {
        if (i2 % 2) {
          tdArr[i2].className = "background-color-dark";
        } else {
          tdArr[i2].className = "background-color-light";
        }
      }
    }
  }
  console.log("[main.js]# end executing func 'createChessBoard'");
}

function addCaptionToChessBoard(SIZE_BOARD = 8) {
  console.log("[main.js]# start executing func 'addCaptionToChessBoard'");
  var trArr = document.getElementsByTagName("tr");
  var tdArr;
  for (var i = 0; i < SIZE_BOARD + 2; i++) {
     tdArr = trArr[i].getElementsByTagName("td");
     for (var i2 = 0; i2 < SIZE_BOARD + 2; i2++) {
       if (i == 0 || i2 == 0 || i == SIZE_BOARD + 2 - 1 || i2  == SIZE_BOARD + 2 - 1) {
         /*row-top*/
         if (i == 0) {
           if (i2 != 0 && i2 != SIZE_BOARD + 2 - 1) {
             tdArr[i2].innerHTML = "&#" + (64 + i2) + ";";
             tdArr[i2].className += " text-color-dark";
             tdArr[i2].style.transform = "rotate(180deg)";
           }
         }
         /*row-bottom*/
         if (i == SIZE_BOARD + 2 - 1) {
           if (i2 != 0 && i2 != SIZE_BOARD + 2 - 1) {
             tdArr[i2].innerHTML = "&#" + (64 + i2) + ";";
             tdArr[i2].className += " text-color-light";
           }
         }
         /*column-left*/
         if (i2 == 0) {
           if (i != 0 && i != SIZE_BOARD + 2 - 1) {
             tdArr[i2].innerHTML = "&#" + (47 + i) + ";";
             tdArr[i2].className += " text-color-light";
           }
         }
         /*column-right*/
         if (i2  == SIZE_BOARD + 2 - 1) {
           if (i != 0 && i != SIZE_BOARD + 2 - 1) {
             tdArr[i2].innerHTML = "&#" + (47 + i) + ";";
             tdArr[i2].className += " text-color-dark";
             tdArr[i2].style.transform = "rotate(180deg)";
           }
         }
       }
     }
   }
   console.log("[main.js]# end executing func 'addCaptionToChessBoard'");
}

function addChessPieceToChessBoard(SIZE_BOARD = 8) {
  console.log("[main.js]# start executing func 'addChessPieceToChessBoard'");
  var trArr = document.getElementsByTagName("tr");
  var tdArr;
  for (var i = 0; i < SIZE_BOARD + 2; i++) {
    tdArr = trArr[i].getElementsByTagName("td");
    for (var i2 = 0; i2 < SIZE_BOARD + 2; i2++) {
      /*chess-piece-top*/
      if (i == 1) {
        switch (i2) {
          case 1:
          tdArr[i2].innerHTML = "&#9820;";
          break;
          case 2:
          tdArr[i2].innerHTML = "&#9822;";
          break;
          case 3:
          tdArr[i2].innerHTML = "&#9821;";
          break;
          case 4:
          tdArr[i2].innerHTML = "&#9819;";
          break;
          case 5:
          tdArr[i2].innerHTML = "&#9818;";
          break;
          case 6:
          tdArr[i2].innerHTML = "&#9821;";
          break;
          case 7:
          tdArr[i2].innerHTML = "&#9822;";
          break;
          case 8:
          tdArr[i2].innerHTML = "&#9820;";
          break;
        }
      }
      if (i == 2) {
        switch (i2) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          tdArr[i2].innerHTML = "&#9823;";
          break;
        }
      }
      /*chess-piece-bottom*/
      if (i == SIZE_BOARD + 2 - 3) {
        switch (i2) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
          case 6:
          case 7:
          case 8:
          tdArr[i2].style.color = "white";
          tdArr[i2].innerHTML = "&#9823;";
          break;
        }
      }
      if (i == SIZE_BOARD + 2 - 2) {
        switch (i2) {
          case 1:
          tdArr[i2].style.color = "white";
          tdArr[i2].innerHTML = "&#9820;";
          break;
          case 2:
          tdArr[i2].style.color = "white";
          tdArr[i2].innerHTML = "&#9822;";
          break;
          case 3:
          tdArr[i2].style.color = "white";
          tdArr[i2].innerHTML = "&#9821;";
          break;
          case 4:
          tdArr[i2].style.color = "white";
          tdArr[i2].innerHTML = "&#9819;";
          break;
          case 5:
          tdArr[i2].style.color = "white";
          tdArr[i2].innerHTML = "&#9818;";
          break;
          case 6:
          tdArr[i2].style.color = "white";
          tdArr[i2].innerHTML = "&#9821;";
          break;
          case 7:
          tdArr[i2].style.color = "white";
          tdArr[i2].innerHTML = "&#9822;";
          break;
          case 8:
          tdArr[i2].style.color = "white";
          tdArr[i2].innerHTML = "&#9820;";
          break;
        }
      }
    }
  }
  console.log("[main.js]# end executing func 'addChessPieceToChessBoard'");
}

window.onload = initiation;

console.log("[main.js]# end reading script");
