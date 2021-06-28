// var obj={
//     FirstName:"praful",
//     LastName:"karmur",
// }
// document.write(obj.FirstName)

// obj.age=20;
// document.getElementById("demo").innerHTML=obj.age


    // using object
// var obj={
//     FirstName:"praful",
//     LastName:"karmur",
//     fun1:function() {
//         return this.FirstName + " " + this.LastName
//     }
// }
// document.write(obj.fun1())

        // delete Properties
// var obj={
//     FirstName:"praful",
//     LastName:"karmur",
//     fun1:function() {
//         return this.FirstName + " " + this.LastName
//     }
// }
// // delete fun1()
// document.write(obj.fun1())

        // Nested object array
// var obj={
//     FirstName:"praful",
//     LastName:"karmur",
//     car:{
//         car1:"ford",
//         car2:["arr1","arr2"]
//     },
//     fun1:function() {
//         return this.FirstName + " " + this.LastName
//     }
// }
// // delete fun1()
// document.write(obj.car.car2[1])




        // Nested object
// var obj={
//     FirstName:"praful",
//     LastName:"karmur",
//     car:{
//         car1:"ford",
//         car2:{
//             f1:10,
//             fun2:function(){
//                 return this.f1
//             }
//         }
//     },
//     fun1:function() {
//         return this.FirstName + " " + this.LastName
//     }
// }
// // delete fun1()
// document.write(obj.car.car2.fun2())



    // desplaying js objects
// var obj={
//     FirstName:"praful",
//     LastName:"karmur",
//     age:20,
//     branch:"ce"
// }
// var obj1=Object.values(obj)
// for(let i of obj1){
//     document.write(i,"<br>")
// }


    // Accessors get()
// var obj={
//     FirstName:"praful",
//     LastName:"karmur",
//     age:20,
//     branch:"ce",
//     get lang(){
//         return this.LastName;
//     }
// }
// document.write(obj.lang,"<br>")


    // Accessors set()
// var obj={
//     FirstName:"praful",
//     LastName:"karmur",
//     age:20,
//     branch:"ce",
//     set lang(lname){
//         return this.LastName=lname;
//     }
// }
// obj.lang="pr"
// document.write(obj.LastName,"<br>")


    // function in getter and setter
    // Accessors get()
// var obj={
//     FirstName:"praful",
//     LastName:"karmur",
//     age:20,
//     branch:"ce",
//     get FullName(){
//         return this.FirstName+' '+this.LastName;
//     }
// }
// document.write(obj.FullName,"<br>")




        // object Constructor
function fun1(num,fname,lname){
    this.erno=num,
    this.FirstName=fname,
    this.LastName=lname;
}

const obj1=new fun1(30,"praful","karmur")
const obj2=new fun1(20,"vipul","suva")
for(let i in obj1){
    document.write(obj2[i]+"<br>")
}





