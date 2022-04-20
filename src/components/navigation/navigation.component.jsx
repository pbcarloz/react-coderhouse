import 'bootstrap/dist/css/bootstrap.min.css';
import { ReactComponent as CrwnLogo } from '../../assets/crown.svg'
import './navigation.styles.css'
import CartWidget from './cart-widget.component';

const Navigation = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="main-logo" href="/"><CrwnLogo /></a>
            <a className="navbar-brand" href="/">Crown Clothing</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                    <a className="nav-link" href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Nosotros</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#">Tienda</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#"><CartWidget /></a>
                    </li>
                    
                </ul>
            </div>
        </nav>

    );
}

export default Navigation;