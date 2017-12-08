$(function(){

	//下拉
    $('.srtli').mouseenter(function () {
        let index=$('.srtli').index($(this))

        $('.ac').eq(index).show()
    })
    $('.srtli').mouseleave(function () {
        let index=$('.srtli').index($(this))
        $('.ac').eq(index).hide()
    })
    $('ac').mouseenter(function () {
        let index=$('.ac').index(this)
        $('.srtli').eq(index).css({'background':'white'})
        $(".ac").eq(index).show()
    })
    $('ac').mouseleave(function () {
        let index= $('.ac').index(this)
        $('.srtli').eq(index).css({'background':''})
        $(".ac").eq(index).hide()
    })

    //选项卡
      $('.ce li').hover(function(){
        $('.sideade').eq($(this).index()).css({'display':'block'});
    },function(){
        $('.sideade').eq($(this).index()).css({'display':'none'});
    })
    //轮播图
    let brr=["#ff0000","#00d884","#5d42ff","#ff008e","#ff873a","#ff3a89"]
    let flag=true;
	let num=0;
	let t=setInterval(fun1,2000);
    function se() {switch(num){case 0:{$('.bannerbox').css({background:"#FE3000"});break;}case 1:{$('.bannerbox').css({background:"#42D087"});break; }case 2:{$('.bannerbox').css({background:"#5269FE"});break;}case 3:{$('.bannerbox').css({background:"#E91E8E"});break;}case 4:{$('.bannerbox').css({background:"#FF8D56"});break;}case 5:{$('.bannerbox').css({background:"#FF5D98"});break;}}}
    se()
	$('.banna').hover(function(){
	    clearInterval(t);
	},function(){
	    t = setInterval(fun1,2000)
	});
    let dabox=document.querySelectorAll('.bannerbox')
	function fun1(){

		num++
        if(num==$('.bntli').length){
            num=0;
        }
        $('.bntli').css({'opacity':'0','zIndex':'5'})
        $('.listli').css({'backgroundColor':'#666'})
        $('.bntli').eq(num).css({'opacity':'1','zIndex':'8'})
        $('.listli').eq(num).css({'backgroundColor':'white'})
        
        se()
	}
	$('.listli').mouseenter(function(){
        se()
		clearInterval(t);
		let index=$('.listli').index(this)
		$('.bntli').eq(num).css({'opacity':'0','zIndex':'5'})
        $('.listli').eq(num).css({'backgroundColor':'666'})
        $('.bntli').eq(index).css({'opacity':'1','zIndex':'8'})
        $('.listli').eq(index).siblings().css({'background':'#666'});
        $('.listli').eq(index).css({'backgroundColor':'white'})
        
        num=index;
	})
	//跳转
	let up = false;
    let down = true;
    console.log($('.chaoshi').eq(0).offset().top)
    $(window).scroll(function () {
       let topss= $(document.documentElement).scrollTop()==0?$(document.body).scrollTop():$(document.documentElement).scrollTop()
        let objs = topss
        let chaoshi = document.querySelectorAll(".chaoshi")
        $('.fi-lift')
        if (objs > $('.chaoshi').eq(0).offset().top - 500) {
            if (down) {
                down = false;
                $('.fi-lift').animate({width: "35px", height: "370px"},200,function () {
                    up = true;
                })
                $('.fi-top').animate({top:0},200,function () {
                    up = true;
                })
            }
        } else {
            if (up) {
                up = false;
                $('.fi-lift').animate({width: "0px", height: "0px"},200,function () {
                    down = true;
                })
                $('.fi-top').animate({top:"-50"},200,function () {
                    down = true;
                })
            }
        }
        let leftbox = $(".F4 li")
        let nn;
        let arr = ["#64C333", "#000", "#EA5F8D", "#0AA6E8", "#64C333", "#F15453", "#19C8A9", "#000"]
        chaoshi.forEach(function (val, index) {
            if (objs > val.offsetTop - 200) {
                for (let i = 0; i < leftbox.length; i++) {
                    leftbox[i].style.background = "";
                }
                leftbox[index].style.background = arr[index];
                nn = index;
            }
            leftbox.each(function (index,val) {

                leftbox.eq(index).click(function () {
                    console.log(1)
                    $(document.documentElement).animate({scrollTop:$('.chaoshi').eq(index).offset().top-70},300,function () {
                        $(document.documentElement).stop(true,true)
                    })
                    $(document.body).animate({scrollTop:$('.chaoshi').eq(index).offset().top-70},300,function () {
                        $(document.documentElement).stop(true,true)
                    })
                })
            })
        })
        $('.xiao10').click(function () {
            $(document.documentElement).animate({scrollTop:0},500,function () {
                $(document.documentElement).stop(true,true)
            })
            $(document.body).animate({scrollTop:0},500,function () {
                $(document.documentElement).stop(true,true)
            })
        }) 
    })
})
