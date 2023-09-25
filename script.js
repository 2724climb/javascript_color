// JavaScript
//console.log(document.getElementById('myColor').value);

//定数の宣言
const color = document.getElementById('myColor');
const text = document.getElementById('bodyText');

text.textContent = color.value;

function changeColor(){
    // カラーコードを表示
      text.textContent = color.value;
    }
// カラーピッカーで色が選択されたら、changeColorを動作させる
color.addEventListener('input', changeColor);
