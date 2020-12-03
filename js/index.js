charset = 'UTF-8';
$(function () {
  theaMsForm($('.sign-in'));
  
  // 单选
  function radio(btn, classname) {
    $(btn).each(function () {
      $(this).click(function () {
        $(this).addClass(classname).siblings().removeClass(classname);
      });
    });
  }
  radio('.authority .select span', 'on');
  // 评测
  $('.authority .btn').click(function () {
    console.log(111)
    var text = '';
    $('.authority .select .on').each(function () {
        text += $(this).text() + '、'
    });
    $('#select').val(text);
  });

  // 回到顶部
  $('.black-to-top').click(function () {
    $('body,html').animate({
      scrollTop: 0
    });
  });
});
