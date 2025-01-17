let input1="Test@123"
let input2="Test123|"

function chkPassword(input){

    if(input.length<6 || input.length>14){
        console.log("Password is not valid")
    }
    else{

        if(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[A-Z]+[a-zA-Z0-9!@#$%^&*]*/.test(input)){
            console.log("Password is valid")
        }
        else{
            console.log("Password is not valid.")}

        
    }

}

console.log(input1);
chkPassword(input1)
console.log(input2);
chkPassword(input2)
