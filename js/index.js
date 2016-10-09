$(function(){
    var hnzWheel = new Swiper('.hnz-swiper-container',{
        // pagination: '.pagination',
        loop:true,
        // grabCursor: true,
        // paginationClickable: true
    })
    $('.hnz-arrow-left').on('click', function(e){
        e.preventDefault()
        hnzWheel.swipePrev()
    })
    $('.hnz-arrow-right').on('click', function(e){
        e.preventDefault()
        hnzWheel.swipeNext()
    })

    var $courseList = $('.course-list .course');
    $courseList.hover(function(){
        $courseList.removeClass('hot');
        $(this).addClsss('hot');
    },function(){
        $(this).removeClass('hot');
        $courseList.eq(1).addClass('hot');
    })

    // $('.team-swiper-container .swiper-slide:nth-child(4n)').css({marginRight:0})
    var teamWheel = new Swiper('.team-swiper-container',{
        loop:true,
        autoplay : 2000,
        slidesPerView:4,
        pagination: '.hnz-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction:true,
        // slidesPerGroup:4,
        cssWidthAndHeight:false
    })
})
