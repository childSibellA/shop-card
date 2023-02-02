import "./Choosen.css";
import Header from "../header/Header.js";
import { useDispatch, useSelector } from "react-redux";
import ChoosenUnic from "./ChoosenUnic";

const Choosen = () => {
  const unicChoosen = useSelector(state => state.products.unicChoosenPeoduct);
  const dispatch = useDispatch();

  const addUnicProduct = (product) => {
    dispatch({ type: "ADD_COOSEN_PRODUCT", product});
    console.log(product)
  }

  return (
    <div className="chosenBackground">
      <Header />
      <div className="Choosen" >
        <div className="listProperty">total price: 0</div>
        {unicChoosen.map((product, index) => {
          return <ChoosenUnic unicChoosen={unicChoosen} product={product} index={index} addUnicProduct={addUnicProduct} />
        })}
      </div>
    </div>
  );
};

export default Choosen;