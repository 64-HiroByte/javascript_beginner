console.log("Hello world!");

// 変数
let nickname = "tarou";
console.log(nickname);

nickname = "sample";
console.log(nickname);

// 定数
const firstName = "jirou";
console.log(firstName);
// firstName = "saburou";  // 定数を上書きしようとすると TypeError になる

// 型について
// プリミティブ型
let fruit = "apple";  // 文字型

let age = 20;   // 数値型（整数）
let circle_ratio = 3.14;   // 数値型（小数）

let isActive = true;  // 論理型（is~ の変数名が一般的）

let color;  // undefined（未定義であることを示す）

let box = null;  // null（値が存在しない）

// 型の確認は typeof を使う
console.log(typeof fruit);  // -> string

// オブジェクト型
let product = {
    name: "りんご",
    price: 200,
};
console.log(product);

// キーの指定とオーバーライド１ （ドットでつなげる）　-> 基本的にはこの記述方法
product.name = "みかん";
console.log(product.name);

// キーの指定とオーバーライド２ （[]でつなげる）　->　キーを動的に変更する場合に使用する
product["price"] = 300;  // キーをクォートで囲む！
console.log(product["price"])


// 配列
let fruits = ["りんご", "みかん"];
console.log(fruits);

// インデックス番号を指定してオーバーライド
fruits[0] = "バナナ";
console.log(fruits[0])

//要素の追加
fruits[2] = "パイナップル";
console.log(fruits);

// 配列の要素数の取得
console.log(fruits.length);


// 関数
// 関数の定義1
// const outputProductInfo = () => {
//     console.log("こんにちは");
//     console.log("みかんの値段は100円です");
// };
// 関数の定義２（引数あり）
const outputProductInfo = (productName, productPrice) => {
    console.log("こんにちは");
    console.log(`${productName}の値段は、${productPrice}円です`);  // テンプレートリテラルの使用
};
// 関数の呼び出し
outputProductInfo("みかん", 100);
outputProductInfo("りんご", 150);
outputProductInfo("パイナップル", 200);

// 値の返却（return）
const add = (a, b) => {
    return a + b;
}
console.log(add(1, 2));


// 算術演算子
let x = 10;
let y = 3;
console.log(x + y);  // 加算
console.log(x - y);  // 減算

console.log(x * y);  // 乗算
console.log(x / y);  // 除算

console.log(x % y);  // 剰余

console.log(x ** 2);  // 累乗

// ++ は変数に１を加えるが、変数の前と後ろで加算のタイミングが異なる
console.log(++x);  // -> 10+1=11
console.log(x);  // -> 11
console.log(x++);  // -> 11
console.log(x);  // -> 11+1=12

// --は逆に１を差し引く。
console.log(--x);  // -> 12-1=11
console.log(x);  // -> 11
console.log(x--);  // -> 11
console.log(x);  // -> 11-1=10


// 代入演算子
x += 5;
console.log(x);  // x=10, 10+5=15
x -= 5;
console.log(x); // x=15, 15-5=10
// これらと同様に *= /= もある


// 関係演算子
console.log(x > 5);
console.log(x > 20);

console.log(x >= 10);

console.log(x < 20);
console.log(x < 5);

console.log(x <= 10);

// === または !== は値と型が一致しているか判定 
console.log(x === 10);
console.log(x === 11);

console.log(x !== 10);
console.log(x !== 11);

// == または != は型を変換したうえで判定
console.log(1 === '1');  // false
console.log(1 == '1');  // true


// ３項演算子
let userAge = 25;
let userType = userAge > 20 ? "adult" : "child";  // 変数名　= 条件式 ? <trueの場合> : <falseの場合>
console.log(userType)  // adult


// 論理演算子(x = 10)
// and（左辺がfalseなら右辺は実行されない）
console.log(x > 5 && x < 20);
console.log(x > 15 && x < 20);
console.log(x > 5 && x < 9);

// or（左辺がtrueなら右辺は実行されない）
console.log(x > 5 || x < 9);
console.log(x > 16 || x < 20);
console.log(x >16 || x < 9);

// not
console.log(!(x > 16));  // true

// Truthy, Falsyな値については、trueとなった '値' を返却する
console.log(true && "a");  // a
console.log(false && "a");  // false
console.log(true || 1);  // true
console.log(false || 1);  // 1