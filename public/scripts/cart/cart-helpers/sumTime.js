//this will take in the retrieved information from the stored ajax request
//ajax returns a {menuList: [menu of current restaurant] }

export default function sumTime(cart){
  return cart.cartItems.reduce((acc, obj) => {return acc + (obj.prepareTime * obj.quantity) }, 0)
}
