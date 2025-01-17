function getType(arg){
    if(typeof(arg)!=='object'){
        return(typeof(arg))
    }
    else{
        if(arg instanceof Array){
            return("Array")
        }
        
        else if(arg instanceof Set){
            return("Set")
        }

        else{
            return typeof(arg)
        }
        

    }
}

console.log(getType("Hello"));
console.log(getType(false));
console.log(getType([1,2,3,4]));
console.log(getType(1));

let set= new Set([1,2,3,4])
// console.log(set);
console.log(getType(set));

let obj={a:1,b:2}
// console.log(typeof(obj))
console.log(getType(obj));







