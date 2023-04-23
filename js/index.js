function clock()
{
    var date=new Date()
    var hh=date.getHours()
    var mm=date.getMinutes()
    var ss=date.getSeconds()
    var day=date.getDay()
    var dd=date.getDate()
    var mo=date.getMonth()
    var yy=date.getFullYear()
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>=13)
        {
            hh-=12;
        }
    }
if(hh==0)
{
    hh=12;
}
var fullTime=`${hh}:${mm} ${am_pm}`
document.getElementById("Time").innerHTML=fullTime;
// if(mo==0)
// {
//     mo="January"
// }
// else if(mo==1)
// {
//     mo="Febravary"
// }
// else if(mo==2)
// {
//     mo="March"
// }
// else if(mo==3)
// {
//     mo="April"
// }
// else if(mo==4)
// {
//     mo="May"
// }
// else if(mo==5)
// {
//     mo="June"
// }
// else if(mo==6)
// {
//     mo="July"
// }
// else if(mo==7)
// {
//     mo="August"
// }
// else if(mo==8)
// {
//     mo="September"
// }
// else if(mo==9)
// {
//     mo="October"
// }
// else if(mo==10)
// {
//     mo="November"
// }
// else if(mo==11)
// {
//     mo="December"
// }
var monthname=["January","Febravary","March","April",
"May","June","July","September","October","November","December"]
var fulldate=`${dd}/${monthname[mo]}/${yy}`
document.getElementById("Date").innerHTML=fulldate;
// switch(day)
// {
//     case 0:
//         day="ఆదివారం"
//         document.body.style.backgroundImage="url(sun.jpeg)"
//         break;
//         case 1:
//         day="సోమవారం"
//         document.body.style.backgroundImage="url(mon.jpeg)"
//         break;
//         case 2:
//         day="మంగళవారం"
//         document.body.style.backgroundImage="url(tue.jpeg)"
//         break;
//         case 3:
//         day="బుధవారం"
//         document.body.style.backgroundImage="url(wed.jpeg)"
//         break;
//         case 4:
//         day="గురువారం"
//         document.body.style.backgroundImage="url(thu.jpeg)"
//         break;
//         case 5:
//         day="శుక్రవారం"
//         document.body.style.backgroundImage="url(fri.jpeg)"
//         break;
//         case 6:
//         day="శనివారం"
//         document.body.style.backgroundImage="url(sat.jpeg)"
//         break;
// }
var dayname=["ఆదివారం","సోమవారం","మంగళవారం","బుధవారం","గురువారం","శుక్రవారం","శనివారం"]
var num=0;
var images=["./images/sun.jpeg","./images/mon.jpeg","./images/tue.jpeg","./images/wed.jpeg","./images/thu.jpeg","./images/fri.jpeg","./images/sat.jpeg"]
document.body.style.backgroundImage=`url(${images[day]})`
document.getElementById("Day").innerHTML=dayname[day];
document.getElementById("Sec").innerHTML=ss
var updateTheTime=setTimeout(clock,1000)
}
function greet()
{
    var date=new Date();
    var hh=date.getHours()
    if(hh>=6&&hh<=12)
    {
        document.getElementById("GreetMessage").innerHTML="శుభోదయం"
        document.getElementById("bgVid").src="./images/morning.mp4"
    }
    else if(hh>12&&hh<=16)
    {
        document.getElementById("GreetMessage").innerHTML="శుభ మద్యాహ్నం"
        document.getElementById("bgVid").src="./images/afternoon.mp4"
        document.getElementById("bgVid").style.width="100%"
       
    }
    else if(hh>16&&hh<=20)
    {
        document.getElementById("GreetMessage").innerHTML="శుభ సాయంత్రం"
        document.getElementById("bgVid").src="./images/evening.mp4"
        document.getElementById("bgVid").style.width="100%"
        
    }
    else 
    {
        document.getElementById("GreetMessage").innerHTML="శుభ రాత్రి"
        document.getElementById("bgVid").src="./images/night.mp4"
        document.getElementById("bgVid").style.width="100%"
    }
}
greet()

function closeWind()
{
    document.getElementById("greet").style.display="none"
}
var a=setTimeout(closeWind,5000)
