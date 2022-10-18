export default function $buildCartTable(cartItemsArray) {
  let $cartRow
  for (let i = 0; i < cartItemsArray.length; i++) {
    $cartRow +=
    `<tr>
      <td>${cartItemsArray[i].name}</td>
      <td>${cartItemsArray[i].quantity}</td>
      <td>$ ${cartItemsArray[i].price.toFixed(2)}</td>
    </tr>
    `
  }
  return $cartRow;
}
