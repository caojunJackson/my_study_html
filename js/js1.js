
// var x = 1;
//  x = "ddd"
// console.log(x);


// var x1 = 34.00;
// var x2 = 34;
// var y = 123e5;
// var z = 123e-5;
// console.log(x1+"\n"+x2+"\n"+y+"\n"+z);


// // var cars = ["Saab", "Volve", "BMW"];
// var cars = new Array("Saab", "Volve", "BMW");
// var cars = new Array();
// cars[0] = "one";
// cars[1] = "two";
// cars[3] = "four";
// for(var i = 0; i< cars.length; i++){
//     document.write(cars[i]+"<br>");
// }


// var person = {
//     name:"Alex",
//     age:"16"
// }
// log(person.name);
// log(person["age"]);

// Undefined 这个值表示变量不含有值。
// 可以通过将变量的值设置为 null 来清空变量。

// var car;
// log(car);
// car = "volvvvv";
// log(car);
// car = null;
// log(car);


var carname = new String();
var x = new Number;
var y = new Boolean;
var cars = new Array();
var person = new Object;

log(carname+": carname");
log(x);
log(y);
log("cars:"+cars);
log(person.name);


function Demo(){
    this.name="张思";
    this.age=12;
    this.firstF=function(){
    }
    this.secondF=function(){
        return "secondF method";
    }
}

var one=new Demo();
log(one.secondF());
// 调用输出
log(one.age);


var person = new Object();
person.name = "Alex";
person.age = null;
person.method = function(){
    return this.name + this.age;
} 

log(person.method());


//如果您把值赋给尚未声明的变量，该变量将被自动作为 window 的一个属性。

var var1 = 1;// 不可配置全局属性
var2 = 2;// 没有使用 var 声明，可配置全局属性
log(this.var1);
log(window.var2)

log(delete var1); // false 无法删除
log(var1);

log(delete var2); // true
log(var2); 


/////////////////////////////////////////////////////

function log(s){
    document.write(s+"<br>");
}


function myFunc(ele){
    ele.innerHTML = "Hello P1";
    ele.style.color = "#FF00FF"
    // document.write("hello")
    // window.alert(5+5);
    // console.log(5+6);

    p1 = document.getElementById("p1");
    p1.innerHTML = 123e4;


    var arrs = [40,100,65,98,12];
    var objs = {
        name : "Alex",
        age : "18",
        eyeColor : "black"
    }

    var test = 16+"volvo";
    var test1 ;
    console.log(test1);

  
}

function init(){
  //基本: String Number Boolean Null Undefined Symbol
    //引用: Object Array Function
    //javaScript 拥有动态类型

    var x = 1;
    var x = "ddd"
    console.log(x);
}


function add(a1, a2){
    return a1+a2;
}