import { useDispatch, useSelector } from "react-redux";
import ProductsUnic from "./ProductsUnic";
import Header from "../header/Header";
import './Products.css';

const Products = () => {
    const products = useSelector(state => state.products.productsList);

    const dispatch = useDispatch();

    const addDispachHandler = (product) => {

        dispatch({ type: "ADD_PRODUCT_QUANTITY", });
        dispatch({ type: "ADD_COOSEN_PRODUCT", product });
        // dispatch({ type: "FILTER_COOSEN", choosen});
    };

    const removeHandler = () => {
        dispatch({ type: "REMOVE_COOSEN_PRODUCTS"});
        console.log("remove")
    };

    return (
        <div className="Products">
            <Header />
            <div className="content">
                {products.map((product, index) =>
                    <ProductsUnic product={product} index={index} addDispachHandler={addDispachHandler} removeHandler={removeHandler} />
                )}
            </div>
        </div>
    );
};
 
export default Products;