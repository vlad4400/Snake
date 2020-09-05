console.log("[main.js]# start reading script");

function initiation() {
  creatChessBoard();
}

function creatChessBoard() {
  console.log("[main.js]# start executing func 'creatChessBoard'");
  var table = document.createElement("table");
  var body = document.querySelector("body");
  var tbody = document.createElement("tbody");
  var tr = document.createElement("tr");
  var td = document.createElement("td");
  body.appendChild(table);
  table.appendChild(tbody);
  for (var i = 0; i < 8; i++) {
    tbody.appendChild(tr.cloneNode());
  }
  var tbodyArr = tbody.getElementsByTagName("tr");
  for (var i = 0; i < 8; i++) {
    for (var i2 = 0; i2 < 8; i2++) {
      tbodyArr[i].appendChild(td.cloneNode());
    }
  }
  var trArr;
  for (var i = 0; i < 8; i++) {
    trArr = tbodyArr[i].childNodes;
    for (var i2 = 0; i2 < 8; i2++) {
      if (i % 2) {
        if (i2 % 2) {
          trArr[i2].className = "color-light";
        } else {
          trArr[i2].className = "color-dark";
        }
      } else {
        if (i2 % 2) {
          trArr[i2].className = "color-dark";
        } else {
          trArr[i2].className = "color-light";
        }
      }
    }
  }
  console.log("[main.js]# end executing func 'creatChessBoard'");
}

window.onload = initiation;

console.log("[main.js]# end reading script");
