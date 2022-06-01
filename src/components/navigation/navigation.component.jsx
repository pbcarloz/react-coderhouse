import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { CartContext } from '../../context/cart.context';
import { Fragment, useContext } from 'react';
import { Outlet, Link } from "react-router-dom"
import './navigation.styles.css'



const Navigation = () => {
    const { isCartOpen } = useContext(CartContext);
    
    return (
        <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to='/'>
                <CrwnLogo className="main-logo"/>
            </Link>
            <span className="navbar-brand">Rey Clothing</span>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <span className="nav-link" href="#">Bienvenido a la tienda con la mejor moda contemporanea mas accesible !</span>
                    </li>  
                </ul>
            </div>
                <span >Carrito</span>
            <CartIcon />
            {isCartOpen && <CartDropdown />}  
        </nav>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;