// Import React and the useState hook for state management
import React, { useState } from "react";

// Import MainPage component to be used as the landing/menu page
import MainPage from "./components/MainPage";

// Import ProductCreate component to render the product creation form
import ProductCreate from "./components/ProductCreate"; 

// Define the main App component
function App() {
  // Declare state to track the current active page. Initially set to "main"
  const [currentPage, setCurrentPage] = useState("main");

  // Declare state to store a list of products. Starts as an empty array
  const [products, setProducts] = useState([]);

  // Function to add a new product to the products list
  const addProduct = (newProduct) => {
    // Spread the previous product list and add the new product to it
    setProducts((prev) => [...prev, newProduct]);
  };

  // Declare a variable to store which component to render based on currentPage
  let pageContent;

  // Use switch-case to decide what to display based on currentPage state
  switch (currentPage) {
    case "create":
      // If currentPage is "create", render ProductCreate component
      // Pass addProduct to handle product saving and setCurrentPage for navigation
      pageContent = (
        <ProductCreate onAddProduct={addProduct} onNavigate={setCurrentPage} />
      );
      break;

    default:
      // If no specific case matched (like "main"), render MainPage component
      // Pass setCurrentPage to allow navigation from menu
      pageContent = <MainPage onSelectPage={setCurrentPage} />;
  }

  // Render the selected page content inside a div
  return (<div>{pageContent}</div>);
}

// Export the App component to be used in index.js or elsewhere
export default App;