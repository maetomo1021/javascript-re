const btn = document.querySelector("button")

// 様々な↓　DOM　のaddeventlistener の使いかた
/* document.addEventListener("on-click", test()) */
/* document.addEventListener("mousedown", test2()) */
document.addEventListener("DOMContentLoaded", test1())
/* document.querySelector("button").addEventListener(focus, alert("クリックされてます")) */

let button = document.getElementById("click1");
button.addEventListener("click", hello());




function test() {
  alert("lsah;lhlaflgias;oi")
}
function test1() {
  alert("ちゃんと読み込まれましたよ")
}
function test2() {
  alert("マウスボタンを押している時")
}
function hello() {
  alert("こんにちは")
}

