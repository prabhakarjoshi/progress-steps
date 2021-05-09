'use strict';
let wid=0
document.querySelector(".next"). addEventListener("click",function(){
    wid+=(33);
    document.querySelector(".prog1").style.width=wid+"%";
    if(wid===99)
    document.querySelector(".next").disabled=true;
    else
    document.querySelector(".prev").disabled=false;
});
// document.querySelector(".next").disabled=true;
document.querySelector(".prev"). addEventListener("click",function(){
    wid-=(Number)(33);
    document.querySelector(".prog1").style.width=wid+"%";
    if(wid===0)
    document.querySelector(".prev").disabled=true;
    else
    document.querySelector(".next").disabled=false;
});