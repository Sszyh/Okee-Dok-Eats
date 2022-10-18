export default function filterMenuItems(ajaxMenu, cartToFilter) {
  return ajaxMenu.menuList.filter(y => {
     return cartToFilter.cartItems.some((x) => {
       return x.menuItemId === y.id
     })
   })
 }
