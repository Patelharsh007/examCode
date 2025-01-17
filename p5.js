const data=[1,2,3,4,5,6,7,8,9]
let chunk=3

console.log("Array: "+data)

function chunkArray(arr,chunk){
    
    let index=0;
    let arr2=[]

    while(index<arr.length){
        arr2.push(arr.slice(index,index+chunk))
        index+=chunk
    }
    
    return arr2;
}

let result=chunkArray(data,chunk)
console.log("\nNew Array: ")
console.log(result)
for(let item of result){
        console.log(item)
}