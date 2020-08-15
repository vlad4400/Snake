console.log("start: task-2-3");
console.log("");

class Goods {

  static listGoods = [
    {nameGood: "yogurt", price: 249}, //real price 2.49
    {nameGood: "socks", price: 499},
    {nameGood: "milk", price: 216},
    {nameGood: "sugar", price: 199},
    {nameGood: "soap", price: 229},
    {nameGood: "cheese", price: 1699}
  ]

  static getPrice(nameGood) {
    for (var good of this.listGoods) {
      if (good.nameGood == nameGood) {
        return good.price;
      }
    }
  }

  static inListGoods(nameGood) {
    for (var good of this.listGoods) {
      if (good.nameGood == nameGood)
        return true;
    }
    return false;
  }
}

class Basket {

  goods = [];

  push(nameGood) {
    if (Goods.inListGoods(nameGood)) {
      this.goods.push(nameGood);
      return true;
    }
    return false;
  }

  pop(){}

  countBasketPrice() {
    var sum = 0;
    for (var good of this.goods) {
      sum += Goods.getPrice(good);
    }
    return sum/100; // 249 -> 2.49 (2.49 - real price)
  }
}

/*START MAIN PART*/
var backet = new Basket();

backet.push("milk");
backet.push("soap");
backet.push("cheese");
backet.push("milk");

console.log("Price: " + backet.countBasketPrice() + " PLN");
/*END MAIN PART*/

console.log("");
console.log("end: task-2-3");
