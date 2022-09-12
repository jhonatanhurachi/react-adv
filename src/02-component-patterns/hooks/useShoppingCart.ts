import { useState } from "react";
import { onChangeArgs, ProductInCart } from "../interfaces/interfaces";
import { products } from "../data/products";

export const useShoppingCart = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ product, count }: onChangeArgs) => {
    setShoppingCart((oldShoppingCart) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShoppingCart;
        return { ...rest };
      }
      return {
        ...oldShoppingCart,
        [product.id]: { ...product, count },
      };
    });
  };
  return {
    shoppingCart,
    onProductCountChange,
    products,
  };
};
