
    $(function(){
        //选项卡
        $('.list2 li').hover(function(){
            $('.itam').eq($(this).index()).addClass('chuxian');
        },function(){
            $('.itam').eq($(this).index()).removeClass('chuxian');
        })
    //下拉
        $('.sideli').hover(function(){
      $('.nav2list1').addClass('nav2list1op');
      $('.sideli').each(function(){
        $('.sideli a').hover(function(){
            $('.nav2list').eq($('.sideli').index(this)).css({'z-index':999,'display':'block'})
        },function(){
            $('.nav2list').eq($('.sideli').index(this)).css({'z-index':999,'display':'none'})
        })
    })
    },function(){
      $('.nav2list1').removeClass('nav2list1op');
    })
    
    //。购物车  
        $('.touright2').hover(function() {
                $('.gouwuCheft').animate({height:98},200).empty().append('<p>购物车中还没有商品，赶紧选购吧！</p>');
        },function(){
             $('.gouwuCheft').empty().animate({height:0},200);
        });
    //轮播图
    let flag=true;
    let num=0;
    let t=setInterval(fn1,2000);
    $('.banna').hover(function(){
        clearInterval(t);
    },function(){
        t = setInterval(fn1,2000)
    });
    //
    function fn1(){
        num=num+1;
        if(num==$('.banna1').length){
            num=0;
        }
        $('.banna1').css({'opacity':'0','zIndex':'1500'})
        $('.dian').css({'background':''})
        $('.banna1').eq(num).animate({opacity:1,zIndex:2000},1000, function(){
            flag=true;
        })
        $('.dian').eq(num).css({'background': 'white'})
    }
    //右把手
    $('.you').click(function(){
         console.log(1)
        if(flag){
            flag=false;
            fn1()
        }
    });


    //
    function fn2(){
            num=num-1;
        if(num<0){
            num=$('.banna1').length-1
        }
        $('.banna1').css({'opacity':'0','z-index':'1500'})
        $('.dian').css({'background':''})
        $('.banna1').eq(num).animate({opacity:1,zIndex:2000},1000, function(){
            flag=true;
        })
        $('.dian').eq(num).css({'background': 'white'})
    }
    

    //左把手
    $('.zuo').click(function(){
        console.log(1)
        if(flag){
            flag=false;
            fn2();
        }
    })


    //小点
    $('.dian').click(function(){
        let index=$('.dian').index(this)
        $('.banna1').css({'opacity':'0','z-index':'1500'})
        $('.dian').css({'background':''})
        $('.banna1').eq(index).animate({'opacity':'1','zIndex':'2000'},1000, function(){
            flag=true;
        })
        $('.dian').eq(index).css({'background':'white'})
        num=index
    })


    //家电。。。。。。。
    function xxk(js1,js2) {
            js1.mouseenter(function () {
                let index = js1.index($(this))
                js2.css({display: "none"})
                js1.addClass("jdli")
                js2.eq(index).css({'display': "block"})
                js1.removeClass("hot")
                js1.eq(index).addClass("jdli hot")
            })
    }
        xxk($(".jdli"), $(".h5h"))
        xxk($(".jdli1"), $(".h5h1"))
        xxk($(".jdli2"), $(".h5h2"))
        xxk($(".jdli3"), $(".h5h3"))
        xxk($(".jdli4"), $(".h5h4"))
        xxk($(".jdli5"), $(".h5h5"))



    //节点轮播上
    let num2 = 0;
    $('.zuoxia1').click(function () {
        if (num2!=1) {
            num2++;
            $('.zuoxia1').css({'color': "#e0e0e2"})
            $('.zuoxia').css({'color': "#666"})
            $('.boxmain').css("transform", "translateX(" + num2 * -1240 + "px")
        }
    })
    $('.zuoxia').click(function () {
        if (num2!=0) {
            num2--;
            $('.zuoxia1').css({'color': "#666"})
            $('.zuoxia').css({'color': "#e0e0e2"})
            $('.boxmain').css("transform", "translateX(" + num2 * 1240 + "px")
        }
    })
    function fun1(){
        if (num2!=1) {
            num2++;
            $('.zuoxia1').css({'color': "#e0e0e2"})
            $('.zuoxia').css({'color': "#666"})
            $('.boxmain').css("transform", "translateX(" + num2 * -1240 + "px")
        }
    }
    function fun2(){
        if (num2!=0) {
            num2--;
            $('.zuoxia1').css({'color': "#666"})
            $('.zuoxia').css({'color': "#e0e0e2"})
            $('.boxmain').css("transform", "translateX(" + num2 * 1240 + "px")
        }
    }
    setInterval(fun1,7000)
    setInterval(fun2,14000)


    // 节点轮播下
    function play(c1,c2,c3) {
        let now = 0;
        let next = 0;
        c1.click(function () {
            let li = $(this).nextAll('li');
            let dian1 = $(this).nextAll().has('li').children();
            let length = $(this).nextAll('li').length;
            if (flag) {
                if (next != length - 1) {
                    next++;
                    flag = false;
                    li.eq(next).css({left:"296px"});

                    li.eq(now).animate({'left': "-296px"}, function () {
                        dian1.css({'background': "#b0b0b0"});
                        dian1.eq(now).css({"background":"white"});                      
                        flag = true;
                    });
                    li.eq(next).animate({'left': "0"});
                    now = next;
                }
            }
        });
        c2.click(function () {
            let li = $(this).nextAll('li');
            console.log(1);
            let dian1 = $(this).nextAll().has('li').children();
            let length = $(this).nextAll('li').length;
            if (flag) {
                if (next != 0) {
                    next--;
                    flag = false;
                    li.eq(next).css({left:"-296px"})

                    li.eq(now).animate({left: "296px"}, function () {
                        dian1.css({background: "#b0b0b0"});
                        dian1.eq(now).css({background: "white"});
                        flag = true;
                    });
                    li.eq(next).animate({left: "0"})
                    now = next;
                }
            }
        })
        c3.click(function () {
            let li = $(this).parent().nextAll('li');
            console.log(li);
            let length = $(".quan li").length
            let index =$(this).parent().children().index($(this))
            let par=$(this).parent().children()
            console.log(index)
            if (now == index) {
                return;
            }
            else if (index < now) {
                li.eq(index).animate({left: 0});
                li.eq(now).animate({left: "296px"});
                par.eq(index).css({background: "white"});
                par.eq(now).css({background: "#b0b0b0"});         
            }
            else if (index > now) {
                li.eq(index).animate({left: 0})
                li.eq(now).animate({left: "-296px"})
                par.eq(index).css({background: "white"})
                par.eq(now).css({background: "#b0b0b0"})    
            }
            next = now = index;
        })
    } 
    play($('.nei:nth-child(1) .ce2'),$('.nei:nth-child(1) .ce1'),$('.nei:nth-child(1) .quan li'))
    play($('.nei:nth-child(2) .ce2'),$('.nei:nth-child(2) .ce1'),$('.nei:nth-child(2) .quan li'))
    play($('.nei:nth-child(3) .ce2'),$('.nei:nth-child(3) .ce1'),$('.nei:nth-child(3) .quan li'))
    play($('.nei:nth-child(4) .ce2'),$('.nei:nth-child(4) .ce1'),$('.nei:nth-child(4) .quan li'))

})











