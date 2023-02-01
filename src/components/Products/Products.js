import { useDispatch, useSelector } from "react-redux";
import ProductsUnic from "./ProductsUnic";
import Header from "../header/Header";
import './Products.css';

const Products = () => {
    const dispatch = useDispatch();

    const addDispachHandler = (product) => {
        dispatch({ type: "ADD_PRODUCT", });
        dispatch({ type: "PRODUCT", product });
    }

    return (
        <div className="Products">
            <Header />
            <div className="content">
            <ProductsUnic addDispachHandler={addDispachHandler} />
            </div>
        </div>
    );
};
 
export default Products;