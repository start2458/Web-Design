$(function(){
  $(".nav>ul>li").mouseover(function(){
    $(".nav>ul>li>ul").stop().show();
  })
  $(".nav>ul>li").mouseleave(function(){
    $(".nav>ul>li>ul").stop().hide();
  })
});