import { useDispatch, useSelector } from "react-redux";
import ProductsUnic from "./ProductsUnic";
import Header from "../header/Header";
import './Products.css';

const Products = () => {
    const products = useSelector(state => state.products.productsList);
    const unicChoosen = useSelector(state => state.products.unicChoosenPeoduct);
    const choosen = useSelector(state => state.products.choosenProducts);


    const dispatch = useDispatch();

    const addDispachHandler = (product) => {
        dispatch({ type: "ADD_PRODUCT_QUANTITY", });
        dispatch({ type: "ADD_COOSEN_PRODUCT", product });
        dispatch({ type: "ADD_COOSEN_UNIC_PRODUCT", product });
    };

    const removeHandler = (product) => {
        let unicRemoved = unicChoosen.filter(item => item !== product);
        let removed = choosen.filter(item => item !== product);

        dispatch({ type: "REMOVE_COOSEN_PRODUCT", removed});
        dispatch({ type: "REMOVE_COOSEN_UNIC_PRODUCT", unicRemoved});
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