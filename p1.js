let n=10;


function fibonnaci(n){
    let fib=[]

    for(let i=0;i<n;i++){
        if(i==0){
            fib.push(i)
        }
        else if(i==1){
            fib.push(i)
        }
        else{
            val=fib[i-1]+fib[i-2]

            if(val>n){
                return fib;
            }
            fib.push(val)
        }
    }

    return fib;
    
}

let result=fibonnaci(n)
console.log(result);
