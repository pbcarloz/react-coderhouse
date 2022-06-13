
import './item-detailed.styles.css'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context';
import ProductCardDetail from './product-card-detail/product-card-detail.component';


const ItemDetailed = () => {

    const {cartDetail } = useContext(CartContext);
    const {id} = useParams();

    // eslint-disable-next-line
    const itemDetail = cartDetail.filter((e) => e.id == id);
    
    console.log(itemDetail[0]);

    return (
        <ProductCardDetail product={itemDetail[0]} />
    )
}

export default ItemDetailed;