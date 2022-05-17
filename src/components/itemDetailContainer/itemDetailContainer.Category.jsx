
import ItemCounter from '../itemCount/item-count.component'
import SHOP_DATA from '../../shop-data.js'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './itemDetailContainer-styles.css'


    const ItemDetailCategory = () => {
    
    const { titulo } = useParams();
    
    const [articulos, setArticulos] = useState([]);

    const gorras = SHOP_DATA[0].items;
    const tenis = SHOP_DATA[1].items;
    const chamarras = SHOP_DATA[2].items;
    const mujeres = SHOP_DATA[3].items;
    const hombres = SHOP_DATA[4].items;


    useEffect(() => {       
      switch (titulo) {
        case "Gorras": 
        setArticulos(gorras);
        break;
        case "Abrigos": 
        setArticulos(chamarras);
        break;
        case "Tenis": 
        setArticulos(tenis);
        break;
        case "Mujeres": 
        setArticulos(mujeres);
        break;
        case "Hombres": 
        setArticulos(hombres);
        break;
        default:
          console.log('Error con el array');
      }

    }, [])


    return(
        <div className='products-container'>
            {articulos.map(({imageUrl, name, price,stock, id}) => (
                <div className="product-card-container" key={id}>
                    <img src={imageUrl} alt={`${name}`}/>
                    <div className='footer'>
                        <span className='name'>{name}</span>
                        <span className='stock'>Stock: {stock}</span>
                        <span className='price'>Precio $ {price}</span>
                    </div>
                        <ItemCounter stock = {5} initial = {1} className="contador" />
                </div>
            ))}
            
        </div>
        
    )
    }

export default ItemDetailCategory;