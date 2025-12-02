// console.log('connected..');
// const ringButton =document.querySelectorAll('.ring-button');
// for(let i=0 ; i<ringButton.length; i++){
//     const ringBtn = ringButton[i];
//     ringBtn.addEventListener('click',function(event){
//         const color = event.target.id.replace("-color", "");
//         for(let j=0; j<ringButton.length; j++){
//             ringButton[j].classList.remove('border-purple-600');
//             // ringButton[j].classList.add('border-white');
//         }
//         event.target.classList.add('border-purple-600');
//         event.target.classList.remove('border-white');
//     const productImg = document.getElementById('product-image');
//     // console.log(productImg);
//     productImg.src = "../images/"+color+".png";
//     })
// }

// // size add color 
// // function selectWristSize (size){
// //     const sizes = ["s", "M","L","XL"];
// //     for(let i = 0 ; i<sizes.length; i++){
// //         console.log(sizes[i]);
// //         const btn = document.getElementById('size-'+sizes[i])

// //         if (size === sizes[i]) {
// //             btn.classList.add('border-purple-600')
// //         }else{
// //             btn.classList.remove('borer-purple-600')
// //         }
// //     }
// // }
// function selectWristSize(size) {
//     const sizes = ['S','M','L','XL'];
//     for(let i = 0 ; i<sizes.length; i++){
//         const button = document.getElementById('size-'+sizes[i]);
//         const element = sizes[i];
//         if (size === element) {
//             button.classList.add('border-purple-600')
//         } else {
//             button.classList.remove('border-purple-600')
            
//         }
//     }
// }

// // quantity btn 
// const quantityBtn = document.querySelectorAll('.quantity-button');
// for (const btn of quantityBtn) {
//     // console.log(btn);
    
//     btn.addEventListener('click',function(event){
//     const amount = event.target.innerText === '+'? 1: -1;
//     // console.log(amount);
//         let currentQuantity = parseInt(document.getElementById ('quantity').innerText);
//         // console.log(currentQuantity);
//         newQuantity = Math.max(0, currentQuantity+ amount);
//         console.log(newQuantity);
//         document.getElementById('quantity').innerText = newQuantity;
//     });
// }
// // ADD TO CART 
// let cartCount = 0 ;
// let cartItems  = [];
// document.getElementById('add-to-cart').addEventListener('click',function () {
//     const checkoutContainer = document.getElementById('checkout-container');
//     const quantity = parseInt(document.getElementById('quantity').innerText);
//     if(quantity > 0){
//         checkoutContainer.classList.remove('hidden');
//         cartCount = cartCount + quantity
//     document.getElementById('cart-count').innerText = cartCount;
//     const selectedColorButton = document.querySelector('button.border-purple-600.w-6')
//     // console.log(selectedColorButton);
//     const selectedColor = selectedColorButton.id.split('-')[0];
//     // console.log(selectedColor);
//     const selectedSizeButton  = document.querySelector('button.border-purple-600:not(.w-6)');
//     console.log(selectedSizeButton);
//     const selectedSize = selectedSizeButton.innerText.split(' ')[0];
//     console.log(selectedSize);
//     const selectedPrice = selectedSizeButton.innerText.split(' ')[1].split('$')[1]
//     // console.log(selectedPrice);

//         cartItems.push({
//             image:'../images/'+selectedColor+'.png',
//             title: `i don't know`,
//             color: selectedColor,
//             size:selectedSize,
//             price: quantity*parseInt(selectedPrice)
//         })
//         console.log(cartItems);
//     }else{
//         alert('Please select at last 1 product')
//     }
// }) ;

// document.getElementById('checkout-btn').addEventListener('click',function(){
//     const cartModal = document.getElementById('cart-modal');
        
//     const cartContainer = document.getElementById('cart-items');
//     console.log(cartContainer);
//     for(let i = 0 ; i<cartItems.length; i++){
//         const item = cartItems[i];
//         const row = document.createElement('tr');
//         row.classList.add('border-b');
//         row.innerHTML=`
//         <td>
//         <div class="flex items-center space-x-2">
//         <img class="h-12 w-12" src="${item.image}" alt="">
//         <span class="font-semibold">${item.title}</span>
//         </div>
//         </td>
//         `;
//         cartContainer.appendChild(row)
//     }
//     cartModal.classList.remove('hidden')
// });

console.log("connected..");

// ----------------------- COLOR SELECT -----------------------
const ringButton = document.querySelectorAll(".ring-button");

ringButton.forEach(btn => {
  btn.addEventListener("click", () => {
    ringButton.forEach(b => b.classList.remove("border-purple-600"));

    btn.classList.add("border-purple-600");

    const color = btn.id.replace("-color", "");

    // GitHub Pages Safe Path
    document.getElementById("product-image").src = "images/" + color + ".png";
  });
});

// ----------------------- SIZE SELECT -----------------------
function selectWristSize(size) {
  const sizes = ["S", "M", "L", "XL"];

  sizes.forEach(s => {
    const button = document.getElementById("size-" + s);

    if (s === size) button.classList.add("border-purple-600");
    else button.classList.remove("border-purple-600");
  });
}

// ----------------------- QUANTITY -----------------------
const quantityBtn = document.querySelectorAll(".quantity-button");

quantityBtn.forEach(btn => {
  btn.addEventListener("click", () => {
    const amount = btn.innerText === "+" ? 1 : -1;
    let currentQuantity = parseInt(document.getElementById("quantity").innerText);

    const newQuantity = Math.max(0, currentQuantity + amount);
    document.getElementById("quantity").innerText = newQuantity;
  });
});

// ----------------------- CART SYSTEM -----------------------
let cartCount = 0;
let cartItems = [];

document.getElementById("add-to-cart").addEventListener("click", () => {
  const quantity = parseInt(document.getElementById("quantity").innerText);

  if (quantity <= 0) {
    alert("Please select at least 1 product");
    return;
  }

  document.getElementById("checkout-container").classList.remove("hidden");

  cartCount += quantity;
  document.getElementById("cart-count").innerText = cartCount;

  // Selected Color
  const selectedColorButton = document.querySelector(".ring-button.border-purple-600");
  const selectedColor = selectedColorButton.id.replace("-color", "");

  // Selected Size
  const selectedSizeButton = document.querySelector("button.border-purple-600:not(.ring-button)");
  const selectedSize = selectedSizeButton.innerText.split(" ")[0];
  const selectedPrice = selectedSizeButton.innerText.split("$")[1];

  // Add Item to Cart
  cartItems.push({
    image: "images/" + selectedColor + ".png",
    title: "Classy Modern Smart Watch",
    color: selectedColor,
    size: selectedSize,
    quantity: quantity,
    price: quantity * parseInt(selectedPrice)
  });
});

// ----------------------- SHOW CART MODAL -----------------------
document.getElementById("checkout-btn").addEventListener("click", () => {
  const cartModal = document.getElementById("cart-modal");
  const cartContainer = document.getElementById("cart-items");

  cartContainer.innerHTML = "";

  cartItems.forEach(item => {
    const row = document.createElement("tr");
    row.classList.add("border-b");

    row.innerHTML = `
      <td>
        <div class="flex items-center space-x-2">
          <img class="h-12 w-12" src="${item.image}" />
          <span>${item.title}</span>
        </div>
      </td>
      <td>${item.color}</td>
      <td>${item.size}</td>
      <td>${item.quantity}</td>
      <td>$${item.price}</td>
    `;

    cartContainer.appendChild(row);
  });

  cartModal.classList.remove("hidden");
});
