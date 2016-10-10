$(function(){
    // 就业成果选项卡
    var lx_tabsSwiper = new Swiper('.lx_tabBox',{
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

    // it梦启航
    var lx_tabsSwiper1 = new Swiper('.lx_dreamTab',{
        onlyExternal : true,
        speed:500
    })
    $(".lx_dreamItem li").on('touchstart mousedown',function(e){
        e.preventDefault()
        $(".lx_dreamItem li").removeClass('lx_dreamHot')
        $(this).addClass('lx_dreamHot')
        lx_tabsSwiper1.swipeTo( $(this).index() )
    })
    $(".lx_dreamItem li").click(function(e){
        e.preventDefault()
    })


    // 媒体报道 获得奖项
    var lx_tabsSwiper2 = new Swiper('.lx_subject .lx_tabBox',{
        onlyExternal : true,
        speed:500
    })
    $(".lx_subject .lx_gainMenu li").on('touchstart mousedown',function(e){
        e.preventDefault()
        $(".lx_subject .lx_gainMenu .lx_menuHot").removeClass('lx_menuHot')
        $(this).addClass('lx_menuHot')
        lx_tabsSwiper2.swipeTo( $(this).index() )
    })
    $(".lx_subject .lx_gainMenu li").click(function(e){
        e.preventDefault()
    })
//    权威认证  教学环境
    var lx_tabsSwiper3 = new Swiper('.lx_accept .lx_tabBox',{
        onlyExternal : true,
        speed:500
    })
    $(".lx_accept .lx_gainMenu li").on('touchstart mousedown',function(e){
        e.preventDefault()
        $(".lx_accept .lx_gainMenu .lx_menuHot").removeClass('lx_menuHot')
        $(this).addClass('lx_menuHot')
        lx_tabsSwiper3.swipeTo( $(this).index() )
    })
    $(".lx_accept .lx_gainMenu li").click(function(e){
        e.preventDefault()
    })

//    辐射城市
    var  city=$(".lx_radiaCity");
    var  cityArr=[[193,174],[392,105],[456,222],[452,323],[407,377],[223,356],[160,262]];
    city.each(function(index,obj){
         $(obj).css({left:cityArr[index][0],top:cityArr[index][1]});
    })
 // 3d
    var mySwiper = new Swiper('.lx_soonLun',{
        loop:true,
        //其他设置
        tdFlow: {

            stretch :0,
            depth: 300,
            modifier : 2,
            shadows : true,
            slide:30,
            rotate:30,
        }

    });
    $('.lx_soonBtn .lx_btnL').on('click', function(e){
        e.preventDefault()
        mySwiper.swipePrev()
    })
    $('.lx_soonBtn .lx_btnR').on('click', function(e){
        e.preventDefault()
        mySwiper.swipeNext()
    })
    $(".lx_soonBox").hover(function(){
         $(this).find("a").animate({opacity:1}).delay(300);
         $(this).find('.lx_soonDes').animate({bottom:0,opacity:1},"fast");
    },function(){
        $(this).find('a').animate({opacity:0});
        $(this).find('.lx_soonDes').animate({bottom:-15,opacity:0});
    })
})