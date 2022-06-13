import Button from '../../itemCount/item-count.component'
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
            <Button className='boton' stock = {stock} initial = {1} product={product} text='Agregar al Carrito' props='addToCart'/>
    </div>)
}

export default ProductCardDetail;