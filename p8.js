let obj={
    name:'sid',
    age:24
}


console.log("Object:",obj)

function objToArray(obj){
    let arr=[];

    for(let key in obj){
        let res=[key,obj[key]]
        arr.push(res)
    }
    
    return arr;
}

arr=objToArray(obj)
console.log("\nAnswer: ")
console.log(arr)

arr.forEach((item)=>{
    console.log(item);
})


console.log("\nUsing Property:")

function objToArrayProp(obj){    
    return Object.entries(obj);
}

arrProp=objToArrayProp(obj)
console.log("\nAnswer: ")
console.log(arrProp)

arrProp.forEach((item)=>{
    console.log(item);
})