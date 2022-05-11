import ItemCounter from '../itemCount/item-count.component'
import './itemDetailContainer-styles.css'

    const hombres =  [
      {
        id: 30,
        name: 'Chaleco Camuflaje',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 325,
      },
      {
        id: 31,
        name: 'Floral T-shirt',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20,
      },
      {
        id: 32,
        name: 'Manga Larga Blanco con Negro',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25,
      },
      {
        id: 33,
        name: 'Rosa Floral T-shirt',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25,
      },
      {
        id: 34,
        name: 'Manga Larga Jeans',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40,
      },
      {
        id: 35,
        name: 'Camisa Cafe Puntos',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25,
      },
    ]

    const ItemDetailHombres = () => {

    return(
        <div className='products-container'>
            {hombres.map(({imageUrl, name, price, id}) => (
                <div className="product-card-container" key={id}>
                    <img src={imageUrl} alt={`${name}`}/>
                    <div className='footer'>
                        <span className='name'>{name}</span>
                        <span className='price'>Precio $ {price}</span>
                    </div>
                        <ItemCounter stock = {5} initial = {1} className="contador"/>
                </div>
            ))}
            
        </div>
        
    )
    }

export default ItemDetailHombres;