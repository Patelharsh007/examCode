const data=[
    {name:'John',age:30},
    {name:'Alice',age:25},
    {name:'Bob',age:35}
]

console.log("Data: "+data)

for(let item of data){
    console.log(item)
}

let key='age'

function sortArr(arr,key){
    return arr.sort((a,b)=>a[key]-b[key])
    // console.log("\nSorted Array: "+arr)
    // for(let item of arr){
    //     console.log(item)
    // }
}

let result=sortArr(data,key)
console.log("\nSorted Array: "+result)
for(let item of result){
     console.log(item)
}