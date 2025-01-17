let ar=[2,4,10,[12,4,[100,99],4],[3,2,99],0];
console.log("Initial Array:")
console.log(ar)

let ar2=ar.flat(Infinity)
console.log("\nFlatten Array: ")
console.log(ar2)

//Maximum of number
let max=ar2.reduce((max,num)=>{
    return num>max ? num : max;
},0)

console.log("\nLargest Number is "+max)

console.log(max)