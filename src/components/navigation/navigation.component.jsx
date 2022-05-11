import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.css'
import CartWidget from './cart-widget.component';
import { Fragment } from 'react';
import { Outlet, Link } from "react-router-dom"

const Navigation = () => {
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
                    <li className="nav-item">
                    <a className="nav-link" href="#"><CartWidget /></a>
                    </li>                  
                </ul>
            </div>
        </nav>
            <Outlet />
        </Fragment>
    );
}

export default Navigation;