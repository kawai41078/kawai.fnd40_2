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
  document.querySelector(".result-box").textContent = text;
}

// 「ちょっとお腹すいた」ボタンの処理
document.querySelectorAll(".level-btn")[0].addEventListener("click", () => {//.level-btn というクラスを持つボタンをすべて取得し、その中の 最初のボタン（インデックス0） に対してクリックイベントを設定
  const main = getRandomItem(menu["主菜"]); // 主菜から1つ選ぶ
  const sides = getRandomItems(menu["副菜"], 2); // 副菜から2つ選ぶ
  const result = `主菜：${main}、副菜：${sides}`; // 表示用テキストを作成
  displayResult(result); // 結果を表示
});

// 「しっかりお腹すいた」ボタンの処理
document.querySelectorAll(".level-btn")[1].addEventListener("click", () => {
  const main = getRandomItem(menu["主菜"]); // 主菜から1つ選ぶ
  const sides = getRandomItems(menu["副菜"], 2); // 副菜から2つ選ぶ
  const standards = getRandomItems(menu["定番"], 2); // 定番から2つ選ぶ
  const result = `主菜：${main}、副菜：${sides}、定番：${standards}`; // 表示用テキストを作成
  displayResult(result); // 結果を表示
});

// 「お腹がすいて倒れそう」ボタンの処理
document.querySelectorAll(".level-btn")[2].addEventListener("click", () => {
  const mains = getRandomItems(menu["主菜"], 2); // 主菜から2つ選ぶ
  const sides = getRandomItems(menu["副菜"], 2); // 副菜から2つ選ぶ
  const standards = getRandomItems(menu["定番"], 3); // 定番から3つ選ぶ
  const result = `主菜：${mains}、副菜：${sides}、定番：${standards}`; // 表示用テキストを作成
  displayResult(result); // 結果を表示
 });

 // リセットボタンのクリックイベントを設定
document.querySelector(".reset-btn").addEventListener("click", () => {
  document.querySelector(".result-box").textContent = "";  // result-boxの中身を空にする
});
