onmessage=function(e){
    
    console.log("coplete")
    let result = 0;
    for(let i = 0;i<10;i++){
        result+=i;
    }
    postMessage(result)

}