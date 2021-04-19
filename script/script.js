$(function(){

    $("div#topBtnArea").click(function(){
        $(window).scrollTop(0);
    });

    $(window).scroll(function(){
        //화면전체가 스크롤 되는것은 window를 선택자로 지정함
//        alert($(this).scrollTop() + "px");
         $(this).scrollTop();
        if ($(this).scrollTop()>500) {
            $("div#topBtnArea").fadeIn(200);
        }else{
             $("div#topBtnArea").fadeOut(200);
        }

    });

});
