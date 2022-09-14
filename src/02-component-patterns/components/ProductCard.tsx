import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext, ReactElement } from "react";
import { ProductContextProps, Product, onChangeArgs, InitialValues, ProductCartHandlers } from '../interfaces/interfaces';

export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCartHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues?: InitialValues;
}

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export const ProductCard = ({
  product,
  onChange,
  children,
  className,
  value,
  style,
  initialValues
}: Props) => {
  const { counter, increaseBy, reset, isMaxCountReached, maxCount } = useProduct({onChange, product, value, initialValues});
  return (
    <Provider value={{ product, counter, increaseBy, maxCount: initialValues?.maxCount }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children({
          count: counter,
          isMaxCountReached,
          maxCount,
          product,
          increaseBy,
          reset
        })}
      </div>
    </Provider>
  );
};
