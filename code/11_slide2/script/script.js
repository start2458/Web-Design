$(function(){
  let currentIndex = 0;
  let slideCnt = $(".slideImg").length;
  
  setInterval(function() {
    if(currentIndex < slideCnt-1){
      currentIndex++;
    }else{
      currentIndex = 0;
    }

    let slidePosition = currentIndex * (-1200)+"px";
    $(".slideList").animate({left:slidePosition},400)
  },3000);
});