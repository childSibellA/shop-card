import "./Choosen.css";
import Header from "../header/Header.js";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import ChoosenUnic from "./ChoosenUnic";

const Choosen = () => {
  const choosen = useSelector(state => state.products.choosenProducts);
  const [filtered, setFiltered] = useState([]);
  useEffect(() => {
    let uni = choosen.filter((v,i,a) => {
      return a.findIndex(v2 => {
        return ['name'].every(k => {
          return v2[k] === v[k] 
        });
      }) === i
    });
    setFiltered(uni);
  }, [choosen]);

  return (
    <div className="chosenBackground">
      <Header />
      <div className="Choosen" >
        <div className="listProperty">total price: 0</div>
        <ChoosenUnic filtered={filtered} />
      </div>
    </div>
  );
};

export default Choosen;