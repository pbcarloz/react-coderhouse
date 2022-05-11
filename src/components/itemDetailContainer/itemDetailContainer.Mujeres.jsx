import ItemCounter from '../itemCount/item-count.component'
import './itemDetailContainer-styles.css'

    const mujeres =  [
      {
        id: 23,
        name: 'Tanktop Azul',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25,
      },
      {
        id: 24,
        name: 'Blusa Floral',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20,
      },
      {
        id: 25,
        name: 'Vestido Floral',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 80,
      },
      {
        id: 26,
        name: 'Vesstido Red Dots',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 80,
      },
      {
        id: 27,
        name: 'Sweater Rayas',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45,
      },
      {
        id: 28,
        name: 'Jumper Mostaza',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 135,
      },
      {
        id: 29,
        name: 'Blusa Marfil',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 20,
      },
    ]

    const ItemDetailMujeres = () => {

    return(
        <div className='products-container'>
            {mujeres.map(({imageUrl, name, price, id}) => (
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

export default ItemDetailMujeres;