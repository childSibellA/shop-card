const ChoosenUnic = (props) => {
    return ( 
        <>
          <div className="choosenProducts"key={props.index}>
            <div className="choosenImg"></div>
            <div className="nameAndPrice">
              <p className="choosenName">{props.product.name}</p>
              <div className="choosenPrice">{props.product.price}$</div>
            </div>
            <div className="btns">
              <div>quantity: 0</div>
              <div className="addButton" onClick={props.addUnicProduct(props.product)}>Add</div>
              <div className="removeButton">Remove</div>
            </div>
          </div>
        </>
     );
}
 
export default ChoosenUnic;