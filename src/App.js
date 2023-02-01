
import Products from './components/Products/Products';
import Choosen from './components/ChoosenProducts/Choosen';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/bucket" element={<Choosen />} />
      </Routes>
    </div>
  );
}

export default App;
