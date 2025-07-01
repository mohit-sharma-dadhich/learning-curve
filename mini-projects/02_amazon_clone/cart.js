let cart = JSON.parse(localStorage.getItem('cartData')) || [];
let totalQuantity = Number(localStorage.getItem('TotalQuantity')) || 0;
let navItemCount =document.querySelector("#nav-item-count");
let productContainerCart = document.querySelector("#productContainer");
let orderSummaryItem = document.querySelector(".order-summary-item");
let orderSummaryItemPrice = document.querySelector(".item-price");
let orderSummaryShippingTotal = document.querySelector(".shipping-total");
let orderSummaryTax = document.querySelector(".tax");
let orderSummaryTotalBTax = document.querySelector(".total-before-tax");
let orderSummaryOrderTotal = document.querySelector(".order-total");
navItemCount.innerHTML=`(${cart.length} Items)`;

productContainerCart.innerHTML='';
cart.forEach(product  => {
    productContainerCart.innerHTML += `
  <div class="bg-white p-4 rounded shadow border mb-4">
    <p class="text-green-600 font-semibold mb-2">
      Order Date: <span class="text-lg">${getDeliveryDate(0)}</span>
    </p>

    <div class="flex flex-col min-[400px]:flex-row gap-4">
      
      <img
        src="${product.img}"
        class="w-24 h-24 object-contain self-center sm:self-start"
      />

      <div class="flex-1">
        <h2 class="font-semibold text-gray-800 text-lg">
          ${product.name}
        </h2>
        <p class="text-red-600 font-semibold mt-1">
          $${(product.priceCent / 100).toFixed(2)}
        </p>
        <p class="mt-1 text-sm">
          Quantity: <span class="font-semibold">${product.quantity}</span>
          <input type="number" 
         class=" hidden quantity-input w-16 px-1 border rounded text-black"
         data-id="${product.id}"
         min="1"
         
      />
           <button class="text-green-600 ml-2 cursor-pointer save-btn hidden " data-id="${product.id}">
    Save
             </button>

          <button class="text-blue-600 ml-2 cursor-pointer 
          update-btn " data-id="${product.id}" >Update</button>
          <button class="text-blue-600 ml-2 cursor-pointer dlt-btn" data-id="${product.id}">Delete</button>
        </p>
      </div>

      <div class="text-sm w-full  sm:w-[250px]">
        <p class="font-semibold mb-1">Choose a delivery option:</p>
        
        <label class="block">
          <input type="radio" class="peer" name="product(${product.id})" value="0"  checked  />
          <span class="peer-checked:font-semibold  ml-1">${getDeliveryDate(7)}</span><br />
          <span class="ml-5 peer-checked:font-semibold  text-gray-600">FREE Shipping</span>
        </label>
        
        <label class="block mt-1">
          <input type="radio" class="peer"  name="product(${product.id})" value="4.99" />
          <span class="ml-1 peer-checked:font-semibold ">${getDeliveryDate(4)}</span><br />
          <span class="ml-5 peer-checked:font-semibold  text-gray-600">$4.99 - Shipping</span>
        </label>
        
        <label class="block mt-1 checked:font-bold">
          <input type="radio" class="peer"  name="product(${product.id})" value="9.99"  />
          <span class="ml-1 peer-checked:font-semibold">${getDeliveryDate(2)}</span><br />
          <span class="ml-5 peer-checked:font-semibold text-gray-600">$9.99 - Shipping</span>
        </label>
      </div>
    </div>
  </div>
`;

   
});

function getDeliveryDate(daysAhead) {
  const today = new Date();
  today.setDate(today.getDate() + daysAhead);


  const options = { weekday: 'long', month: 'long', day: 'numeric' };
  return today.toLocaleDateString('en-US', options);
}

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
  itemTotal=0;
  cart.forEach((product)=>{
  itemTotal += ( product.quantity * product.priceCent )/100;
  })
  return itemTotal
}

function totalShippingAmount(){
  shippingTotal=0;
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

    button.classList.add("hidden");
   
  });
});

document.querySelectorAll('.save-btn').forEach(button=>{
  button.addEventListener("click",()=>{
    const productId =button.dataset.id;
    document.querySelector(`.update-btn[data-id="${productId}"`).classList.remove("hidden");

    
    document.querySelector(`.quantity-input[data-id="${productId}"`).classList.add("hidden");

  let newQuantity= document.querySelector(`.quantity-input[data-id="${productId}"`).value;
  
  updateProductQuantity(productId,newQuantity);
  
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