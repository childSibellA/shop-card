import { useSelector } from "react-redux";
// import { useState } from "react";


const ProductsUnic = (props) => {
    const products = useSelector(state => state.products.productsList);
    // const [mapState, setMapState] = useState()s

    return ( 
        <>
        {products.map(product =>
           <div className="productBox" key={product.id}>
                <div className="productImg">img</div>
                <p className="productName">{product.name}</p>
                <div className="priceAndBuy">
                    <div className="productPrice">{product.price}$</div>
                    <div onClick={() => {props.addDispachHandler(product)}} className="addBascetBtn">add in bascet</div>
                </div>
            </div>
        )}
        </>
     );
}
 
export default ProductsUnic;