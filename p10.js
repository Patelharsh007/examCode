let userNames=[
    "Raj",
    "Rahul",
    "Harsh",
    "Krunal",
    "Zaid",
    "Ratnesh",
    "Ronil",
    "Parth",
    "Jinay",
    "Ankit",
    "Jesal",
    "Dhruv",
    "Roshan",
    "Devansh",
    "Aman"
]

console.log("Usernames: ",userNames)


let toFind="Ankit"

function findUser(arr,name){

    if(arr.includes(name)){
        console.log("\nUser Present")

        let userInd=arr.indexOf(name)
        console.log(`User: ${name} is at position ${userInd+1} in the list.`)

        listTillUser=arr.slice(0,userInd+1)
        console.log("\nList till user found:")
        listTillUser.forEach((item)=>console.log(item));
    }
    else{
        console.log("\nUser not found");
        
    }


}

findUser(userNames,toFind)