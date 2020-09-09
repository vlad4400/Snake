console.log("[grocery-store.js]# start reading script");

window.onload = initiation;

function initiation() {
  /*START MAIN PART*/

  /*create html list goods in catalog*/
  var listGoods = Goods.getListGoods();

  for (var good of listGoods) {
    var img = document.createElement("img");
    img.className = "listgoods-item-img";
    img.width = "150";
    img.height = "150";
    img.src = `img/${good.nameGood}.jpg`;
    img.alt = "#";

    var price = document.createElement("div");
    price.className = "listgoods-item-price";

    var btn = document.createElement("button");
    btn.className = "listgoods-item-btn";
    btn.innerText = "Buy";
    btn.name = good.nameGood;
    btn.onclick = addGoodToBasket;

    var item = document.createElement("div");
    item.className = "listgoods-item";
    item.appendChild(img);
    item.appendChild(price);
    item.appendChild(btn);

    document.getElementById("list-goods").appendChild(item);
  }
  
  /*create html listgood in basket*/
  var basket = new Basket();

  function addGoodToBasket() {
    basket.push(this.name);

    var name = document.createElement("div");
    name.innerText = this.name;

    var price = document.createElement("div");
    price.innerText = basket.getPriceGood(this.name);

    document.getElementById("basket-list").appendChild(name);
    document.getElementById("basket-list").appendChild(price);

    document.getElementById("basket-sum-price").innerText = `The price all goods: ${basket.countBasketPrice()}`;
  }

  function removeGoodFromBasket() {

  }

  /*END MAIN PART*/
}

class Goods {

  static #listGoods = [
    {nameGood: "yogurt", price: 249}, //real price 2.49
    {nameGood: "socks", price: 499},
    {nameGood: "milk", price: 216},
    {nameGood: "sugar", price: 199},
    {nameGood: "soap", price: 229},
    {nameGood: "cheese", price: 1699}
  ]

  static getPrice(nameGood) {
    for (var good of this.#listGoods) {
      if (good.nameGood == nameGood) {
        return good.price;
      }
    }
  }

  static inListGoods(nameGood) {
    for (var good of this.#listGoods) {
      if (good.nameGood == nameGood)
        return true;
    }
    return false;
  }

  static getListGoods() {
    return this.#listGoods;
  }
}

class Basket {

  #goods = [];

  #updateGoods() {
    var temp = [];
    for (var good of this.#goods) {
      if (good != undefined) {
         temp.push(good);
      }
    }
    this.#goods = temp;
  }

  push(nameGood) {
    if (Goods.inListGoods(nameGood)) {
      this.#goods.push(nameGood);
      return true;
    }
    return false;
  }

  pop(nameGood) {
    if (delete(this.#goods[this.#goods.indexOf(nameGood)])) {
      this.#updateGoods();
      return true;
    } else {
      return false;
    }
  }

  getPriceGood(good) {
    return Goods.getPrice(good)/100; // 249 -> 2.49 (2.49 - real price)
  }

  countBasketPrice() {
    var sum = 0;
    for (var good of this.#goods) {
      sum += Goods.getPrice(good);
    }
    return sum/100; // 249 -> 2.49 (2.49 - real price)
  }
}



console.log("[grocery-store.js]# end reading script");
