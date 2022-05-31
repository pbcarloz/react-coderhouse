import { useState } from "react";
import './formulario.style.css'


const defaultFormFields = {
        displayName: '',
        email: '',
        telefono: ''
    }

const SignUpForm = () => {

    const[formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, telefono} = formFields;

    console.log(formFields)

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormFields({...formFields, [name]: value})
    }

    return (
        <div className="form-container">
            <span>Termina tu Compra !</span>
            <form onSubmit={() => {}} className='group'>
                <label className='form-input-label' >Nombre</label>
                <input required type="text" onChange={handleChange} name="displayName" value={displayName} className='form-input'/>

                <label className='form-input-label' >Email</label>
                <input required type="email" onChange={handleChange} name="email" value={email} className='form-input'/>

                <label className='form-input-label' >Telefono</label>
                <input required type="number" onChange={handleChange} name="telefono" value={telefono} className='form-input'/>

                <button type="submit">Terminar Compra</button>
            </form>
        </div>
    )
}

export default SignUpForm;