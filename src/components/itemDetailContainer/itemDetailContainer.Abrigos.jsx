import ItemCounter from '../itemCount/item-count.component'
import './itemDetailContainer-styles.css'

    const abrigos =  [
      {
        id: 18,
        name: 'Chamarra Jean Negro',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 125,
      },
      {
        id: 19,
        name: 'Chamarra Jean Azul',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 90,
      },
      {
        id: 20,
        name: 'Chamarra Jean Cielo',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 90,
      },
      {
        id: 21,
        name: 'Abrigo Piel Cafe',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 165,
      },
      {
        id: 22,
        name: 'Abrigo Lana',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 185,
      },
    ]

    const ItemDetailAbrigos = () => {

    return(
        <div className='products-container'>
            {abrigos.map(({imageUrl, name, price, id}) => (
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

export default ItemDetailAbrigos;