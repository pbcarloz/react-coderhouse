
const SignUpForm = () => {
    return (
        <div>
            <h1>Termina tu Compra</h1>
            <form onSubmit={() => {}}>
                <label>Nombre Completo</label>
                <input required type="text"/>

                <label>Email</label>
                <input required type="email"/>

                <label>Telefono</label>
                <input required type="number"/>
                <button type="submit">Terminar Compra</button>
            </form>
        </div>
    )
}

export default SignUpForm;