

let test = document.querySelector("h1")
console.log(test)





// // innerHTMLの使いかた
// element.innerHTML = 'value';


// let element = document.querySelector("p");
// ↑　ここで使う要素の指定（書き方は覚える）

// element.innerHTML = "my name is tanaka";
// element.innerHTML = "value";
// ↑Value の部分に<h2></h2>も追加可能

/* 以下追加する場合　➡　<script>
let element = document.querySelector("h2")
element.innerHTML = "value"
</script> */

let ul = document.querySelector('ul');

let firstList = document.createElement('li');
firstList.append('項目0');
ul.prepend(firstList); // <ul>の先頭にfirstListを追加

let lastList = document.createElement('li');
lastList.append('項目4');
ul.append(lastList); // <ul>の末尾にlastListを追加

