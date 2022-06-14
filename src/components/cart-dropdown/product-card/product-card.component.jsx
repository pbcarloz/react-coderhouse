
import './product-card.style.css'
import { Link } from 'react-router-dom';
import Button from '../../itemCount/item-count.component'


const ProductCard = ({product}) => {
    
    const {name, price, imageUrl, stock, id} = product;
    
    return (
    <div className="product-card-containers">
        <img src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
            <span className='name'>{name}</span>
            <span className='name'>{`Stock: ${stock}`}</span>
            <span className='price'>{`$ ${price}`}</span>
        </div>
            <div className='link'>
                <Link to={`/tienda/producto/${id}`} className='link-styling'>
                            Ver Detalles
                </Link>
            </div>
    </div>)
}

export default ProductCard;