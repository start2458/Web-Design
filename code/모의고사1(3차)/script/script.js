$(function(){
  $(".nav>ul>li").mouseover(function(){
    $(".nav>ul>li>ul").stop().slideDown(200);
  });
  $(".nav>ul>li").mouseleave(function(){
    $(".nav>ul>li>ul").stop().slideUp(200);
  });

  // slide
  let currentIndex = 0;
  setInterval(function(){
    if(currentIndex < 2){
      currentIndex++;
    }else{
      currentIndex = 0;
    }

    let slidePosition = currentIndex * (-300)+"px";
    $(".slideList").animate({top:slidePosition}, 400)
  }, 3000);

  // tabmenu
  let tabBtn = $(".tab_btn>ul>li");
  let tabCont = $(".tab_cont>div");
  tabCont.hide().eq(0).show();

  tabBtn.click(function(){
    let target = $(this);
    let index = target.index();

    tabBtn.removeClass("active");
    target.addClass("active");
    tabCont.css("display", "none");
    tabCont.eq(index).css("display", "block");
  });

  //layerpopup
  let layer = $(".layerpopup");
  layer.click(function(){
    $(".layer").stop().show();
    $(".layer_bg").stop().show();
  });
  let close = $(".close");
  close.click(function(){
    $(".layer").stop().hide();
    $(".layer_bg").stop().hide();
  });
});