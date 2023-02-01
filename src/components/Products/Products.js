import { useDispatch, useSelector } from "react-redux";
import Header from "../header/Header";
import './Products.css';

const Products = () => {
    const products = useSelector(state => state.products.productsList);
    const dispatch = useDispatch();

    return (
        <div className="Products">
            <Header />
            <div className="content">
                {products.map(product =>
                    <div className="productBox" key={product.id}>
                        <div className="productImg">img</div>
                        <p className="productName">{product.name}</p>
                        <div className="priceAndBuy">
                            <div className="productPrice">{product.price}$</div>
                            <div onClick={() => {
                                dispatch({
                                    type: "ADD_PRODUCT",
                                });
                                dispatch({
                                    type: "PRODUCT",
                                    product
                                });
                            }
                            } className="addBascetBtn">add in bascet</div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
 
export default Products;