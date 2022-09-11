import { useContext } from "react";
import { ProductContext } from "./ProductCard";
import noImage from '../assets/no-image.jpg';
import styles from '../styles/styles.module.css';

export const ProductImage = ({ img = '' }) => {
    const { product } = useContext(ProductContext);
    let imgToShow = img ? img : product.img ? product.img : noImage;
    return (
        <img src={imgToShow} alt="Product" className={styles.productImg} />
    )
}