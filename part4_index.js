// 配列への要素の追加・削除
const fruits = ["りんご", "みかん"];
fruits.push("パイナップル", "バナナ");  // 末尾に追加
console.log(fruits);

fruits.unshift("いちご", "メロン");  // 先頭に追加
console.log(fruits);

fruits.pop();
console.log(fruits);  // 末尾の要素を削除（取り出す）

fruits.shift();
console.log(fruits);  // 先頭の要素を削除（取り出す）


// 要素の検索（インデックス番号を検索）
console.log(fruits.indexOf("りんご"));
console.log(fruits.indexOf("柿"));  // 存在しない要素は -1 で返却される

// 要素の検索（存在するか検索）
console.log(fruits.includes("りんご"));
console.log(fruits.includes("柿"));


// 配列が要素の場合の検索
const products = [
  {id: 1, name: "りんご"},
  {id: 2, name: "みかん"},
  {id: 3, name: "パイナップル"},
];
const product1 = products.find((product) => product.id === 1);
console.log(product1);
const product2 = products.find((product) => product.id === 4);  // 存在しない id　を検索
console.log(product2);  // -> undefined

// スプレッド構文による複製（配列）
const cloneProducts = [...products];
console.log(cloneProducts);

// 配列の繰り返し（forEachメソッド）
cloneProducts.forEach((product, index) => {
  console.log(index);
  console.log(product);
});

// joinメソッド
console.log(fruits.join(","));

// everyメソッド
const numbers = [1, 2, 3, 4];
console.log(numbers.every((num) => num > 0));  // すべての要素が ０より大きいかを判定 -> true
console.log(numbers.every((num) => num > 1));  // すべての要素が 1より大きいかを判定 -> false 

//someメソッド
console.log(numbers.some((num) => num > 3));  // ３より大きい要素があるかを判定 -> true
console.log(numbers.some((num) => num > 5));  // 5より大きい要素があるかを判定 -> false

// filterメソッド
console.log(numbers.filter((num) => num >= 3));  // 3以上の要素を抽出して返す -> [3, 4]

// mapメソッド
console.log(numbers.map((num) => num * 3));  // 特定の処理を行った結果を配列に格納して返す -> [3, 6, 9, 12]


// エラーハンドリング
const splitString = (str) => {
  return str.split(",");
};
console.log(splitString("a,b,c"));
// console.log(splitString(1));  // uncaught TypeError

// try-catch文
// try {
//   console.log(splitString(1));  // uncaught TypeError
// } catch(e) {
//   alert(e);  // ブラウザにポップアップを表示する -> 'str.split is not a function'
// };

// エラーを明示する
const splitString2 = (arr) => {
  if (typeof arr !== 'string') {
    throw new Error('value is not a string.');
  }
  return arr.join(",");
};
try {
  console.log(splitString(1));  // uncaught TypeError
} catch(e) {
  alert(e);  // ブラウザにポップアップを表示する -> 'value is not a string.'
};
