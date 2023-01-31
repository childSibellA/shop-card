import { useSelector, useDispatch } from "react-redux";
import './Products.css';
import PRODACTS_LIST from "./ProductList";

const Products = () => {
    const quantity = useSelector((state) => state.products.quantity);
    // const dispatch = useDispatch();

    console.log(quantity);

    // dispatch({
    //     type: "ADD_PRODUCT",
    // });
    
    console.log(quantity);

    return (
        <div className="Products">
            <div className="header">
                <div className="icon">shop name</div>
                <div className="serch">
                    <input className="serchInput" type="text" placeholder="search products"></input>
                </div>
                <div className="productQuantity">0</div>
            </div>
            <div className="content">
                {PRODACTS_LIST.map(product =>
                    <div className="productBox">
                        <div className="productImg">img</div>
                        <p className="productName">{product.name}</p>
                        <div className="productPrice">{product.price}$</div>
                        <button>buy</button>
                    </div>
                )}
            </div>
        </div>
    );
};
 
export default Products;