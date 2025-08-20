import { useState } from "react";
import ProductCreate from "./components/ProductCreate";

function App() {
  const [products, setProducts] = useState([]);

  const addProduct = (newProduct) => {
    console.log("New Product", newProduct);
    setProducts((prev) => [...prev, newProduct]);
  };
  return (<div><ProductCreate onAddProduct={addProduct} /></div>);
}

export default App; // Export the App component as the default export