// export function addTwo(num1, num2){
//     return num1 + num2
// }

export function getTotalPrice(price, taxRate) {
    const taxToPay = (price*taxRate)/100
    return price + taxToPay
}

//Statement

export function greet(name) {
    return `Hi! ${name}`
}

//Branch Coverage example

export function isAdult(age){
    if(age>=18){
        return "Adult";
    } else {
        return "Minor";
    }
}

// Process coverage

export function process(x,y) {
    if (x>=0){
        if(y >= 0){
            return "both x and y are positive"
        } else {
            return "x is positive"
        }
    } else {
        return "x is not positive"
    }
}

export function canDrive(age, hasLicense) {
    if(age >=18 && hasLicense) {
        return "allowed to drive";
    } else {
        return "not allowed to drive";
    }
}

export function getUserById(userId){
    if(!userId) {
        return {status:400, message: "User id is required"}
    }
    if(userId == "123"){
        return {status:200, data: {name:"Alice"}}
    }
    return {status:404, message:"Not found"}
}