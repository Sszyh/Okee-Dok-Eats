// take in the cart object loop through and sum every items price
//returns a subtotal
export default function sumPrice(cartObj) {
  let subTotal = 0;
  for (const item of cartObj.cartItems) {
    subTotal += (item.price * item.quantity)
  }
return subTotal;
}
