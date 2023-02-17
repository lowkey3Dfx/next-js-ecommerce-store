import { cookies } from 'next/headers';

export default function ItemsInCart() {
  const cart = cookies().get('productCookie');
  let itemInCart = [];
  if (cart) {
    itemInCart = JSON.parse(cart.value);
  }

  let amountOfItemsInCart = 0;
  for (let i = 0; i < itemInCart.length; i++) {
    const item = itemInCart[i];
    if (item) {
      amountOfItemsInCart += item.amount;
    }
  }

  return <span data-test-id="cart-count">{amountOfItemsInCart}</span>;
}
