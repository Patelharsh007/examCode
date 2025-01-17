let employee = []

function chkUser(firstName, lastName, mobile_number, email) {
    let flag = 0;

    for (let item of employee) {

        //console.log(item)
        if ((item.firstName === firstName && item.lastName === lastName) || item.mobile_number === mobile_number ||
            item.email === email) {
            flag = 1;
            break;
        }
    }
    return flag;

}

function createUser(firstName, lastName, mobile_number, email, salary, address) {

    //console.log(employee.length)

    let id = employee.length !== 0 ? employee[employee.length - 1].id + 1 : 1;

    let flag = chkUser(firstName, lastName, mobile_number, email)

    if (flag === 1) {
        console.log("\nData repeated")
    }

    else {


        let user = {
            id,
            firstName,
            lastName,
            mobile_number,
            email,
            salary,
            address
        };



        employee.push(user);

        console.log("\nEmployee detils entered successfully")
        readEmployee();
    }
}


function updateUser(id, firstName, lastName, mobile_number, email, salary, address) {

    let index = employee.findIndex((item) => item.id === id)

    if (index === -1) {
        console.log("\nUser not exists")
    }
    else {

        let user = employee[index]

        user.firstName = firstName || user.firstName;
        user.lastName = lastName || user.lastName;
        user.mobile_number = mobile_number || user.mobile_number;
        user.email = email || user.email;
        user.salary = salary || user.salary;
        user.address = address || user.address;

        console.log("\nUser Updated successfully");
        readEmployee()

    }
}


function deleteUser(id) {
    let index = employee.findIndex((item) => item.id === id)

    if (index === -1) {
        console.log("\nUser not exists")
    }
    else {
        employee.splice(index, 1);
        console.log("\nUser Deteleted")
        readEmployee();
    }
}



function readEmployee() {
    console.log("\nEmployee details:")
    employee.forEach((item) => console.log(`  -${JSON.stringify(item)}`));
}

createUser("Harsh", "Patel", "1234562736", "harsh307@gmail.com", 30000, ['faliya', 'village', 'area', 396445, "Navsari", "Gujarat"])
createUser("Krunal", "Pokar", "1234562736", "harsh307@gmail.com", 30000, ['faliya', 'village', 'area', 396445, "Navsari", "Gujarat"])
createUser("Krunal", "Pokar", "5627366789", "krunal@gmail.com", 30000, ['faliya', 'village', 'area', 396445, "Navsari", "Gujarat"])
updateUser(3, "Raj", "Pokar", "", "", 40000, ['school', 'village', 'area', 396445, "Navsari", "Gujarat"])
updateUser(2, "Raj", "Pokar", "", "", 40000, ['school', 'village', 'area', 396445, "Navsari", "Gujarat"])
deleteUser(3)
deleteUser(2)