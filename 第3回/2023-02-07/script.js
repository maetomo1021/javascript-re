
// $は特別なオブジェクトになる
// Jqueryでは特別
$(() => {
  console.log($);

  //DOM が読み込まれたら実行されるという意味を持つ
  //Window.addEventlistener()と同じ
  //;DOMが読み込まれたらのDOMContentsLoadedと同じ

  const sample1 = $('.sample1');
  //document.querySelector('sample1')と同じ
  sample1.css({ color: 'red' })

  const sample2 = $('#sample2')
  sample2.css({ color: 'blue', borderTop: 'solid 2px yellow' })
  sample2.css({ color: 'blue', borderBottom: 'solid 2px green' })
  sample2.animate({
    top: '100px', left: '50px'
  }, 3000, 'swing', () => console.log("終了"))

  // sample2.css({ borderTop: 'solid 2px green' })

  sample1.click(event => {
    console.log("clicked!")
    sample2.show();
  });

  sample1.hover(event => {
    console.log("hovered!")
  });

  sample2.click(event => {
    console.log("clicked!")
    // sample1.toggle();
  });





  // $('cssセレクター')で要素が取得できる
  // $('hoge') ;クラスでの取得が可能
  // $('#hoge');IDでの取得が可能

  $('.hoge').click(event => {
    //($)thisでおベントが起こった要素が取得できる
    const clickedElement = $(this);
    //addEventlistenet と同じ

    // (＜Jqueryで使える様々な要素取得の＞)
    //show 要素の表示
    //hide 要素の非表示
    //toggle 要素の表示、非表示
    //animate アニメーション

  });
})
