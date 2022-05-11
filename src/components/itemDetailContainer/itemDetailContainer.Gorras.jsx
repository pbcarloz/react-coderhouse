import ItemCounter from '../itemCount/item-count.component'
import './itemDetailContainer-styles.css'

    const gorras = [
        {
          id: 1,
          name: 'Sombrero Cafe',
          imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
          price: 25,
        },
        {
          id: 2,
          name: 'Gorro Azul',
          imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
          price: 18,
        },
        {
          id: 3,
          name: 'Vaquero Cafe',
          imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
          price: 35,
        },
        {
          id: 4,
          name: 'Sombrero Gris',
          imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
          price: 25,
        },
        {
          id: 5,
          name: 'Gorro Verde',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          price: 18,
        },
        {
          id: 6,
          name: 'Gorra de Palma',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 14,
        },
        {
          id: 7,
          name: 'Gorro Rojo',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18,
        },
        {
          id: 8,
          name: 'Gorra Wolf',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14,
        },
        {
          id: 9,
          name: 'Gorra Cielo',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16,
        }
      ]

    const ItemDetailGorras = () => {

    return(
        <div className='products-container'>
            {gorras.map(({imageUrl, name, price, id}) => (
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

export default ItemDetailGorras;