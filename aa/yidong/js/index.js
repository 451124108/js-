window.onload=function ()
{
let banner=document.getElementsByClassName("banner")[0]
let bannerlist=document.getElementsByClassName("bannerlist")[0]
let dian=bannerlist.getElementsByTagName("li")
let bannerpic=document.getElementsByClassName("bannerpic")[0]
let bannerli=bannerpic.getElementsByTagName("li")
console.log(banner,bannerlist,dian,bannerpic,bannerli)
let widths=bannerli[0].offsetWidth;
console.log(-widths)
let flag=true;

   let t=setInterval(fn, 6500)
   banner.onmouseenter=function()
   {
   	    clearInterval(t);
   }
   banner.onmouseleave=function(){
   	   t=setInterval(fn, 6500)
   }
    let now=0; 
    let next=0;
    function fn()
    {    next++;
    	if(next==bannerli.length){
    		next=0;
    	   }
         
    	
    	 
         bannerli[next].style.left=`${widths}px`;

         animate(bannerli[next],{left:"0"},500,Tween.Sine.easeOut,function()
         	{ for(i=0;i<dian.length;i++)
         {
             dian[i].style.background="#C1CED2";
             dian[now].style.background="#D22086";
             flag=true;
         }})
         animate(bannerli[now],{left:`${-widths}`},500,Tween.Sine.easeOut)
          // bannerli[next].style.left="0px";
          // bannerli[now].style.left="'${-widths}'px";
        

   now=next;
       

    }
    function fns()
    {
    	next--
    	if(next==-1)
    	{
    		next=bannerli.length-1;
    	}
    	bannerli[next].style.left=`${-widths}px`;
    	animate(bannerli[next],{left:0},function()
    		{ for(i=0;i<dian.length;i++)
         {
             dian[i].style.background="#C1CED2";
             dian[now].style.background="#D22086";
             flag=true;
         }})

        animate(bannerli[now],{left:`${widths}`})

         now=next;
    }




   let right=document.getElementsByClassName("youhua")[0]
   let left=document.getElementsByClassName("zuohua")[0]
    right.onclick=function()
    {
    	if(flag)
    	{
    		fn();
    		flag=false;
    	}
    }
    left.onclick=function()
    {
    	if(flag)
    	{
    		fns();
    		flag=false;
    	}
    }
 
    	 for(let i=0;i<dian.length;i++)
    	 {   dian[i].onclick=function() {
                                 
              if(now==i)
              {
              	return;
              }
              if(i>now)
              {
              bannerli[now].style.left=`${-widths}px`;
               bannerli[i].style.left=`0px`;
              dian[now].style.background="#C1CED2";
                  dian[i].style.background="#D22086"
              }
              if(i<now)
              {
                    
                    bannerli[now].style.left=`${widths}px`;
                  bannerli[i].style.left=`0px`;
                 dian[now].style.background="#C1CED2";
                  dian[i].style.background="#D22086"
              }

               next=now=i;
            }
           
    	 }
let tcbl=document.getElementsByClassName("tcbl")[0];
let box=document.getElementsByClassName("tclbbox1");  
let boxwidths=box[0].offsetWidth;
let boxwidthsmain=boxwidths+parseInt(getComputedStyle(box[0],null).marginRight);
 tcbl.style.width=`${boxwidthsmain*12}px`
let scbox=document.getElementsByClassName("scbox")[0]
// box.style.width=""
let left1=document.getElementsByClassName("tcbljt")[0];
let right1=document.getElementsByClassName("tclbjt1")[0];

let num=0;
right1.onclick=function(){
   if(num==8){
         
         num=0;
        
     }
     

       
    
    tcbl.style.transition="0.5s";
    if(num==0)
     {
       tcbl.style.transition="0s";
   
     }
     num++;
    tcbl.style.transform="translateX("+boxwidthsmain*-num+"px)"


    
}
left1.onclick=function(){
     if(num==0){
        num=8 
     }
     tcbl.style.transition="0.5s";
    if(num==8)
     {
       tcbl.style.transition="0s";
   
     }
     num--;
    tcbl.style.transform="translateX("+boxwidthsmain*-num+"px)"
}
   
   


    
let sec=document.querySelector(".tcbl")
function fnaa(){
     if(num==8){
         
         num=0;
        
     }
      sec.appendChild(box[0]);
    tcbl.style.transition="0.5s";
     num++;
    tcbl.style.transform="translateX("+boxwidthsmain*-num+"px)"

}

  
function fnsaa(){
   if(num==0){
         return; 
     }
   
    num--
    tcbl.style.transform="translateX("+boxwidthsmain*-num+"px)"

}
let t3=setInterval(fnaa,2500)
scbox.onmouseover=function(){
      clearInterval(t3)
}
scbox.onmouseout=function(){
      t3=setInterval(fnaa,2500)
}
let lics=document.querySelectorAll(".lics");
console.log(lics)

   // lics.forEach(function (value,index) {
   //       value.style.display="block";
   //       for(let i=0;i<lics.length;i++) {
   //
   //           if (index == 0 || index == 1) {
   //               value.style.display = "none";
   //           }
   //       }
   //
   // })
    let gonggao=document.querySelectorAll(".gonggao")
    let ulcs=document.querySelectorAll(".ulcs")
    let num1=0;
    let t1=setInterval(fnssa,2500);
    gonggao[0].onmouseover=function () {
        clearInterval(t1);
    }
    gonggao[0].onmouseout=function () {
        t1=setInterval(fnssa,2500);
    }
   function fnssa() {
       num1++;
       if(num1==2)
       {
           num1=0;
       }
    for(let i=0;i<ulcs.length;i++)
    {
           ulcs[i].style.display="none"

    }

    ulcs[num1].style.display="block"
   }
let box4left=document.querySelectorAll(".box4left");
   let box4right=document.querySelectorAll(".box4right");
   console.log(box4left,box4right)
   box4left[0].onclick=fnssa


box4right[0].onclick=fnssa



}