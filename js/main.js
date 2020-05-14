var iiAdvlInitTop=0;
var iiCloselInitTop=0;
var img=new Array()
img[0]="images/b-ad1.jpg";
img[1]="images/b-ad2.jpg";
img[2]="images/b-ad3.jpg";
img[3]="images/b-ad4.jpg";
window.onload=function(){
    var oDt=new Date();
    var sWd="";
    var iWeekDay=oDt.getDay();
    switch(iWeekDay){
      case 0:
        sWd="星期日";break;
      case 1:
        sWd="星期一";break;
      case 2:
        sWd="星期二";break;
      case 3:
        sWd="星期三";break;
      case 4:
        sWd="星期四";break;
      case 5:
      sWd="星期五";break;
      case 6:
        sWd="星期六";break;
    }
    var iMonth=parseInt(oDt.getMonth())+1;
    document.getElementById("displaydate").innerHTML="<span>"+oDt.getFullYear()+"年"+iMonth+"月"+oDt.getDate()+"日"+sWd+"</span>";
    var iTimerid=window.setInterval("showtime()",1000);
    if(document.getElementById("a1")!=null){
      document.getElementById("a1").onmouseover=function(){
        document.getElementById("badimg").src=img[0];
        num=0;
      }
    }
    if(document.getElementById("a2")!=null){
      document.getElementById("a2").onmouseover=function(){
        document.getElementById("badimg").src=img[1];
        num=1
      }
    }
    if(document.getElementById("a3")!=null){
      document.getElementById("a3").onmouseover=function(){
        document.getElementById("badimg").src=img[2];
        num=2
      }
    }
    if(document.getElementById("a4")!=null){
      document.getElementById("a4").onmouseover=function(){
        document.getElementById("badimg").src=img[3];
        num=3;
      }
    }
    setInterval(function(){changeimg()},5000);
    window.onscroll=function(){admove();}
    if(document.getElementById("advl")!=null){advinit();}
    if(document.getElementById("closel")!=null){document.getElementById("closel").onclick=function(){advclosel();}}
    if(document.getElementById("closer")!=null){document.getElementById("closer").onclick=function(){advcloser();}}
    }
    var num=0;
    function changeimg(){
      document.getElementById("badimg").src=img[num];
      num++;
      if(num>=4)
        num=0;
    }
    function showtime(){
    var oDt=new Date();
    var iTimerid;
    var sTime="";
    if(oDt.getHours()<10){
      sTime+="0"+oDt.getHours()+":";}
    else{
      sTime+=oDt.getHours()+":";}
    if(oDt.getMinutes()<10){
      sTime+="0"+oDt.getMinutes()+":";}
    else{ 
    sTime+=oDt.getMinutes()+":";}
    if(oDt.getSeconds()<10){
      sTime+="0"+oDt.getSeconds()+":";}
    else{
      sTime+=oDt.getSeconds();}
    document.getElementById("displaytime").innerHTML="<span>"+sTime+"</span>";
    }
    function advinit(){//确定浮动广告初始位置
      //<div id="advl">位置
      var sTop=document.getElementById("advaddr").offsetTop+="px";
      var sLeft=document.getElementById("advaddr").offsetLeft-document.getElementById("advl").offsetWidth;
      sLeft=sLeft.toString()+"px";
      document.getElementById("advl").style.top=sTop;
      document.getElementById("advl").style.left=sLeft;
      // <div id="closel">位置
      var sTop=document.getElementById("advaddr").offsetTop+document.getElementById("advl").offsetHeight-document.getElementById("closel").offsetHeight+"px";
      var sLeft=document.getElementById("advaddr").offsetLeft-document.getElementById("closel").offsetWidth;
      sLeft=sLeft.toString()+"px";
      document.getElementById("closel").style.top=sTop;
      document.getElementById("closel").style.left=sLeft;
      // 浮动广告距文档窗口顶部距离
      iiAdvlInitTop=document.getElementById("advl").offsetTop;
      iiCloselInitTop=document.getElementById("closel").offsetTop;
      // <div id="advr">位置
      var sTop=document.getElementById("advaddr").offsetTop+"px";
      var sLeft=document.getElementById("advaddr").offsetLeft+document.getElementById("advaddr").offsetWidth;
      sLeft=sLeft.toString()+"px";
      document.getElementById("advr").style.top=sTop;
      document.getElementById("advr").style.left=sLeft;
      // <div id="closer">位置
      var sTop=document.getElementById("advaddr").offsetTop+document.getElementById("advr").offsetHeight-document.getElementById("closer").offsetHeight+"px";
      var sLeft=document.getElementById("advaddr").offsetLeft+document.getElementById("advaddr").offsetWidth+document.getElementById("advr").offsetWidth-document.getElementById("closer").offsetWidth;
      sLeft=sLeft.toString()+"px";
      document.getElementById("closer").style.top=sTop;
      document.getElementById("closer").style.left=sLeft;
    }
  function advclosel(){
    document.getElementById("advl").style.display="none";
    document.getElementById("closel").style.display="none";
  }
  function advcloser(){
    document.getElementById("advr").style.display="none";
    document.getElementById("closer").style.display="none";
  }
  var userAgent=navigator.userAgent.toLowerCase();
  browser={
    chrome:/chrome/.test(userAgent),
    safari:/webkit/.test(userAgent)&&!/chrome/.test(userAgent),
    opera:/opera/.test(userAgent),
    msie:/msie/.test(userAgent)&&!/opera/.test(userAgent),
    mozilla:/mozilla/.test(userAgent)&&!/(compatible|webkit)/.test(userAgent)
  };//获取浏览器的名称信息
  function admove(){
    if (document.getElementById("advl")!=null){
      var iX, iY;
      iY =document.body.scrol1Top;
      iX=document.body.scrollLeft;
      if (browser.mozilla){
        iY=document.documentElement.scrollTop;
        iX=document.documentElement.scrollLeft;}
        if(browser.chrome){
          iY=document.documentElement.scrollTop||document.body.scrollTop;
          iX=document.documentElement.scrollLeft||document.body.scrollLeft;}
          var sTop1=iiAdvlInitTop+iY;
          var sTop2=iiCloselInitTop+iY;
          sTop1=sTop1.toString() +"px";
          sTop2=sTop2.toString() +"px";
          document.getElementById("advl").style.top=sTop1;
          document.getElementById("closel").style.top=sTop2;
          document.getElementById("advr").style.top=sTop1;
          document.getElementById("closer").style.top=sTop2;
        }
      }
  function buttonclick(){
    var value=document.getElementById("value").value;
    var content=document.getElementById("content");
    var contents = content.innerHTML;
    var values = contents.split(value);
    content.innerHTML = values.join('<span style="background:red;">' + value + '</span>');
  }