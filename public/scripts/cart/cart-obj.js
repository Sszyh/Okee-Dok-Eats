//this allows to create a carr item and store them in the entire "cart"
//this cart object now contains an array of cart items,
// this cart needs to be stored in session storage and then sent to the cart page (with ability to modify the items?)

export default class Cart {
  constructor() {
    this.cartItems = [];
  }

  saveCart() {
    sessionStorage.setItem(`order`, JSON.stringify(this.cartItems))
  }

  loadCart() {
    const order = JSON.parse(sessionStorage.getItem('order'))
    console.log(order);
    return order !== null ? order : null;
  }

  //passed a CartItem obj
  addItem(item) {
    // console.log(item)
    // if exists only update quantity
    const alreadyExists = this.doesItemExist(item);
    // const quantity = item.quantity;
    // console.log(quantity);
    // const indexOfItemInCart = this.cartItems.indexOf(item.menuItemId)
    if (alreadyExists) {
      const itemToUpdate = this.cartItems.filter(x => x.menuItemId === x.menuItemId)
      return itemToUpdate.quantity = item.quantity
    } else {
    this.cartItems.push(item);
    }
  }

  doesItemExist(oneCartItem) {
    return this.cartItems.some(x => x.menuItemId === oneCartItem.menuItemId)
  }

  removeItem(oneCartItem) {
    this.cartItems = [...this.cartItems].filter(x => x.menuItemId !== oneCartItem.menuItemId)
  }

  resetCart() {
    this.cartItems = [];
  }

  // testing and debugging
  showCart() {
    console.log(this.cartItems);
  }
}




// const testCart = new Cart();
/*
const testItem2 = new CartItem ('pizza', 8000, 15, 2)
const testItem3 = new CartItem ('burger', 1, 45, 3)
const testItem4 = new CartItem('steak', 3, 25, 1)

console.log(testItem1, testItem2, testItem3)

testCart.resetCart();
testCart.showCart();
testCart.addItem(testItem2)
testCart.addItem(testItem3)
testCart.addItem(testItem4)

testCart.showCart()

testCart.addItem(testItem1)

testCart.showCart()

*/
// const testItem1 = new CartItem('steak', 4, 25, 1)

// testCart.addItem(testItem1)

// testCart.saveCart();
// testCart.loadCart()



