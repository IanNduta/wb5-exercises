"use strict";

let cart = [
    {item: "Bread", price: 3.29, quantity: 2},
    {item: "Milk", price: 4.09, quantity: 1},
    {item: "T-Bone Steak", price: 12.99, quantity: 2},
    {item: "Baking Potato", price: 1.89, quantity: 6},
    {item: "Iceberg Lettuce", price: 2.06, quantity: 1},
    {item: "Ice Cream - Vanilla", price: 6.81, quantity: 1},
    {item: "Apples", price: 0.66, quantity: 6}
   ];

function displayFoodFromCart(cartArray){
    console.log(cartArray.item);
}

function displaycart(cartArray){
    console.log(cartArray);
}
console.log("Name of the items in the cart array ");
let cartList = cart.map(displayFoodFromCart);
cartList.forEach(displaycart);
console.log("-----------------------------------------------------------");

function getTotalCostOfItems(cartArray){
    let cartTotal;
    cartTotal += cartArray.price;
    return cartTotal;
}
let cartSum = cart.reduce(getTotalCostOfItems, 0);
console.log(Number(cartSum));
console.log("-----------------------------------------------------------");
// let cartLength = cartList.length;
// for(let i = 0; i < cartLength.length; i++){
//     console.log(cartList[i]);
// }
   
//    cartList.forEach(cartList);
