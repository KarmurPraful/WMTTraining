
var x=document.getElementsByTagName("h1")[0].getAttribute("id")
document.write(x)

// var x=document.getElementsByTagName("h1")[0].getAttributeNode("id")
// console.log(x)

// var x=document.getElementsByTagName("h1")[0].attributes[0]
// console.log(x)




        //set
// let h=document.querySelector("#header").innerHTML="<h4>this is seconde header</h4>"

// let h=document.querySelector("#header").innerHTML="hello praful"

// let h=document.querySelector("#header").innerText="<h4>this is seconde header</h4>"
// let h=document.querySelector("#header")
// h.setAttribute("class","header1")
// console.log(h)

// let h=document.querySelector("#header")
// let a=h.attributes[0].value=("class","header1")
// console.log(h)
// console.log(a)


//         // remove Atribute
// let h=document.querySelector("#header")
// h.removeAttribute("class")
// console.log(h)


            // style dom property
// var x=document.getElementById("header").style.color="red";



        // classlist
        // item,add,remove,replace,length,contains toggle
// var x=document.getElementById("header").classList
// x.add("hdh1")
// console.log(x)
// x.remove('hdh1')
// console.log(x)

// console.log(x)
// x.replace("h1","h2")
// console.log(x)

// var l=x.length
// console.log(x)
// console.log(l)

// var c=x.contains("h1")
// console.log(c)

// 



// console.log(x[1])
// console.log(x.item(1))
// console.log()

// var x=document.getElementById("demo").onclick=fun1
// function fun1(){
//     document.getElementById("demo").style.background="green"
// }


// // addeventlisener
// document.getElementById("header").addEventListener("mouseleave",fun1)
// function fun1(){
//     document.getElementById("header").style.background="red"
// }

// // removeecentlistener
// document.getElementById("header").addEventListener("click",fun2)

// function fun2(){
//     document.getElementById("header").removeEventListener('mouseleave',fun1)
// }




// document.getElementById("demo").parentElement.style.background="red"
// var x=document.getElementById("demo").parentElement
// console.log(x)

// var y=document.getElementById("demo").nextElementSibling.style.color="red"
// var x=document.getElementById("demo").parentElement
// console.log(x)
// console.log(y)


// var y=document.getElementById("demo").childNodes[0]
// var x=document.getElementById("demo").parentElement
// console.log(x)
// console.log(y)


// var x=document.getElementById("demo").firstElementChild.style.color="red"
// var y=document.getElementById("demo").lastElementChild.style.color="green"
// // var p=document.getElementById("demo").firstChild.style.color="yellow"   //it's give error
// var p=document.getElementById("demo").firstChild
// console.log(x)
// console.log(y)
// console.log(p)


// var x=document.getElementById("demo").nextElementSibling.style.color="red"
// var y=document.getElementById("demo").previousElementSibling.style.color="green"
// console.log(x)
// console.log(y)


                        // dom Create methode

// var x=document.createElement("p")
// var y=document.createTextNode("hello praful")
// var z=document.createComment("this is a comment node")
// console.log(x)
// console.log(y)
// console.log(z)

                        // Append method  1)appendChailde   2)insertBefore
// var x=document.createElement("p")
// var y=document.createTextNode("hello praful")
// var z=document.createComment("this is a comment node")

// var mainelement=document.getElementById("demo")
// x.appendChild(y)
// mainelement.appendChild(x)


// x.appendChild(y)
// x.appendChild(z)
// console.log(x)
// console.log(y)
// console.log(z)

                        // 1)insertAdjacentElement  
                        // 2)insertAdjacentHTML
                        // 3)insertAdjacentText 
// var x=document.createElement("p")
// var y=document.createTextNode("hello praful")
// // var z=document.createComment("this is a comment node")

// var mainelement=document.getElementById("demo")
// // mainelement.insertAdjacentElement("beforeend",x)
// // mainelement.insertAdjacentElement("beforebegin",x)
// // mainelement.insertAdjacentElement("afterbegin",x)
// mainelement.insertAdjacentElement("afterend",x)

// console.log(x)
// console.log(y)
// // console.log(z)


// 2)insertAdjacentHTML

// var x="<h4>this is a h4 tag</h4>"
// var mainelement=document.getElementById("demo")
// // mainelement.insertAdjacentHTML("beforeend",x)
// // mainelement.insertAdjacentHTML("beforebegin",x)
// // mainelement.insertAdjacentHTML("afterbegin",x)
// mainelement.insertAdjacentHTML("afterend",x)

// // 3)insertAdjacentText 
// var x="<h4>this is a h4 tag</h4>"
// var mainelement=document.getElementById("demo")
// mainelement.insertAdjacentText("beforeend",x)
// // mainelement.insertAdjacentText("beforebegin",x)
// // mainelement.insertAdjacentText("afterbegin",x)
// // mainelement.insertAdjacentText("afterend",x)




                                // replaceChlide
                                // removeChilde
// // replaceChlide
// var x=document.createElement("li")
// var y=document.createTextNode("white")
// x.appendChild(y)

// var ele=document.getElementById("lists")
// var manele=ele.children[0]

// ele.replaceChild(x,manele)
// console.log(manele)


// // removeChilde
// var ele=document.getElementById("lists")
// var manele=ele.children[0]
// ele.removeChild(manele)



                                // cloneNode()
// let ele=document.getElementById("lists").children[4]
// let copyele=ele.cloneNode(true)
// console.log(copyele)

// document.getElementById("lists1").appendChild(copyele)


                                // contains()
// var x=document.getElementById("demo");
// var target=document.getElementById("tests1")
// var find=x.contains(target)
// console.log(find)


                                // hasAttribute() 
                                // hasChildNodef()
// var x=document.getElementsByTagName("div")[0]
// var q=x.hasAttribute("class")
// console.log(q)

// var x=document.getElementsByTagName("div")[0]
// var find=x.hasChildNodes()
// console.log(find)


                                // isEqualNode()
// var target1=document.getElementById("lists").firstElementChild
// var target2=document.getElementById("lists1").firstElementChild
// var equal=target1.isEqualNode(target2)
// console.log(equal)



