// if文
let age = 15;

if (age >= 20) {
  console.log("大人です");
} else if (age >= 12 && age <= 15) {
  console.log("中学生です")
} else {
  console.log("子供です");
};

// switch文
switch (age) {
  case 20:
    console.log("成人おめでとうございます！");
    break;
  case 12:
  case 15:
  case 18:
    console.log("卒業おめでとうございます！");
    break;
  default:
    console.log(`${age}歳です`)
}

// for文
for (let i = 0; i < 5; i++) {
  console.log("こんにちは");
}

// while文
let i = 0;
while (i < 5) {
  console.log("こんばんは");
  i++
}

// for-in文 -> オブジェクトの全てのプロパティにて処理を行いたい場合に使用
let product = {
  name: "りんご",
  price: 100,
};
for (let key in product) {
  console.log(key);
  console.log(product[key]);
};

// for-of文　　-> 配列の全ての要素にて処理を行いたい場合に使用
let fruits =["りんご", "みかん", "パイナップル"];
for (let fruit of fruits) {
  console.log(fruit);
};