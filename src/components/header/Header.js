import { Link } from "react-router-dom";
import shoppingBasket from '../imgs/shopping-cart.png';
import shopLogo from '../imgs/icons-shop.png';
import { useSelector } from "react-redux";
import "./Header.css"

const Header = () => {
    const quantity = useSelector((state) => state.products.quantity);

    return ( 
        <div className="header">
                <div className="icon">
                    <Link to="/">
                    <img src={shopLogo} alt="basket" />
                    </Link>
                </div>
                <div className="serch">
                    <input className="serchInput" type="text" placeholder="search products"></input>
                </div>
                <div className="productQuantity">
                    <Link to="/bucket">
                        <div className="basketIconContainer">
                            <img src={shoppingBasket} alt="basket" />
                            <div style={{display: !quantity ? 'none' : 'flex'}} className="iconQuantity">{quantity}</div>
                        </div>
                    </Link>
                </div>
            </div>
     );
}
 
export default Header;