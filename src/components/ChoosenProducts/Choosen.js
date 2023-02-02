import "./Choosen.css";
import Header from "../header/Header.js";
import { useSelector } from "react-redux";
import ChoosenUnic from "./ChoosenUnic";

const Choosen = () => {
  const unicChoosen = useSelector(state => state.products.choosenProducts);

  return (
    <div className="chosenBackground">
      <Header />
      <div className="Choosen" >
        <div className="listProperty">total price: 0</div>
        <ChoosenUnic unicChoosen={unicChoosen} />
      </div>
    </div>
  );
};

export default Choosen;