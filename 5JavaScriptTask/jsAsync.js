    // callback
// function show(params) {
//     document.write(total)
// }
// function sum(p1,p2,sw) {
//     total=p1+p2;   
//     sw(total)
//     // show(total) 
// }
// sum(3,4,show)

    // Async
// function fun1(){
//     setTimeout(function(){document.write("fun1 is starting<br>")},3000)
//     document.write("fun1 is starting<br>")
// }
// function fun2(params) {
//     document.write("fun2 is started <br>")
//     fun1()
//     document.write("fun2 is ending <br>")
// }

// fun2()



    // multipal callback function
// document.write("start<br>")


// function getname(name,fum){
//     setTimeout(()=>{
//     fum(name);},3000)
// }

// function gethobby(name,ghob){
//     setTimeout(()=>{ghob(["playing","dansing","reading"])},1000)
// }
// const nm=getname('Sonam<br>',(nm)=>{
//     document.write(nm);
//     gethobby(nm,(hobby)=>{document.write(hobby)})
// })

// document.write("end")


                                                 // Promise
//     // produsing code
// var mpromise=new Promise((resolve,rejected)=>{

//      resolve("hello it is true")

//     rejected("error pcurs")
// })

//     // consuming code
// mpromise.then(
//     (value)=>{
//         console.log(value)

// },
//     error=>{
//         console.log(error)

// })


             // chining
// var mpromise=new Promise((resolve,rejected)=>{
//     let num=10
//     resolve(num)
//     rejected("error pcurs")
// })

//     // consuming code
// mpromise.then(
//     (value)=>{
//         return value+10
// },
//     error=>{
//         console.log(error)

// })
// mpromise.then(
//     (value)=>{
//         console.log(value)
//         return value+10
// },
//     error=>{
//         console.log(error)

// }).then((value)=>{
//     console.log(value)

// }).then(

//     (value)=>{
//         if(value!==10){
//         throw new Error("first error founde")
//         }
//     }
// )
// .catch((error)=>{
//     console.log(error);
// }
// )


// var mpromise=new Promise((resolve,rejected)=>{
//     let num=10
//     resolve(num)
//     rejected("error pcurs")
// }).then(
//     (value)=>{
//         return value+10
// },
//     error=>{
//         console.log(error)

// }).then(
//     (value)=>{
//         console.log(value)
// },
//     error=>{
//         console.log(error)

// })


                // catch() method
// var mpromise=new Promise((resolve,rejected)=>{

//      resolve("hello it is true")

//     rejected("error pcurs")
// })

//     // consuming code
// mpromise.then(
//     (value)=>{
//         console.log(value)

// })
// mpromise.catch(
//     error=>{
//         console.log(error)

// })


            // finally method
// var mpromise=new Promise((resolve,rejected)=>{

//      resolve("hello it is true")

//     rejected("error pcurs")
// })

//     // consuming code
// mpromise.then(
//     (value)=>{
//         console.log(value)

// })
// mpromise.catch(
//     error=>{
//         console.log(error)

// })

// mpromise.finally(()=>{
//     console.log("this is finaly code")
// })








    // multipal callback function
// document.write("start<br>")


// function getname(name,fum){
//     setTimeout(()=>{
//     fum(name);},3000)
// }

// function gethobby(name,ghob){
//     document.write("in get hooby"+name+"<br>")
//     setTimeout(()=>{ghob(["playing","dansing","reading"])},1000)
// }
// const nm=getname('Sonam<br>',(nm)=>{
//     document.write(nm);
//     gethobby(nm,(hobby)=>{document.write(hobby)})
// })

// document.write("end")


document.write("start<br>")
function getname(name){
    return new Promise((resolve,rejected)=>{
        setTimeout(()=>{
            document.write(name)
            resolve(name);},4000)
    })
}
function gethobby(name){
    return new Promise((resolve,rejected)=>{
        document.write("in get hobby"+name+"<br>")
        setTimeout(()=>{resolve(["playing","dansing","reading"])},2000)
    })
}

  // getname("praful")
  // .then((nm)=> gethobby(nm))
  // .then((hobby)=>document.write(hobby))

async function showhobby(){
    const nm=await getname('sonam')
    const hobby=await gethobby(nm)
    document.write(hobby)
}
showhobby()