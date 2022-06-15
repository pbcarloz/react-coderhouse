import { useNavigate } from 'react-router-dom';
import QuantityButton from '../../item-quantity/item-quantity.component';
import './product-card-detail.style.css'

const ProductCardDetail = ({product}) => {
    
    const {name, price, imageUrl, stock, text} = product;
    const navigate = useNavigate();
    return (
    <div className="product-detail-container">
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='text'>{text}</span>
            <span className='stock'>{`Stock disponible: ${stock} piezas`}</span>
            <span className='price'>{`Precio: $ ${price}`}</span>

            <QuantityButton producto={product} stock={stock} />
            <button onClick={() => navigate(-1)} className='navigate-button'>Volver</button>
        </div>
            
    </div>
    )
}

export default ProductCardDetail;