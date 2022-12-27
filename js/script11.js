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
        },2000);
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