import React from 'react';
import './categories.styles.css'
import { useState, useEffect } from 'react';


const Categorias = () => {

  const [categories, setCategories] = useState([]);

    useEffect(() => {
      // promesapara obtener las categorias del desafio//
      fetch('https://api.jsonbin.io/b/627721b725069545a32efa5e')
      .then((response) => response.json())
      .then((users) => setCategories(users));
    }, []);
  
    return (
        <div className="categories-container">
        {/* Map para renderizar las categorias del desafio */}
            {categories.map(({title, imageUrl, id}) => (      
                <div className="category-container" key={id}>
                    <div className='background-image' style={{backgroundImage: `url(${imageUrl})`,}} />
                    <div className="category-body-container">
                        <h2>{title}</h2>
                        <p>Comprar</p>
                    </div>
                 </div>

            ))}
            {console.log('rendered')}
        </div>
    );
  }
  
  export default Categorias;