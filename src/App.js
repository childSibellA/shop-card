import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Products from './components/Products';


 const router = createBrowserRouter([
  {path: '/', element: <Home />},
  {path: '/products', element: <Products />}
 
]);


function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
