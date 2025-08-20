// Import React library and useState hook for managing component state
import React, { useState } from "react";

// Import child components used for rendering different pages
import MainPage from "./components/MainPage";
import ProductCreate from "./components/ProductCreate";
import ProductList from "./components/ProductList";
import ProductUpdate from "./components/ProductUpdate";

// Define the main App component
function App() {
  // Declare state to track which page is currently active (main, create, list, update)
  const [currentPage, setCurrentPage] = useState("main");

  // Declare state to store the list of products
  const [products, setProducts] = useState([]);

  // Function to add a new product to the products array
  const addProduct = (newProduct) => {
    setProducts((prev) => [...prev, newProduct]); // Use spread operator to add to previous array
  };

  // Define a function to update an existing product in the state
  const updateProduct = (updatedProduct) => {
    // Use the setProducts function to update the state
    setProducts((prev) =>
      // Map through the previous product list
      prev.map((p) =>
        // If the product code matches the updated product's code,
        // replace it with the updated product object
        p.productCode === updatedProduct.productCode ? updatedProduct : p
      )
    );
  };


  // Variable to hold the component to render based on currentPage
  let pageContent;

  // Use switch statement to decide which component to show
  switch (currentPage) {
    case "create":
      // Render ProductCreate component with props: addProduct function and navigation handler
      pageContent = (
        <ProductCreate onAddProduct={addProduct} onNavigate={setCurrentPage} />
      );
      break;

    case "list":
      // Render ProductList component with props: products array and navigation handler
      pageContent = (
        <ProductList products={products} onNavigate={setCurrentPage} />
      );
      break;

    case "update":
      // Render ProductUpdate component with props: products array, update function, and navigation handler
      pageContent = (
        <ProductUpdate
          products={products}
          onUpdateProduct={updateProduct}
          onNavigate={setCurrentPage}
        />
      );
      break;

    default:
      // Render MainPage by default, passing navigation handler to choose which page to go to
      pageContent = <MainPage onSelectPage={setCurrentPage} />;
  }

  // Return the selected page component wrapped in a <div>
  return <div>{pageContent}</div>;
}

// Export App component to be used elsewhere (e.g., index.js)
export default App;