import { useSelector, useDispatch } from "react-redux";

const Products = () => {
    const quantity = useSelector((state) => state.products.quantity);
    const dispatch = useDispatch();

    console.log(quantity);

    dispatch({
        type: "ADD_PRODUCT",
    });
    
    console.log(quantity);

    return (
        <div className="Products">
            <div className="header">
                <div className="icon"></div>
                <div className="serch"></div>
                <div className="productQuantity"></div>
            </div>
            <div className="content">
                <div className="productBox">
                    <div className="productImg"></div>
                    <p className="productName"></p>
                    <div className="productPrice"></div>
                </div>
            </div>
        </div>
    );
};
 
export default Products;