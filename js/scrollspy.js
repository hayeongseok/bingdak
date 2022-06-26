$(function(){

    var link = $('#nav div.dot');
    link.on('click',function(e){
        
        //href 속성을 통해, section id 타겟을 잡음
        var target = $($(this).attr('href')); 
        
        //target section의 좌표를 통해 꼭대기로 이동
        $('html, body').animate({
            scrollTop: target.offset().top
        },600);
        
        //active 클래스 부여
        $(this).addClass('active');

        //앵커를 통해 이동할때, URL에 #id가 붙지 않도록 함.
        e.preventDefault();
    });

    $(window).on('scroll',function(){
        findPosition();
    });
    
    function findPosition(){
        $('section').each(function(){
            if( ($(this).offset().top - $(window).scrollTop() ) < 20){
                link.removeClass('active');
                $('#nav').find('[data-scroll="'+ $(this).attr('id') +'"]').addClass('active');
            }
        });
    }
    
    findPosition();


    
});


$(function() {
    $(window).scroll(function(){
        if($(this).scrollTop() > 200) {
            $('#top_btn_img').fadein();
        } else {
            $ ('#top_btn_img').fadeOut;
        }
    });
    $('#top_btn_img').click(function(){
    $('html, body').animate({scrollTop : 0}, 300);
    return false; });
});



