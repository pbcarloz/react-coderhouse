
import SHOP_DATA from '../../shop-data.js'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useContext } from 'react';
import { CartContext } from '../../context/cart.context.jsx';
import ProductCard from '../cart-dropdown/product-card/product-card.component';
import './itemDetailContainer-styles.css'



    const ItemDetailCategory = () => {

    const { setCartDetail } = useContext(CartContext);
        
    // obtengo los parametros en la constante titulo
    const  {titulo}  = useParams();
    // declaro nuevo State para utilizar los params
    const [articulos, setArticulos] = useState([]);

       
    
    // cuando el componente monta, evalua cual es el titulo o param solicitado y da setState al array que haga match con el titulo
    useEffect(() => {     
        // compilo el array de articulos para usarlos con el filtrado de params
        const gorras = SHOP_DATA[0].items;
        const tenis = SHOP_DATA[1].items;
        const chamarras = SHOP_DATA[2].items;
        const mujeres = SHOP_DATA[3].items;
        const hombres = SHOP_DATA[4].items;
        
      switch (titulo) {
        case "Gorras": 
        setArticulos(gorras);
        setCartDetail(gorras);
        break;
        case "Abrigos": 
        setArticulos(chamarras);
        setCartDetail(chamarras);
        break;
        case "Tenis": 
        setArticulos(tenis);
        setCartDetail(tenis);
        break;
        case "Mujeres": 
        setArticulos(mujeres);
        setCartDetail(mujeres);
        break;
        case "Hombres": 
        setArticulos(hombres);
        setCartDetail(hombres);
        break;
        default:
          console.log('Error con el array');
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    // con el statate Articulo, mapea y genera los item details con los nombres, imagenes, stocks y precios.
    return(
        <div className='products-container'>
            {articulos.map((product) => (
                <ProductCard key={product.id} product={product}/>
            ))}          
        </div>
    )
    }

export default ItemDetailCategory;