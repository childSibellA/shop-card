const ChoosenUnic = (props) => {
    return ( 
        <>
        {props.unicChoosen.map((item, id) => {
            return (
              <div className="choosenProducts"key={id}>
                <div className="choosenImg"></div>
                <div className="nameAndPrice">
                  <p className="choosenName">{item.name}</p>
                  <div className="choosenPrice">{item.price}$</div>
                </div>
                <div className="btns">
                  <div>amount: 0</div>
                  <div className="addButton">Add</div>
                  <div className="removeButton">Remove</div>
                </div>
              </div>
            )
          })}
        </>
     );
}
 
export default ChoosenUnic;