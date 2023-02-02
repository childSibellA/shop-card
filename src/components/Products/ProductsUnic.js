import { useState } from "react";

const ProductsUnic = (props) => {
    const [active, setActive] = useState(true);

    return ( 
        <>
            <div className="productBox" key={props.index}>
                <div className="productImg">img</div>
                <p className="productName">{props.product.name}</p>
                <div className="priceAndBuy">
                    <div className="productPrice">{props.product.price}$</div>
                    {!active && <div onClick={() => {
                        setActive(true);
                        props.removeHandler(props.product);
                    }} className={"removeBascetBtn"}>remove from bascet</div>} 
                    {active && <div onClick={() => {
                        setActive(false);
                        props.addDispachHandler(props.product);
                    }} className={"addBascetBtn"}>add in bascet</div>}
                </div>
            </div>
        </>
     );
}
 
export default ProductsUnic;