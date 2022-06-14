import QuantityButton from '../../item-quantity/item-quantity.component';
import './product-card-detail.style.css'

const ProductCardDetail = ({product}) => {
    
    const {name, price, imageUrl, stock} = product;
    
    return (
    <div className="product-detail-container">
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='name'>{`Stock: ${stock}`}</span>
            <span className='price'>{`$ ${price}`}</span>
            
        </div>
            <QuantityButton producto={product} stock={stock} />
    </div>
    )
}

export default ProductCardDetail;