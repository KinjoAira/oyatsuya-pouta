$(function () {

//スライドショー
$('.bxslider').bxSlider({
  auto: true,
  mode: 'fade',
  pause: 4000,
  speed: 3000,
  pager: false,
  controls: false,
});



//マウスを乗せたら発動
$('.click-bigger a').hover(function () {

  //マウスを乗せたら色が変わる
  $(this).css('color', '#652301');
  $(this).css('background', 'transparent');
  $(this).css('font-weight', 'bold');



  //ここにはマウスを離したときの動作を記述
}, function () {

  //色指定を空欄にすれば元の色に戻る
  $(this).css('color', '');
  $(this).css('background', '');
  $(this).css('font-weight', '');
});

});



