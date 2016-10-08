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
})
