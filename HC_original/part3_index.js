// オブジェクトのメソッドの定義
const product = {
  name: "りんご",
  price: 100,
  // オブジェクトのメソッドの定義
  sayDescription: () => {
    console.log("とっても甘いです");
  },
};
product.sayDescription()  // -> とっても甘いです


// コンストラクター（クラスのこと）
class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
  // メソッド
  sayInfo() {
    console.log(`${this.name}の値段は${this.price}です`)
  }
  // static method
  static sayFuncDetail() {
    console.log("Productのオブジェクトを作るコンストラクターです");
  }
}

// オブジェクトの生成
const p1 = new Product("りんご", 100);
const p2 = new Product("みかん", 150);
const p3 = new Product("パイナップル", 200);
p1.sayInfo();
p2.sayInfo();
p3.sayInfo();
Product.sayFuncDetail();  // static methodの呼び出し

// オブジェクト型は const を使っていても、プロパティの変更が可能！
product.stock = 5;  // プロパティの追加
console.log(product);
delete product.stock;  // プロパティの削除
console.log(product);

const product1 = {
  name: "りんご",
  price: 100,
};
let product2 = product1;
// product1.name = "みかん";
// console.log(product1);  // -> {name: 'みかん', price: 100}
// console.log(product2);  // -> {name: 'みかん', price: 100}

// スプレッド構文
const product3 = { ...product1 };
product1.name = "みかん";  // プロパティを変更
console.log(product1);  // -> {name: 'みかん', price: 100}
console.log(product2);  // -> {name: 'みかん', price: 100}
console.log(product3);  // -> {name: 'りんご', price: 100}


// Mathオブジェクト
console.log(Math.random());
console.log(Math.random());

console.log(Math.round(1.6));  // 四捨五入
console.log(Math.ceil(1.6));  // 切り上げ
console.log(Math.floor(1.6));  // 切り捨て

console.log(Math.max(1, 2, 3));
console.log(Math.min(1, 2, 3));


// Stringオブジェクト
const message = "こんにちは";
// const message = new String("こんにちは");

console.log(message.length);
console.log(message[1]);
console.log(message.includes("こん"));
console.log(message.indexOf("ち"));
console.log(message.replace("ん", "に"));
console.log("a,b,c,d".split(","));


// Dateオブジェクト
const now = new Date();
console.log(now);

const date1 = new Date("2000-04-03");
console.log(date1);

const date2 = new Date(2007, 10, 9);  // 月は ０はじまり（０　=　1月）
console.log(date2);
console.log(date2.getFullYear());  // 年
console.log(date2.getMonth());  //　月（０はじまり）
console.log(date2.getDate());  // 日
console.log(date2.getDay());  // 曜日（０はじまり、0: sun）
