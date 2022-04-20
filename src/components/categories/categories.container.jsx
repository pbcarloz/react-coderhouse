import React from 'react';
import './categories.styles.css'

const Home = () => {
    const categories = [
      {
        "id": 1,
        "title": "Gorras",
        "imageUrl": "https://i.ibb.co/cvpntL1/hats.png"
      },
      {
        "id": 2,
        "title": "Jackets",
        "imageUrl": "https://i.ibb.co/px2tCc3/jackets.png"
      },
      {
        "id": 3,
        "title": "Sneakers",
        "imageUrl": "https://i.ibb.co/0jqHpnp/sneakers.png"
      },
      {
        "id": 4,
        "title": "Mujeres",
        "imageUrl": "https://i.ibb.co/GCCdy8t/womens.png"
      },
      {
        "id": 5,
        "title": "Hombres",
        "imageUrl": "https://i.ibb.co/R70vBrQ/men.png"
      }
    ]
  
    return (
        <div className="categories-container">
            {categories.map(({title, imageUrl, id}) => (      
                <div className="category-container" key={id}>
                    <div className='background-image' style={{backgroundImage: `url(${imageUrl})`,}} />
                    <div className="category-body-container">
                        <h2>{title}</h2>
                        <p>Comprar</p>
                    </div>
                 </div>

            ))}
        </div>
    );
  }
  
  export default Home;