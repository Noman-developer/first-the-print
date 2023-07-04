// console.log("hello World!");
// var meassage="Noman"
// console.log(meassage)
// var name="ali"
// name="haider"
// console.log(name);
// let age=23;
// age=24;
// console.log(age)
// const height=5.6
// // height=5.7
// console.log(height)

// let brand="Hush Puppies";
// console.log(brand[5])
// console.log(brand.toLowerCase())
// console.log(brand.toUpperCase());
// console.log(brand.length);
// console.log(brand.substring(3,7));
// console.log(brand.indexOf("Puppies"));

// let info=`My name is Noman
// and I'm doing bs(cs) 
// from agriculture FSD
// `
// let msg="Done"

// console.log(`introduction is : ${info} and status is ${msg} so result is ${info + msg}`);

// let value=null;
// let text;
// let bigint=84284671623573864834n;
// console.log(typeof value,text,bigint)

// console.log(5=="5");
// let number=5;
// let string=Number("10")
// console.log(number + string);
// if(false || 0 || "" || undefined || NaN || null){
//     console.log("it will not return any value")
// }
// if (true || 3 || "s" || {"key":"values"} || [2,3,4] || function(){}) {
//     console.log("it will return a true values");
// }

// if(false){
//     console.log("true ");
// }else if(true){
//     console.log("false");
// }
// let a=7;
// // console.log(7>2?"true":"false");
// // console.log(a%2===0 ? "even":"odd");

// if(true){
// if(2>4){
//     console.log("false");
// }else{
//     console.log("true");
// }
// }else{
// console.log("fasle");
// }

// let age=22;
// let name;
// switch(age){
//     case 21:
//         name="Awais"
//         break;
//     case 22:
//         name="Noman";
//         break;
//     default:
//         console.log("nothing match");    
// }
// console.log("the" + name + "has age is" + age);
// let arr=["apple","kela",22,undefined,null,true]
// for(let i=0;i<=arr.length;i++){
//     console.log(arr[i]);
// }

// let age=22;
// let init=0;
// let ans=0;
// while(init<age){
//     console.log(ans+=init);
//     init++;
// }

// for(let i=0;i<=10;i++){
//     if(i==3){
//         break;
//     }
//     console.log(i);
// }
// for(let i=0;i<=10;i++){
//     if(i==3){
//         continue;
//     }
//     console.log(i);
// }

// let count=1;
// do{
//     console.log("do");
// }while(count<=4) {
//  console.log("while");  
// count++; 
//  }

// Arrays
// let arrays=['banana','apple','grapes']
// console.log(typeof(arrays),arrays);
// console.log(arrays.push('peach'),arrays);
// console.log(arrays.pop());
// console.log(arrays.indexOf('apple'));
// console.log(arrays.join(':'));
// console.log(arrays.sort());
// console.log(arrays.shift(),arrays);
// console.log(arrays.unshift("grapes"),arrays);


// primitive data types 
// num,undefine,null,string,symbol,boolean
// refrence data type
// objects,arrays,functions,dates

// let no=10;
// no=15;
// console.log(no);
// let arr=[1,4,6]
// console.log(arr[2]=8,arr,typeof(arr));
// let obj={
//     name:"noman"
// }
// console.log(obj.name="Alia",obj,typeof(obj));

// spread operator and clone array 
// let arrori=[9,35,556,6]
// let shaarr=[3,6,7,8,4,43]
// let newarr=[9,35,...arrori]
// console.log(arrori,newarr);
// let lasarr=[...shaarr,...arrori]
// console.log(lasarr);

// let looparr=[34,45,5,67,864,4,3]
// for(let i=0;i<looparr.length;i++){
// console.log(looparr[i]);
// }
// let p=1;
// while(p<looparr.length){
//     console.log(looparr[p]);
//     p++;
// }


// const arr=[2,3,5,7,7,]
// console.log(arr.push(9),arr);



// for of loop 
// let vari="Noman"
// let arr=["Alia","kalsoom","Iqra"]
// for(let name of arr){
//     console.log(name);
// }
// for(let name of vari){
//     console.log(name);
// }

// // for in 
// let obj={
//     name:"Noman",
//     class:"BS(CS)",
//     roll_no:6356

// }
// for(let prop in obj){
//     console.log(obj[prop]);
// }


// Array destructing

// let array=["Noman","Kalsoom","Neha","Muqadas"]
// // let [a,b,c,d]=array
// // let[a, ,c,d]=array
// let [a,...rest]=array
// // console.log(a,b);
// // console.log(a,c);
// console.log(a,rest);

// objects /
// let car={
// model:2023,
// color:"Black",
// number:function(){
//     console.log("FDV 7988");
// }
// }
// console.log(car.model);
// car.number()
// console.log(car.color="red",car);
// console.log(car.price=39500,car);
// console.log(delete car.model,car);



// let obj={
//     name:"noman",
//     age:21,
//     $height:5.5,
//     " gender":"male"

// }

// let myage='age';
// console.log(obj[myage]);
// console.log(obj['$height']);
// console.log(obj[" gender"]);


// forEach loop
// let arr=[1,2,3,4,5,6]
// arr.forEach(function(value,index,array){
// console.log(value,index,array);
// })

// let obj={
//         name:"noman",
//         age:21,
//         $height:5.5,
//         " gender":"male"
    
//     }
//     console.log(Object.keys(obj));
//     Object.keys(obj).forEach(function(key){
//         console.log(obj[key]);
//     })


// computed properties of objects


// Object spread operator
// let obj1={
//     book_name:"Ielts",
//     price:500,
//     writer:"cambridge_Uni"
// }
// let obj2={
//     location:"dhakan_park",
//     time
// }
// let new_obj={...obj1,year:2023}
// console.log(obj1,new_obj);

// Object Destructing
// let obj1={
//     name:"Asma",
//     age:25,
//     locationn:"Lahore"
// }
// let {name,age:AsmaAge,locationn,address="Wapda town Lhr"}=obj1
// console.log(name);
// console.log(AsmaAge);
// console.log(locationn);
// console.log(address);

//objects in array
// let penArr=[
//     {color:"pink"},
//     {price:30,sechand:20},
//     {brand:"Dollar"}
// ]
// console.log(penArr[1].sechand);


// nested object and desrtructing


// let books={
//     colors:"pink",
//     price:26,
//     markets:{
//         punjab:"fsd,lhr,multan",
//         sindh:"karachi,haderbad"
//     }
// }
// let {colors,price,markets:{punjab,sindh}}=books
// console.log(colors);
// console.log(punjab);


// function expression
// let variable=function(parameter){
//     console.log("function expression",parameter);
// }
// variable("arguments")


// arrow function(not usefun for this function)
// let arrFun=para=> console.log(para*2);
// arrFun(2);
// let arr2=(num)=>{
//     for(let i=0;i<=10;i++){
//         console.log(num*i);
//     }
// }
// arr2(4)

// function hoisted (works only with function declaration not with function expression and arrow function)
//  greet("hello");
//  function greet(p){
//     console.log(p);
//  }
 
//  greets("hello")
//  function greets(p){
//      console.log(p);
//      let variable="HBD"
//      console.log(variable);
     
//     }
//     functionExpreesion("hello");
//  let functionExpreesion=function(p){
//     console.log(p);
//  }
//  functionArrow("hello");
//  let functionArrow=(p)=>{
//     console.log(p);
//  }
 

// function inside function
// function hello(){
//     let outer_variable="Noman"
//     function word(){
//         let inner_variable="Javed"
//         console.log(outer_variable + ' ' + inner_variable);
//     }
//     return word()
// }
//  let ans=hello()
//  console.log(ans);

// lexical scope or static scope 

// function hello(){
//         let outer_variable="Noman"
//         function word(){
//             let inner_variable="Javed"
//             console.log(outer_variable + ' ' + inner_variable);
//         }
//         word()
//         console.log(inner_variable);
//     }
//     hello()


