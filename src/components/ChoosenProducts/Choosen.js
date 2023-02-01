import "./Choosen.css";
import Header from "../header/Header.js";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

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
      {filtered.map((item, i) => {
        return (
          <div className="Choosen" key={item.id + item.name + i}>
            <div className="listProperty">total price: 0</div>
            <div className="choosenProducts">
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
          </div>
        )
      })}
    </div>
  );
};

export default Choosen;
