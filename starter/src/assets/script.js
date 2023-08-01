/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [
 {
  name:'Cherry',
  price: 1.50,
  quantity:0,
  productId: 1,
  image: '../src/images/cherry.jpg',
},
{
  name:'Orange',
  price: 2.50,
  quantity:0,
  productId: 2,
  image:'../src/images/orange.jpg',
},
{
  name:'Strawberry',
  price: 1.50,
  quantity:0,
  productId: 3,
  image: '../src/images/strawberry.jpg',
},
{
  name:'Banana',
  price: 2.50,
  quantity:0,
  productId: 4,
  image: '../src/images/banana.jpg',
},
];
/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
   - banana.jpg by Mockup Graphics
   
*/
 
/* Declare an empty array named cart to hold the items in the cart */
const cart = [];

/* THIS FUNCTIONS WORKS DO NOT TOUCH IT*/
function addProductToCart(productId) {
  // Find the product with the given productId in the products array
  const productToAdd = products.find((product) => product.productId === productId);
  if (!productToAdd) {
    return false;
  }
  // Check if the product is already in the cart
  const currentCart = cart.findIndex((item) => item.productId === productId);
  if (currentCart !== -1) {
    // If the product is already in the cart, increase its quantity
    cart[currentCart].quantity++;
  } else {
    // If the product is not in the cart, add it with a quantity of 1
    cart.push({ ...productToAdd, quantity: 1 });
  }
  // Return true to indicate that the product was added to the cart
  return true;
};  
/* THIS FUNCTION WORKS TOO DON'T TOUCH IT
*/
function increaseQuantity(productId) {
  // Find the product in the 'products' array based on the productId
  const productToIncrease = products.find((product) => product.productId === productId);
  // Check if the product is already in the cart
  const cartIndex = cart.findIndex((item) => item.productId === productId);
  if (cartIndex !== -1) {
    // If the product is already in the cart, increase its quantity
    cart[cartIndex].quantity++;
  } else {
    // If the product is not in the cart, add it with a quantity of 1
    cart.push({ ...productToIncrease, quantity: 1 }); // Add quantity property to the product
  }
}

/* THIS IS GREAT DON'T TOUCH IT
*/
function decreaseQuantity(productId) {
  // Check if the product is already in the cart
  const cartIndex = cart.findIndex((item) => item.productId === productId);
  if (cartIndex !== -1) {
    // If the product is in the cart, check if its quantity is greater than or equal to 2
    if (cart[cartIndex].quantity >= 2) {
      // If the quantity is greater than or equal to 2, decrease it by 1
      cart[cartIndex].quantity--;
    } else {
      // If the quantity is 1, remove
      cart[cartIndex].quantity = 0;
      cart.splice(cartIndex,1);
    }
  }
}
/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/
function removeProductFromCart(productId) {
  // Check if the product is in the cart based on its presence in the 'cart' array
  const productIndexInCart = cart.findIndex(item => item.productId === productId);
  if (productIndexInCart !== -1) {
    // If the product is in the cart, set its quantity to 0 to effectively remove it from the cart
    cart[productIndexInCart].quantity = 0;
    cart.splice(productIndexInCart, 1);
  }
}

function cartTotal() {
  let total = 0; 
cart.forEach(product => {
  total += product.price * product.quantity;
});
return total;
};
/* Create a function called emptyCart that empties the products from the cart */
function emptyCart(){
  cart.splice(0,cart.length);
};
/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
let remaining = 0;
function pay(amount){
   remaining = amount - cartTotal();
   return remaining;
};
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/


module.exports = {
   products,
   cart,
   addProductToCart,
   increaseQuantity,
   decreaseQuantity,
   removeProductFromCart,
   cartTotal,
   pay, 
   emptyCart,
 // currency
};
