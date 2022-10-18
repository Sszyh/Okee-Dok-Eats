//this will take in the retrieved information from the ajax request store when the menu list loads, for now in a variable in the future we can set this to session storage as well
//ajax returns a {menuList: [menu of current rest] }

export function sumTime(ajaxObjInCart, quantity){
  let totalTime = 0;
  if (quantity > 0) {
   for (const item of ajaxObjInCart) {
    totalTime += (item.time_to_prepare * quantity)
  }
  return totalTime;
}

}
