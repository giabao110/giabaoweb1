// DONG HO TU DONG 
function todayfunction(){
    var today = new Date();
    var day = today.getDay();
    var daylist = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    document.getElementById("demo2").innerHTML = ("Today is: " + daylist[day] + ".");
    var h = today.getHours();
    var m = today.getMinutes(); 
    var s = today.getSeconds();
    var p = (h >= 12)? "PM":"AM";
    checktime(m);
    document.getElementById("demo").innerHTML=("Current Time is: " + h + ":" + m + ":" + s + ":"+ p);
    var t = setTimeout(function(){ todayfunction(); }, 300);
}
function checktime(i){
    var i = 0;
    for (i;i<10;i++)
    {
        i = "0" + i;
    }
    return(i);
} //Nếu ngày tháng nhỏ hơn 10 thì tự động thêm 0 vào 

//PRINT
function princont(){
    window.print();
}
//AREA OF A  TRIANGLE
function area(){
    const a = 5;
    const b = 6;
    const c = 7;
    const peri = (a + b + c)/2;
    const area = Math.sqrt(peri * ((peri - a) * (peri - b) * (peri - c)));
    document.getElementById("demo3").innerHTML=area.toFixed(2);
}

//VARNAME
var a = 1;
var b = 120;
this[toString(a)] = b;
console.log(this[toString(a)]);

//CHECK
function checkposneg(x,y){
    if (( x < 0 && y > 0 || x > 0 && y < 0))
    {
        return true;
    }
    else 
    {
        return false;
    }
}
console.log(checkposneg(2,-2));

//STRING - CHECK 
function string_check(str){
    if(str === null || str === undefined || str.substring(0,2) === "Py")
    {
        return str;
    }
    else 
    {
        return "Py" + str;
    }
}
console.log(string_check("thon"));

//STRING FRONT BACK 
function front_back(str){
    if (str.length >= 3)
    {
      back = str.substring(str.length-3);
      return back + str + back;
    }
    else 
    {
        return alert("vui long nhap lai");
    }
}

// 27. check if JAVA is true 
function checkjv(str){
    if(str.substring(0,4)==="JAVA" && str.length > 4)
    {
        return true;
    }
    else 
    {
        return false;
    }
}

//28 
function checknumber(a,b){
    if ((a > 49 && a < 100) || (b > 49 && b < 100))
    {
        return true;
    }
    else 
    {
        return false;
    }
}

//30 
function checkscript(str){
if (str.length < 6)
{
    return str;
}
let result_str = str;
if ((str.substring(4,10)) === "script")
{
    result_str =  str.substring(0,4);
}
    return result_str;
}

//31
function checklarge3(a,b,c){
    max = 0;
    if ( a > b)
    {
        max = a;
    }
    else 
    {
        max = b;
    }
    if (c > max)
    {
        return c; 
    }
    else 
    {
        return max;
    }
}

//32 nearest to 100 
function near_100(a,b){
 soa = Math.abs(a - 100);
 sob = Math.abs(b - 100);
 if (a != b)
 {
    if (soa < sob)
    {
        return a;
    }
    else 
    {
        return b;
    }
    return 0;
 }
}
console.log(near_100(102,100));

//35
function check_char(str, char)
 {
  ctr = 0;
  for (let i = 0; i < str.length; i++)
  {
    if (str.charAt(i) == char) {
      ctr++;
    }
  }
  return (ctr >= 2 && ctr <= 4);
}

console.log(check_char("Pyyython", "y"));