// class MyClass{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
//     fun1(fullName) {
//         this.name=fullName
//     }

//     myage(year1){
//         return year1-this.year
//     }
// }

// var yr1=new Date()
// var year1=yr1.getFullYear()
// var obj1=new MyClass("praful",2020)
// var total=obj1.myage(year1)
// // obj1.fun1("praful karmur")
// document.write("total age is "+total)


    // class inheritance
// class cl1{
//     constructor(mobailn){
//         this.mbname=mobailn
//     }
//     show(){
//         return this.mbname
//     }

// }
// class cl2 extends cl1{
//     constructor(mobailPR,mn){
//         super(mn)
//         this.mbpr=mobailPR
//     }  
//     // show(){
//     //     return this.mbpr
//     // }
// }
// var obj1=new cl2(2000,"mi")
// document.write(obj1.show())


    // static
// class MyClass{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
//     static fun1(){
//         return "hrllo"
//     }
// }
// document.write(MyClass.fun1())

    // pass object in static method

// class MyClass{
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
//     static fun1(x){
//         var yr1=new Date()
//         var yr2=yr1.getFullYear()-x.year
//         return "hello "+x.name+"<br>"+"your age is "+ yr2
//     }
// }
// obj1=new MyClass("praful",2012)
// document.write(MyClass.fun1(obj1))