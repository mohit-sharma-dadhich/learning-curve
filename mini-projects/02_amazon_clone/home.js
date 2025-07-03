import * as products from "./product_details.js";
import { renderProducts } from "./render_products.js";
renderProducts(products.allProducts);


const menuBar = document.querySelector("#menu");
let menuContainer = document.querySelector(".menu");
let menuQuantityCount = document.querySelector(".menu-quantity-count");
menuBar.addEventListener("click", () => {
  menuQuantityCount.classList.toggle("hidden");
  if (menuContainer.innerHTML.trim() == "") {
    menuContainer.innerHTML = `<section
      class="flex flex-col  bg-[#131921] text-white h-full w-fit p-5  gap-4 z-50 fixed top-[0px] right-0    sm:hidden"
    >
      <div class="flex flex-col cursor-pointer">
        <span class="text-sm">Return</span>
        <span class="font-bold text-[15px]">&amp;orders</span>
      </div>
      <div class="place-self-center flex items-center gap-1">
           <a class="flex" 
           href="cart.html"><div class="flex flex-col gap-0 ">
                <div class="total-quantity  absolute top-18 self-center  font-bold text-orange-300 text-md pl-1 ">
                   </div>
                  <img
                    class="h-[26px] cursor-pointer"
                    src="./photos/cart-icon.png"
                    alt="cart"
                  />
               </div>
        <span>Cart</span>
        </a>
      </div>
    </section>`;
    showCartValue();
  } else {
    menuContainer.innerHTML = "";
  }
});

let cart = JSON.parse(localStorage.getItem("cartData")) || [];
let totalQuantity = JSON.parse(localStorage.getItem("TotalQuantity")) || 0;
showCartValue();

const addToCartBtn = document.querySelectorAll(".add-to-cart");

addToCartBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const parentProduct = button.closest(".product");
    const id = parentProduct.getAttribute("id");
    const productName = parentProduct
      .querySelector(".product-name")
      .innerText.trim();
    const quantity = Number(parentProduct.querySelector("select").value);

    const findDetails = products.find((product) => product.id === id);
    const existingItem = cart.find((item) => item.id === id);

    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({
        ...findDetails,
        quantity: quantity,
      });
    }

    let addedMsg = document.querySelector(`.added-msg[data-id="${id}"`);
    addedMsg.classList.remove("opacity-0", "pointer-events-none");
    addedMsg.classList.add("opacity-100");

    setTimeout(() => {
      addedMsg.classList.remove("opacity-100");
      addedMsg.classList.add("opacity-0", "pointer-events-none");
    }, 1000);

    showCartValue();

    localStorage.setItem("cartData", JSON.stringify(cart));
    localStorage.setItem("TotalQuantity", JSON.stringify(totalQuantity));
  });
});

showCartValue();
function showCartValue() {
  totalQuantity = 0;
  cart.forEach((item) => {
    totalQuantity += item.quantity;
  });

  localStorage.setItem("cartData", JSON.stringify(cart));
  localStorage.setItem("TotalQuantity", JSON.stringify(totalQuantity));
  let cartValue = document.querySelectorAll(".total-quantity");
  cartValue.forEach((cart) => {
    cart.innerHTML = totalQuantity;
  });
  menuQuantityCount.innerHTML = totalQuantity;
}

