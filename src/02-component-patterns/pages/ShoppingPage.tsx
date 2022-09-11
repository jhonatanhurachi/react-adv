import { ProductImage, ProductTitle, ProductButtons, ProductCard } from '../components'
import '../styles/custom-styles.css';

const product = {
    id: '1',
    title: 'Coffee Mug',
    img: './coffee-mug.png'
}

export const ShoppingPage = () => {
    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
            }}>
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons />
                </ProductCard>
                <ProductCard product={product} className='bg-dark'>
                    <ProductImage img={product.img} className='custom-image'/>
                    <ProductTitle title={product.title} className='text-white text-bold'/>
                    <ProductButtons className='custom-buttons' />
                </ProductCard>
                <ProductCard product={product}>
                    <ProductCard.Image />
                    <ProductCard.Title />
                    <ProductCard.Buttons style={{
                        display: 'flex',
                        justifyContent: 'end'
                    }}/>
                </ProductCard>
            </div>
        </div>
    )
}
