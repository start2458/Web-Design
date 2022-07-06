$(function(){
  $(".nav>ul>li").mouseover(function(){
    $(".submenu").stop().slideDown(200);
  })
  $(".nav>ul>li").mouseleave(function(){
    $(".submenu").stop().slideUp(200);
  })
});
$(function(){
  let tabBtn = $(".tab_btn>li");
  let tabCont = $(".tab_cont>div");

  tabCont.hide.eq(0).show();

  tabBtn.click(function(e){
    e.preventDefault();
    
    let target = $(this);
    let index = 1;
  });
});