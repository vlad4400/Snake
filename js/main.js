console.log("[main.js]# start reading script");

function initiation() {
  createChessBoard(8);
  addCaptionToChessBoard();
}

function createChessBoard(SIZE_BOARD = 8) {
  console.log("[main.js]# start executing func 'creatChessBoard'");
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
  console.log("[main.js]# end executing func 'creatChessBoard'");
}

function addCaptionToChessBoard(SIZE_BOARD = 8) {
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
             tdArr[i2].innerText = i;
             tdArr[i2].className += " text-color-light";
           }
         }
         /*column-right*/
         if (i2  == SIZE_BOARD + 2 - 1) {
           if (i != 0 && i != SIZE_BOARD + 2 - 1) {
             tdArr[i2].innerText = i;
             tdArr[i2].className += " text-color-dark";
             tdArr[i2].style.transform = "rotate(180deg)";
           }
         }
       }
     }
  }
}

window.onload = initiation;

console.log("[main.js]# end reading script");
