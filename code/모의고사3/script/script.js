$(function(){
  $(".nav>ul>li").mouseover(function(){
    $(".nav>ul>li>ul").stop().slideDown(200);
  });
  $(".nav>ul>li").mouseleave(function(){
    $(".nav>ul>li>ul").stop().slideUp(200);
  });

  let currentIndex = 0;

  setInterval(function(){
    if(currentIndex < 2){
      currentIndex++;
    } else{
      currentIndex = 0;
    }
    let slidePosition = currentIndex * (-1200)+"px";
    $(".slideList").animate({left:slidePosition}, 400);
  }, 3000);

  $(".layerpopup").click(function(){
    $(".layer").show();
    $(".layer_bg").show();
  });
  $(".close").click(function(){
    $(".layer").hide();
    $(".layer_bg").hide();
  });
});