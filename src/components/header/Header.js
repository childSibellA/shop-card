import shoppingBasket from '../imgs/shopping-cart.png';
import shopLogo from '../imgs/icons-shop.png';
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css"

const Header = () => {
    const allChoosen = useSelector(state => state.products.choosenProducts);

    

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
                        <div style={{display: !allChoosen.length ? 'none' : 'flex'}} className="iconQuantity">{allChoosen.length}</div>
                    </div>
                </Link>
            </div>
        </div>
     );
}
 
export default Header;