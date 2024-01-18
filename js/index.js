$(document).ready(function () {
  var $slider = $(".slider");
  var $progressBar = $(".progress");
  var $progressBarLabel = $(".slider__label");

  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var calc = (nextSlide / (slick.slideCount - 1)) * 100;

    $progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);

    $progressBarLabel.text(calc + "% completed");
  });

  $slider.slick({
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 400,
  });
});

$(document).ready(function () {
  // 배경 이미지를 생성하여 index 요소에 추가합니다.
  const $indexElement = $(".index");

  const $backgroundElement = $(".index-background");

  $indexElement.append($backgroundElement);
});



$(document).ready(function (){
  var typingBool = false; 
  var typingIdx=0; 
  var liIndex = 0;
  var liLength = $(".typing-txt>ul>li").length;
  var typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
  
  typingTxt=typingTxt.split("");
  
  if(typingBool==false){  
      typingBool=true; 
      var tyInt = setInterval(typing,100); //
  } 

  function typing(){ 
    $(".typing ul li").removeClass("on");
    $(".typing ul li").eq(liIndex).addClass("on");
    
    if(typingIdx<typingTxt.length){ 
      $(".typing ul li").eq(liIndex).append(typingTxt[typingIdx]); 
      typingIdx++; 
    } else{ 
      if(liIndex<liLength-1){
        liIndex++; 
        typingIdx=0;
        typingBool = false; 
        typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
          clearInterval(tyInt);
          setTimeout(function(){
          tyInt = setInterval(typing,100);
          },300);
          } else if(liIndex==liLength-1){
            
            clearInterval(tyInt);
            
            setTimeout(function(){
            typingBool = false; 
            liIndex=0;
            typingIdx=-0;
            typingTxt = $(".typing-txt>ul>li").eq(liIndex).text(); 
            $(".typing ul li").html("")
              tyInt = setInterval(typing,100);
            }, 1000);
            
            
          }
      } 
  }  
});
