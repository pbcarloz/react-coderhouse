import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './itemList-styles.css'
import { db } from '../../services/firebase-utils.js'
import {getDocs, collection } from 'firebase/firestore'

const Categorias = () => {

const [categories, setCategories] = useState([]);


  const getData = async () => {
      
    const coleccion = collection(db,'productos');

    try {
        const data =  await getDocs(coleccion)
        const result = data.docs.map(doc => doc = {id:doc.id, ...doc.data()})
        setCategories(result)
        console.log(categories.id);
    } catch (err) {
      console.log(err);
    }

  }

    useEffect( () => {
      // promesapara obtener las categorias del desafio *********************************************//
      // fetch('https://api.jsonbin.io/b/627721b725069545a32efa5e/1')
      // .then((response) => response.json())
      // .then((users) => setCategories(users));
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
                    {console.log(title)}
                 </div>
            ))}
        </div>
    );
  }
  
  export default Categorias;