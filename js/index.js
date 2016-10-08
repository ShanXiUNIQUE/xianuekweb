$(function(){
    var mySwiper = new Swiper('.hnz-swiper-container',{
        // pagination: '.pagination',
        loop:true,
        // grabCursor: true,
        // paginationClickable: true
    })
    $('.hnz-arrow-left').on('click', function(e){
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $('.hnz-arrow-right').on('click', function(e){
        e.preventDefault()
        mySwiper.swipeNext()
    })

    var $courseList = $('.course-list .course');
    $courseList.hover(function(){
        $courseList.removeClass('hot');
        $(this).addClsss('hot');
    },function(){
        $(this).removeClass('hot');
        $courseList.eq(1).addClass('hot');
    })
})
