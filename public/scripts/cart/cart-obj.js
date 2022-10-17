//this allows to create a carr item and store them in the entire "cart"
//this cart object now contains an array of cart items,
// this cart needs to be stored in session storage and then sent to the cart page (with ability to modify the items?)

export default class Cart {
  constructor() {
    this.cartItems = [];
  }
//saving and loading to session storage
  saveCart() {
    sessionStorage.setItem(`order`, JSON.stringify(this.cartItems))
  }

  loadCart() {
    const order = JSON.parse(sessionStorage.getItem('order'))
    return order !== null ? order : null;
  }

  //passed a CartItem obj
  addItem(item) {
    // if exists only update quantity
    const alreadyExists = this.doesItemExist(item);
    const newQuantity = item.quantity;
    if (alreadyExists) {
      for (const ele of this.cartItems) {
        if (ele.menuItemId === item.menuItemId) {
          ele.quantity = newQuantity;
          return ele;
        }
      }
    } else {
    this.cartItems.push(item);
    }
  }

  doesItemExist(oneCartItem) {
    return this.cartItems.some(x => x.menuItemId === oneCartItem.menuItemId)
  }

  removeItem(id) {
    this.cartItems = [...this.cartItems].filter(x => x.menuItemId !== id)
  }

  resetCart() {
    this.cartItems = [];
  }

  showCart() {
    return this.cartItems;
  }
}
