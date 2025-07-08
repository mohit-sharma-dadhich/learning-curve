export function renderProducts(products) {
  document.querySelector("#no_result_message").innerHTML = "";

  const productContainer = document.querySelector("#product_container");

  let innerContent = "";
  products.forEach((product) => {
    innerContent += ` 
   <div id=${product.id} 
      class=" h-full rounded shadow-md flex flex-col justify-between  items p-4 gap-2 product">
      <div class="h-1/2 self-center ">
          <img
            class="h-auto w-[162px]  mt-4 self-center"
            src="${product.img}"
            alt="product_${product.id}"
          />
        </div> 
          <p class="h-1/4 font-semibold product-name">
           ${product.name}
          </p>
     <div class="flex flex-col gap-3 "> 
          <div class="flex gap-0.5 items-center ">
            <img
              class="w-[100px] h-[20px] object-contain"
              src="./star_photos/rating-${product.rating.stars}.png"
              alt="Stars-rating"
            />
            <p class="text-blue-800 self-center text-lg">${
              product.rating.review
            }</p>
          </div>
     
          <p class="font-bold text-2xl">$${(product.priceCent / 100).toFixed(
            2
          )}</p>
          
          <select
            id="options"
            name="options"
            class="block w-1/2 p-2 border border-gray-300 bg-gray-100 rounded-lg"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
     </div>
          
        <div class="relative mt-1.5 h-3 overflow-visible">
            <p
              class="absolute bottom-0.5  opacity-0 pointer-events-none translate-y-1 transition-all duration-300 ease-in-out text-sm text-green-600 added-msg"
              data-id="${product.id}">
                 ✅ Added successfully
            </p>
          </div>


          <button
            class="bg-amber-300 hover:bg-amber-400 text-gray-900 font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 add-to-cart"
          >
            Add to Cart
          </button>
 </div>`;
    productContainer.innerHTML = innerContent;
  });
}

export function renderCart() {
  let productContainerCart = document.querySelector("#productContainer");
  let cart = JSON.parse(localStorage.getItem("cartData")) || [];
  let totalQuantity = Number(localStorage.getItem("TotalQuantity")) || 0;
  productContainerCart.innerHTML = "";
  cart.forEach((product) => {
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

          Quantity: <span class="font-semibold show-quantity" data-id="${
            product.id
          }">${product.quantity}</span>


          <input type="number" 
         class=" hidden quantity-input w-16 px-1 border rounded text-black"
         data-id="${product.id}"
         min="1"
         max="100"
         step="1"
         placeholder="1"
         
      />
           <button class="text-green-600 ml-2 cursor-pointer save-btn hidden " data-id="${
             product.id
           }">
    Save
             </button>

          <button class="text-blue-600 ml-2 cursor-pointer 
          update-btn " data-id="${product.id}" >Update</button>
          <button class="text-blue-600 ml-2 cursor-pointer dlt-btn" data-id="${
            product.id
          }">Delete</button>
        </p>
      </div>

      <div class="text-sm w-full  sm:w-[250px]">
        <p class="font-semibold mb-1">Choose a delivery option:</p>
        
        <label class="block">
          <input type="radio" class="peer" name="product(${
            product.id
          })" value="0"  checked  />
          <span class="peer-checked:font-semibold  ml-1">${getDeliveryDate(
            7
          )}</span><br />
          <span class="ml-5 peer-checked:font-semibold  text-gray-600">FREE Shipping</span>
        </label>
        
        <label class="block mt-1">
          <input type="radio" class="peer"  name="product(${
            product.id
          })" value="4.99" />
          <span class="ml-1 peer-checked:font-semibold ">${getDeliveryDate(
            4
          )}</span><br />
          <span class="ml-5 peer-checked:font-semibold  text-gray-600">$4.99 - Shipping</span>
        </label>
        
        <label class="block mt-1 checked:font-bold">
          <input type="radio" class="peer"  name="product(${
            product.id
          })" value="9.99"  />
          <span class="ml-1 peer-checked:font-semibold">${getDeliveryDate(
            2
          )}</span><br />
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

    const options = { weekday: "long", month: "long", day: "numeric" };
    return today.toLocaleDateString("en-US", options);
  }
}

export function showNoMatchedProducts() {
  document.querySelector("#product_container").innerHTML = "";
  const messageSection = document.querySelector("#no_result_message");

  messageSection.innerHTML = `
    <div class="w-full flex flex-col items-center justify-center py-10 text-gray-600">
      <div class="text-4xl mb-3">😕</div>
      <p class="text-xl font-semibold">No products matched your search.</p>
      <p class="text-sm text-gray-400 mt-2">Try searching something else.</p>
      <button
        class="mt-5 px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onclick="renderProducts(products.allProducts)"
      >
        Back to All Products
      </button>
    </div>
  `;
}
