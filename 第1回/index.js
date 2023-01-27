const btn = document.querySelectorAll("button");

// 様々な↓　DOM　のaddeventlistener の使いかた
/* document.addEventListener("on-click", test()) */
/* document.addEventListener("mousedown", test2()) */
// document.addEventListener("DOMContentLoaded", test1())
/* document.querySelector("button").addEventListener(focus, alert("クリックされてます")) */

btn.forEach((element) => {
  element.addEventListener('click', hello);
});

document.querySelector('#atagu').addEventListener('click', function(e) {
  console.log(e.target.innerHTML);
  window.alert()
  e.preventDefault();
  location.href = 'https://google.com';
})

// (function() {
//   // window.val = 9999;
//   val = 9999;

// })()

// console.log(val);


// let button = document.getElementById('click1');
// // console.log(button, 7777)
// button.addEventListener("click",hello);

function test() {
  alert("lsah;lhlaflgias;oi")
}
function test1() {
  alert("ちゃんと読み込まれましたよ")
}
function test2() {
  alert("マウスボタンを押している時")
}
function hello(event) {
  console.log(event.target.innerHTML)
  alert()

}

