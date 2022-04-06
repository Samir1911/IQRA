var menu=document.querySelector("#menu");
var slide=document.querySelector("aside");
var close=document.querySelector("#close")
menu.addEventListener("click",function(){
    slide.style.display="flex";
    slide.style.marginLeft="117px";
    slide.style.transition='2s';
})
close.addEventListener("click",function(){
    slide.style.marginLeft="470px";
    slide.style.transition='2s';
    slide.style.display="none";
})