let cart = JSON.parse(localStorage.getItem('cartData')) || [];
let totalQuantity = Number(localStorage.getItem('TotalQuantity')) || 0;

console.log("Cart:", cart);
console.log("Total Quantity:", totalQuantity);
