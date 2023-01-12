$('.app-btn').on({click:function(){
  $('.bar').toggleClass('add');
  // 있으면 없고 없으면 있게하는것 toggle
  $('.mobile-nav').stop().slideToggle(500);
  // 높이가 있어야 자연스럽게 내려온다
  // stop()은 중간에 내가 멈추려면 멈추게 하는것
}});
//$('.app-btn').click(function(){}); 둘이 같은것인데 하나만 쓸 때 작성법


//$('#silck_banner') 배경색 바꾸는거 여쭤보기

//  let slider = $('.bxslider').bxSlider({
//      auto: true,
//      mode:'horizontal',
//      onSlideAfter: function(){
//       slider.stopAuto();
//       slider.startAuto();
//      }
//    });

//swiper demos 사용한 곳
$('.swiper').on('mouseover', function(){
swiper.autoplay.stop();
});
$('.swiper').on('mouseout', function(){
swiper.autoplay.start();
});

 var swiper = new Swiper(".second", {
  autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
  slidesPerView: 4,
  spaceBetween: 20,
  slidesPerGroup: 4,
  loop: true,
  loopFillGroupWithBlank: true,
  
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
      // when window width is >= 640px
      480:{
          slidesPerView: 1,
          slidesPerGroup: 1,
          spaceBetween: 20,
      },
      560:{
      slidesPerView: 2,
      slidesPerGroup: 2,
        spaceBetween: 20,
      },
      846: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 20,
      },
      1200: {
          slidesPerView: 4,
          slidesPerGroup:4,
          spaceBetween: 20,
        }
  }
});

var swiper = new Swiper(".mobile", {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
      // when window width is >= 720px
      480: {
        slidesPerView: 1,
        spaceBetween: 20,
    
      },
      // when window width is >= 640px
      720: {
        slidesPerView: 2,
        spaceBetween: 40,
   
      }
  }
});


$(function(){
  let btnSlide=$('.slideUl>li'); //제발 클라스나 아이디는 .이나 # 찍어라 쫌
  let pagerBtn=$('.pagerBtn>li');
  let leftBtn=$('.prev');
  let rightBtn=$('.next');
  let current=0;
  let btnSlideInterval;

  autoSlide()
  function autoSlide(){
      btnSlideInterval=setInterval(function(){
      let prev=btnSlide.eq(current);
      let prevBtn=pagerBtn.eq(current);
      
      move(prev, 0 , '-100%');
      prevBtn.removeClass('on')
      current++;
      if(current==btnSlide.size()){
          current=0;
      }

      let next=btnSlide.eq(current);
      let nextBtn=pagerBtn.eq(current);
      move(next, '100%' , 0);
      nextBtn.addClass('on')
      },3000);
  }
  function move(tg, start , end){
      tg.css('left',start).stop().animate({left:end},800)
  }

  //멈춤
  $('.slide').hover(function(){
      clearInterval(btnSlideInterval)
  },function(){
      autoSlide();
  });

  //오른쪽 버튼
  rightBtn.click(function(){
      let prev=btnSlide.eq(current);
      let prevBtn=pagerBtn.eq(current);
      
      move(prev, 0 , '-100%');
      prevBtn.removeClass('on')
      current++;
      if(current==btnSlide.size()){
          current=0;
      }

      let next=btnSlide.eq(current);
      let nextBtn=pagerBtn.eq(current);
      move(next, '100%' , 0);
      nextBtn.addClass('on')
      });

  //왼쪽 버튼
  leftBtn.click(function(){
      let prev=btnSlide.eq(current);
      let prevBtn=pagerBtn.eq(current);
      
      move(prev, 0 , '100%');
      prevBtn.removeClass('on')
      current--;
      if(current==-btnSlide.size()){
          current=0;
      }

      let next=btnSlide.eq(current);
      let nextBtn=pagerBtn.eq(current);
      move(next, '-100%' , 0);
      nextBtn.addClass('on')
      });

      function move1(i){
          if(current==i)return;//현재 보이는 이미지가 내가 클릭한것과 같으면 종료
          let currentEl=btnSlide.eq(current);
          let nextEl=btnSlide.eq(i);
          currentEl.css('left','0').stop().animate({left:'-100%'},500);
          nextEl.css('left','100%').stop().animate({left:'0'},500);
          current=i;
      }
      function move2(i){
          if(current==i)return;//현재 보이는 이미지가 내가 클릭한것과 같으면 종료
          let currentEl=btnSlide.eq(current);
          let nextEl=btnSlide.eq(i);
          currentEl.css('left','0').stop().animate({left:'100%'},500);
          nextEl.css('left','-100%',).stop().animate({left:'0'},500);
          current=i;
      }
      pagerBtn.click(function(){
          let tg=$(this);
          let i=tg.index();
          pagerBtn.removeClass('on');
          tg.addClass('on');

          //버튼 눌렀을시 왼쪽과 오른쪽 방향으로 나올수 있게끔 만들어줌
          if(current>i){
              move2(i)
          }else{
              move1(i)
          }
      });
});

