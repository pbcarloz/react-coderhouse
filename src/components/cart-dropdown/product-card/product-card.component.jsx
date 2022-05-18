import ItemCounter from '../../itemCount/item-count.component'
import { useContext } from 'react';
import { CartContext } from '../../../context/cart.context';
import './product-card.style.css'

const ProductCard = ({product}) => {
    
    const {name, price, imageUrl} = product;
    
    const {addItemToCart} = useContext(CartContext)

    const addProductToCart = () => addItemToCart(product);

    return (<div className="product-card-container">
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='price'>{price}</span>
        </div>
            <ItemCounter stock = {5} initial = {1} className="contador" product={product}/>
    </div>)
}

export default ProductCard;