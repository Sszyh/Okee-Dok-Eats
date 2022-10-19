//this will take in the retrieved information from the ajax request store when the menu list loads, for now in a variable in the future we can set this to session storage as well
//ajax returns a {menuList: [menu of current rest] }

export default function sumTime(cart){
  return cart.cartItems.reduce((acc, obj) => {return acc + (obj.prepareTime * obj.quantity) }, 0)
}
