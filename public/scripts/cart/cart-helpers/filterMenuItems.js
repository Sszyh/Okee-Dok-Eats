export default function filterMenuItems(ajaxMenu, cartToFilter) {
  return ajaxMenu.menuList.filter(y => {
     return cartToFilter.cartItems.some((x) => {
       return x.menuItemId === y.id
     })
   })
 }


 //function which will compare two arrays of objects and return only those items which exist in the second argument passed
