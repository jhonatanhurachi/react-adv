import { ProductButtons } from './ProductButtons';
import { ProductCard as ProductCardHOC } from './ProductCard';
import { ProductImage } from './ProductImage';
import { ProductTitle } from './ProductTitle';
export { ProductImage } from './ProductImage';
export { ProductTitle } from './ProductTitle';
export { ProductButtons } from './ProductButtons';

export const ProductCard = Object.assign(ProductCardHOC, {
    Title: ProductTitle,
    Image: ProductImage,
    Button: ProductButtons
})