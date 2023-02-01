
import { Link } from 'react-router-dom';
import './App.css';
import Products from './components/Products/Products';
import Choosen from './components/ChoosenProducts/Choosen';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/bucket" element={<Choosen />} />
      </Routes>
      <Link to="/">Products</Link>
      <Link to="/bucket">choosen</Link> */}
      <Products />
    </div>
  );
}

export default App;
