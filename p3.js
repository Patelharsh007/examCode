function inner(){
    let ct=0;

    return function(){
        ct++;
        console.log("Counter: "+ct)
    }
}

let counter=inner();
counter()
counter()
counter()