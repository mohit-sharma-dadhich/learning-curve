import { renderCart } from "./render_products.js";

let cart = JSON.parse(localStorage.getItem("cartData")) || [];
let navItemCount =document.querySelector("#nav-item-count");

let orderSummaryItem = document.querySelector(".order-summary-item");
let orderSummaryItemPrice = document.querySelector(".item-price");
let orderSummaryShippingTotal = document.querySelector(".shipping-total");
let orderSummaryTax = document.querySelector(".tax");
let orderSummaryTotalBTax = document.querySelector(".total-before-tax");
let orderSummaryOrderTotal = document.querySelector(".order-total");
navItemCount.innerHTML=`(${cart.length} Items)`;

renderCart();



showOrderSummary();


function showOrderSummary(){
  orderSummaryItem.innerHTML=`Items(${cart.length}):`;
  orderSummaryItemPrice.innerHTML=`$${calculateItemPrice().toFixed(2)}`
  orderSummaryShippingTotal.innerHTML=`$${totalShippingAmount().toFixed(2)}`
  orderSummaryTotalBTax.innerHTML=`$${totalBfTax().toFixed(2)}`
  orderSummaryTax.innerHTML=`$${calculateTax().toFixed(2)}`
  orderSummaryOrderTotal.innerHTML=`$${calOrderTotal().toFixed(2)}`

}

function calculateItemPrice(){
 let itemTotal=0;
  cart.forEach((product)=>{
  itemTotal += ( product.quantity * product.priceCent )/100;
  })
  return itemTotal
}

function totalShippingAmount(){
  let shippingTotal=0;
  cart.forEach((product)=>{
    shippingTotal +=getShippingAmount(product.id)/100;
    
  })
  return shippingTotal
}

function getShippingAmount(productId) {
  const selected = document.querySelector(`input[name="product(${productId})"]:checked`);
  const value = selected?.value;

  if (value === "0") {
    return 0;
  } else if (value === "4.99") {
    return 499;
  } else if (value === "9.99") {
    return 999;
  }

}

function totalBfTax(){
   let totalBTax=0;
  totalBTax += calculateItemPrice()+totalShippingAmount();

  return totalBTax

}
function calculateTax(){
  return (totalBfTax()*10)/100
}

function calOrderTotal(){
  return totalBfTax()+calculateTax()
}

document.querySelectorAll('input[type="radio"][name^="product"]').forEach((radio) => {
  radio.addEventListener("change", () => {
    showOrderSummary();
  });
});



document.querySelectorAll('.dlt-btn').forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.id; 
    deleteProductFromCart(productId);
  });
});

document.querySelectorAll('.update-btn').forEach(button => {
  button.addEventListener('click', () => {
    const productId = button.dataset.id; 
    document.querySelector(`.save-btn[data-id="${productId}"`).classList.remove("hidden");

    document.querySelector(`.quantity-input[data-id="${productId}"`).classList.remove("hidden");

    document.querySelector(`.show-quantity[data-id="${productId}"`).classList.add("hidden");

    button.classList.add("hidden");
   
  });
});

document.querySelectorAll('.save-btn').forEach(button=>{
  button.addEventListener("click",()=>{
    const productId =button.dataset.id;
    document.querySelector(`.update-btn[data-id="${productId}"`).classList.remove("hidden");

    
    document.querySelector(`.quantity-input[data-id="${productId}"`).classList.add("hidden");

  let newQuantity= document.querySelector(`.quantity-input[data-id="${productId}"`).value || "1";
  
  if(newQuantity==="0"){
    deleteProductFromCart(productId);
  }

  updateProductQuantity(productId,newQuantity);
  document.querySelector(`.show-quantity[data-id="${productId}"`).classList.remove("hidden");
  
    button.classList.add("hidden");
  })
})


function deleteProductFromCart(productId) {
  
  cart = cart.filter(product => product.id != productId);

 
  localStorage.setItem('cartData', JSON.stringify(cart));
  updateTotalQuantity();
  location.reload(); 
}

function updateProductQuantity(productId,newQuantity){
   let product = cart.find(item=> item.id ===productId);
   product.quantity=Number(newQuantity);
   localStorage.setItem('cartData', JSON.stringify(cart));
   updateTotalQuantity();
  location.reload(); 
}
function updateTotalQuantity(){
   let totalQuantity=0;
   cart.forEach((item)=>{
    totalQuantity+=item.quantity;
   })
   localStorage.setItem("TotalQuantity", JSON.stringify(totalQuantity));
}