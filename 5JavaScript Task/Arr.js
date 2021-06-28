// const arr=['saab','volvo','bmw',2]


// var str=""
// var num=""
// for(i of arr){
//     var x=document.getElementById("demo")
//     // str=str+"<br>"+i
//     // x.innerHTML=str
//     if(typeof(i)===Number){
//         num=num+"<br>"+i;
//         x.innerHTML=num
//     }
//     else{
//         str=str+"<br>"+i;
//         x.innerHTML=str
//     }
// }


// forEach
// var q=document.getElementById("demo")
// q.innerHTML=typeof(arr)
// let x=""
// arr.forEach(function1)
    
// function function1(value){
//  x=x+"<br>"+value   
//  q.innerHTML=x
// }

// const person = [];
// person["firstName"] = "John";
// person["lastName"] = "Doe";
// person["age"] = 46;
// var q=document.getElementById("demo");                                                                                                                                                                                                                                                                                              
// q.innerHTML=Array.isArray(arr)



     // Array method
          // tosting
// const arr=['saab','volvo','bmw',2]
// const st=arr.toString();
// var q=document.getElementById("demo")
// q.innerHTML=st

           // join()
// const arr=['saab','volvo','bmw',2];
// const arr1=['saab1','volvo1','bmw1',21]
// arr.shift()
// arr.unshift("pk")
// arr.splice(2,1,"lemon","Kiwi");
// const arr2=arr.concat("pc")
// const ar1=arr.slice()
// const st=arr.join(" -, ")
// var q=document.getElementById("demo")
// q.innerHTML=Array.isArray(ar1)
// q.innerHTML=ar1
// q.innerHTML=arr2

    // sort Array
            // sort Array
// const arr=['saab','volvo','bmw',2];
// const arr=[55,100,12,2,44];
// arr.sort(function(a,b){return(a-b)})

// arr.reverse()

// var q=document.getElementById("demo")
// q.innerHTML=Math.min.apply(null,arr);


    // Array itration
    // forEach
// const arr=[12,13,24];
// var x=document.getElementById("demo");
// var str=""
// arr.forEach(function1)
// function function1(value){
//     str+="<br>"+value;
  
// }
// x.innerHTML=str

    // map
// const arr=[12,13,24];
// var x=document.getElementById("demo");
// // var arr1=arr.map(fun1)
// // function fun1(value) {
// //     return value*2;
// // }
//     // using arrow function
// var arr1=arr.map((value)=>{
//     return value*2
// })
// x.innerHTML=arr1

    // filtter()
// const arr=[14,30,23,10,25,51]
// var x=document.getElementById("demo");
// var filarr=arr.filter((value,index)=>{
//     // return index>1
//     return value>15
// })
// x.innerHTML=filarr

    // reduce
// const arr=[14,6,12,8]
// var x=document.getElementById("demo");
// var filarr=arr.reduce((total,value,index)=>{
//     return total+=value
// })
// x.innerHTML=filarr

    // includes()
// const arr=[14,6,12,8]
// var x=document.getElementById("demo");
// delete arr[1];
// x.innerHTML=arr.includes(14)

    // find
// const arr=[14,30,23,10,25,51]
// var x=document.getElementById("demo");
// var filarr=arr.find((value,index)=>{
//     // return index>1
//     return value>15
// })
// x.innerHTML=filarr

    // findindex()
const arr=[14,30,23,10,25,51]
var x=document.getElementById("demo");
var filarr=arr.findIndex((value,index)=>{
    // return index>1
    return value>15
})
x.innerHTML=filarr