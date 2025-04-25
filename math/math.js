// export function addTwo(num1, num2){
//     return num1 + num2
// }

export function getTotalPrice(price, taxRate) {
    const taxToPay = (price*taxRate)/100
    return price + taxToPay
}