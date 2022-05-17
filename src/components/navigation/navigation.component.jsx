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
            <a className="navbar-brand" href="/">Crown Clothing</a>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Tienda</a>
                    </li>     
                </ul>
            </div>
            <CartIcon />
            {isCartOpen && <CartDropdown />}  
        </nav>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;