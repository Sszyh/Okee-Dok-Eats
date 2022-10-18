export default function $buildCartTable(fromAjax, fromSession) {
  const $cartRow = $(`
  <tr>
    <td>${fromAjax.item}</td>
    <td>${fromSession.quantity}</td>
    <td>${fromAjax.price}</td>
  </tr>
`)

  return $cartRow;
}
