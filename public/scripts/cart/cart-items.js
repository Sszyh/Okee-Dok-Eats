export default class CartItem {
  constructor(name, quantity, price, prepareTime, menuItemId) {
    this.name = name;
    this.quantity = quantity;
    this.price = price;
    this.prepareTime = prepareTime;
    this.menuItemId = menuItemId;
  }
}
