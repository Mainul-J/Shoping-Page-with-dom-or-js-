console.log('connected..');
const ringButton =document.querySelectorAll('.ring-button');
for(let i=0 ; i<ringButton.length; i++){
    const ringBtn = ringButton[i];
    ringBtn.addEventListener('click',function(event){
        const color = event.target.id.replace("-color", "");
        for(let j=0; j<ringButton.length; j++){
            ringButton[j].classList.remove('border-purple-600');
            // ringButton[j].classList.add('border-white');
        }
        event.target.classList.add('border-purple-600');
        event.target.classList.remove('border-white');
    const productImg = document.getElementById('product-image');
    // console.log(productImg);
    productImg.src = "../images/"+color+".png";
    })
}

// size add color 
// function selectWristSize (size){
//     const sizes = ["s", "M","L","XL"];
//     for(let i = 0 ; i<sizes.length; i++){
//         console.log(sizes[i]);
//         const btn = document.getElementById('size-'+sizes[i])

//         if (size === sizes[i]) {
//             btn.classList.add('border-purple-600')
//         }else{
//             btn.classList.remove('borer-purple-600')
//         }
//     }
// }
function selectWristSize(size) {
    const sizes = ['S','M','L','XL'];
    for(let i = 0 ; i<sizes.length; i++){
        const button = document.getElementById('size-'+sizes[i]);
        const element = sizes[i];
        if (size === element) {
            button.classList.add('border-purple-600')
        } else {
            button.classList.remove('border-purple-600')
            
        }
    }
}

// quantity btn 
const quantityBtn = document.querySelectorAll('.quantity-button');
for (const btn of quantityBtn) {
    // console.log(btn);
    
    btn.addEventListener('click',function(event){
    const amount = event.target.innerText === '+'? 1: -1;
    console.log(amount);
        let currentQuantity = parseInt(document.getElementById ('quantity').innerText);
        console.log(currentQuantity);
        newQuantity = Math.max(0, currentQuantity+ amount);
        console.log(newQuantity);
        document.getElementById('quantity').innerText = newQuantity;
    });
}
// ADD TO CART 
let cartCount = 0 ;
document.getElementById('add-to-cart').addEventListener('click',function () {
    const checkoutContainer = document.getElementById('checkout-container');
    const quantity = parseInt(document.getElementById('quantity').innerText);
    if(quantity > 0){
        checkoutContainer.classList.remove('hidden');
        cartCount = cartCount + quantity
    document.getElementById('cart-count').innerText = cartCount;
    }else{
        alert('Please select at last 1 product')
    }
})