'use strict'
// 1行目に記載している 'use strict' は削除しないでください
// ランチ候補データをカテゴリごとに定義
const menu = {
  主菜: ["ハンバーグ", "鶏のから揚げ", "鯖の塩焼き","ステーキ"],
  副菜: ["チジミ", "レンコンきんぴら", "ほうれん草のお浸し", "バナナムース","ごぼうサラダ"],
  定番: ["カレーライス", "かけそば", "ライス", "稲荷寿司","かつ丼","ラーメン"]
};

// 配列からランダムに1つ選ぶ関数
function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)];
}

// 配列からランダムに複数選ぶ関数
function getRandomItems(array, count) {
  const shuffled = array.slice().sort(() => 0.5 - Math.random()); //元の配列をコピー .sort(() =>0.5 - Math.random() によって、正負の値がランダムに出る
  return shuffled.slice(0, count); // シャッフルされた配列の先頭から count 個だけ取り出す。
}

// 結果を表示する関数（選ばれた料理をresult-boxに表示）
function displayResult(text) {
  document.querySelector(".result-box").innerHTML = text;
}

// 「ちょっとお腹すいた」ボタンの処理
// 「ちょっとお腹すいた」ボタンの処理
document.querySelectorAll(".level-btn")[0].addEventListener("click", () => {
  const main = getRandomItem(menu["主菜"]);
  const sides = getRandomItems(menu["副菜"], 2);
  const result = `主菜：${main}<br>副菜：${sides.join("、")}`;
  displayResult(result);
});

// 「しっかりお腹すいた」ボタンの処理
document.querySelectorAll(".level-btn")[1].addEventListener("click", () => {
  const main = getRandomItem(menu["主菜"]);
  const sides = getRandomItems(menu["副菜"], 2);
  const standards = getRandomItems(menu["定番"], 1);
  const result = `主菜：${main}<br>副菜：${sides.join("、")}<br>定番：${standards.join("、")}`;
  displayResult(result);
});

// 「お腹がすいて倒れそう」ボタンの処理
document.querySelectorAll(".level-btn")[2].addEventListener("click", () => {
  const mains = getRandomItems(menu["主菜"], 2);
  const sides = getRandomItems(menu["副菜"], 2);
  const standards = getRandomItems(menu["定番"], 2);
  const result = `主菜：${mains.join("、")}<br>副菜：${sides.join("、")}<br>定番：${standards.join("、")}`;
  displayResult(result);
});

 // リセットボタンのクリックイベントを設定
document.querySelector(".reset-btn").addEventListener("click", () => {
  document.querySelector(".result-box").textContent = "";  // result-boxの中身を空にする
});
