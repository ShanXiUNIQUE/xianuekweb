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

    //师资团队
    var teamWheel = new Swiper('.team-swiper-container',{
        loop:true,
        autoplay : 2000,
        slidesPerView:4,
        pagination: '.hnz-pagination',
        paginationClickable: true,
        autoplayDisableOnInteraction:true,
        cssWidthAndHeight:false
    })

    var tabsSwiper = new Swiper('.swiper-container',{
    onlyExternal : true,
    speed:500
  })
  $(".tabs div").on('touchstart mousedown',function(e){
    e.preventDefault()
    $(".tabs .active").removeClass('active')
    $(this).addClass('active')
    tabsSwiper.swipeTo( $(this).index() )
  })

  new Swiper('.production-list .swiper-container',{
        ploop:true,
        autoplay : 2000,
        slidesPerView:4,
        // pagination: '.pagination',
        // paginationClickable: true,
        autoplayDisableOnInteraction:true,
        cssWidthAndHeight:false
  })

  var divs = $('.job-list div');
  var jobMask = $('.job-mask');
  var iw = divs.width();
  divs.hover(function(){
      var i = $(this).index();
      divs.css({color:"#555"})
      var that = this;
      jobMask.animate({left:i*iw},200,function(){
           $(that).css({color:"#fff"})
      })
  })
})
