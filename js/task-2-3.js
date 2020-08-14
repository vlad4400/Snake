console.log("start: task-2-3");
console.log("");

class Goods {
  // list: name, price;
  static listGoods = {
    "yogurt": 249, //price 2.49
    "socks": 499,
    "milk": 216,
    "sugar": 199,
    "soap": 229,
    "cheese": 1699
  }

  static getPrice(name) {
    return this.listGoods[name];
  }
}

class Basket {
  goods = [];
  push(good) {
    if (good in Goods.listGoods) {
      this.goods.push(good);
      return true;
    }
    return false;
  }
  pop(){}
  countBasketPrice() {
    var sum = 0;
    for (var i = 0; i < this.goods.length; i++) {
      sum += Goods.getPrice(this.goods[i]);
    }
    return sum/100;  //249 -> 2.49
  }
}

var backet = new Basket();
backet.push("milk");
backet.push("soap");
backet.push("cheese");
backet.push("milk");
console.log("Price: " + backet.countBasketPrice() + " PLN");

console.log("");
console.log("end: task-2-3");
