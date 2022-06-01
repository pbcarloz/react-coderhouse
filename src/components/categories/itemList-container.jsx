import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../../services/firebase-utils.js'
import {getDocs, collection } from 'firebase/firestore'
import './itemList-styles.css'

const Categorias = () => {

  const [categories, setCategories] = useState([]);

  const getData = async () => {
    // Coleccion de categorias de firebase
    const coleccion = collection(db,'productos');

      try {
          const data =  await getDocs(coleccion)
          const result = data.docs.map(doc => doc = {id:doc.id, ...doc.data()})
          setCategories(result)
      } catch (err) {
        console.log(err);
      }
  };

  useEffect( () => {
    
    getData();

  }, []);
  
    return (
        <div className="categories-container">
        {/* Map para renderizar las categorias del desafio *******************************************************/}
            {categories.map(({title, imageUrl, id}) => (      
                <div className="category-container" key={id}>
                    <div className='background-image' style={{backgroundImage: `url(${imageUrl})`,}} />
                    <div className="category-body-container">
                        <h2>{title}</h2>
                        <Link to={`/tienda/${title}`} className='link-styling'>
                          Comprar
                        </Link>
                    </div>
                 </div>
            ))}
        </div>
    );
};
  
  export default Categorias;