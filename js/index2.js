$(function(){
    // 就业成果选项卡
    var lx_tabsSwiper = new Swiper('.swiper-container',{
        onlyExternal : true,
        speed:500
    })
    $(".lx_gainMenu li").on('touchstart mousedown',function(e){
      e.preventDefault()
      $(".lx_gainMenu .lx_menuHot").removeClass('lx_menuHot')
      $(this).addClass('lx_menuHot')
      lx_tabsSwiper.swipeTo( $(this).index() )
    })
    $(".lx_gainMenu li").click(function(e){
      e.preventDefault()
    })

    //就业成果遮罩
    $(".lx_tabPho").hover(function(){
        $(this).find('.lx_tabMask').animate({left:0},'swing')
    },function(){
        $(this).find('.lx_tabMask').animate({left:'-100%'},'fast','swing')
    })
})