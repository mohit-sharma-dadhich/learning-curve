const products = [
  {
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    img: "./photos/athletic-cotton-socks-6-pairs.jpg",
    rating: {
      stars: 4.5,
      review: 40,
    },
    priceCent: 1090,
  },
   {
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    img: "./photos/athletic-cotton-socks-6-pairs.jpg",
    rating: {
      stars: 4.5,
      review: 40,
    },
    priceCent: 1090,
  }
];

const productContainer = document.querySelector("#product_container");
// console.log(productContainer);

let innerContent = "";
products.forEach((product) => {
  innerContent += `  <div class="h-fit rounded shadow-md flex flex-col items p-4 gap-2">
          <img
            class="h-auto w-[162px] mt-4 self-center"
            src="${product.img}"
            alt="product_1"
          />
          <p class="font-semibold">
           ${product.name}
          </p>
          <div class="flex gap-0.5">
            <img
              class="w-[100px] h-auto"
              src="./photos/rating-${product.rating.stars}.png"
              alt="Stars-rating"
            />
            <p class="text-blue-800 text-2xl">${product.rating.review}</p>
          </div>
          <p class="font-bold text-2xl">$${(product.priceCent/100).toFixed(2)}</p>
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
          <button
            class="bg-amber-300 hover:bg-amber-400 text-gray-900 font-bold py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-200"
          >
            Add to Cart
          </button>
        </div>`;
        productContainer.innerHTML=innerContent;
});


const menuBar=document.querySelector('#menu');
let menuContainer=document.querySelector('.menu');
menuBar.addEventListener('click',()=>{
    if(menuContainer.innerHTML.trim() ==''){
        menuContainer.innerHTML=`<section
      class="flex flex-col  bg-[#131921] text-white h-full w-fit p-5  gap-4 z-50 fixed top-[0px] right-0    sm:hidden"
    >
      <div class="flex flex-col cursor-pointer">
        <span class="text-sm">Return</span>
        <span class="font-bold text-[15px]">&amp;orders</span>
      </div>
      <div class="place-self-center flex items-center gap-1">
        <img
          class="h-[26px] cursor-pointer"
          src="/screenshots/cart-icon.png"
          alt="cart"
        />
        <span>Cart</span>
      </div>
    </section>`
    }
    else{
        menuContainer.innerHTML='';
    }
})