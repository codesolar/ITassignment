var c=0;

function showTime(){
    var d =new Date();
    document.getElementById("time").innerHTML=d;
    var h=d.getHours();
    var m=d.getMinutes();
    var s=d.getSeconds();
    var t=setTimeout(showTime,500);
    if(c==0){
    document.getElementById("timeInput").onmouseleave= function(){mouseLeave(t,h,m,s)};
    }
    else{
        mouseLeave(t,h,m,s);
    }
    
    
}
 function mouseLeave(t,h,m,s){
    
    var h1=parseInt(document.getElementById("h").value);
    var m1=parseInt(document.getElementById("m").value);
    var s1=parseInt(document.getElementById("s").value);

    if(c==0) c++;

    if((!isNaN(h1) && h>h1)||(!isNaN(h1)&& isNaN(m1) && h===h1) || 
    (!isNaN(h1) && !isNaN(m1) && h===h1 && m>m1)||
    (!isNaN(h1) && !isNaN(m1) && isNaN(s1) && h===h1 && m===m1 )||
    (!isNaN(h1) && !isNaN(m1) && !isNaN(s1) && h===h1 && m===m1 &&s>=s1)){
     document.getElementById("time").style.color="red";
     clearTimeout(t);
     
    }
    
 }