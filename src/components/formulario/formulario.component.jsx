import { useState, useContext } from "react";
import { CartContext } from "../../context/cart.context";
import {collection, addDoc} from 'firebase/firestore'
import { db } from "../../services/firebase-utils";
import Swal from "sweetalert2";
import './formulario.style.css'





const SignUpForm = () => {

    const {cartItems, cartTotal, setCartItems } = useContext(CartContext);
    
    const ordersCollection = collection(db, "orders")

    const defaultFormFields = {
        displayName: '',
        email: '',
        telefono: '',
        items: cartItems,
        total: cartTotal,
    }

    const[formFields, setFormFields] = useState(defaultFormFields);

    const { displayName, email, telefono} = formFields;

    console.log(formFields)

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    const validarInput = (e) => {
        e.preventDefault();

        const regName =  /^[a-zA-Z  ]+$/ ;

        if (displayName === '' || 
        !displayName.match(regName) || 
        email === '' ||
        !String(email).toLowerCase().match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            ) ||
        telefono === '' ||
        telefono.length < 8
         ) {
            Swal.fire({
                icon: 'error',
                title: `Tu informacion esta incorrecta !`,
                text: `Ingresa correctamente tus datos`,
                footer: ''
              })  
        } else {
            orderHandler(e)
        }
    }

    const orderHandler = async (e) => {
        
        e.preventDefault();
        let ticket = '';
        await addDoc(ordersCollection, formFields).then(({id}) => ticket = id)
        Swal.fire({
            icon: 'success',
            title: 'Compra Terminada!',
            text: `El Codigo de tu orden es el: ${ticket} `,
            showConfirmButton: false,
            footer: '<a href="/">Finalizar</a>'
          }).then( 
              setFormFields(defaultFormFields),
              setCartItems([])
          )
    }

    return (
        <div className="form-container">
            <span>Termina tu Compra !</span>
            <form  className='group'>
                <label className='form-input-label' >Nombre</label>
                <input required type="text" onChange={handleChange} name="displayName" value={displayName} className='form-input'/>

                <label className='form-input-label' >Email</label>
                <input required type="email" onChange={handleChange} name="email" value={email} className='form-input'/>

                <label className='form-input-label' >Telefono</label>
                <input required type="number" onChange={handleChange} name="telefono" value={telefono} className='form-input'/>

                <button onClick={validarInput} >Terminar Compra</button>
            </form>
        </div>
    )
}

export default SignUpForm;